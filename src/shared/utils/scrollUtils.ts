/**
 * Smart scroll utility that handles lazy-loaded sections
 * Uses MutationObserver to detect when elements are added to the DOM
 * Implements retry logic with exponential backoff
 */

interface ScrollOptions {
  behavior?: ScrollBehavior;
  maxRetries?: number;
  timeout?: number;
}

/**
 * Scrolls to a section by ID, with intelligent retry for lazy-loaded elements
 * @param id - The element ID to scroll to
 * @param options - Scroll configuration options
 * @returns Promise that resolves when scroll completes or fails
 */
export async function scrollToSection(
  id: string,
  options: ScrollOptions = {}
): Promise<boolean> {
  const {
    behavior = 'smooth',
    maxRetries = 10,
    timeout = 3000,
  } = options;

  // Try to find element immediately
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior });
    return true;
  }

  // Element not found - set up observer for lazy-loaded content
  return new Promise((resolve) => {
    let retryCount = 0;
    let observer: MutationObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;
    let pollingIntervalId: NodeJS.Timeout | null = null;

    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      if (pollingIntervalId) {
        clearInterval(pollingIntervalId);
        pollingIntervalId = null;
      }
    };

    const attemptScroll = () => {
      const targetElement = document.getElementById(id);
      
      if (targetElement) {
        cleanup();
        targetElement.scrollIntoView({ behavior });
        resolve(true);
        return true;
      }

      retryCount++;
      
      if (retryCount >= maxRetries) {
        cleanup();
        console.warn(
          `scrollToSection: Element with id "${id}" not found after ${maxRetries} retries. ` +
          'This may indicate the section is not yet loaded or does not exist.'
        );
        resolve(false);
        return false;
      }

      return false;
    };

    // Set up MutationObserver to watch for DOM changes (fast path)
    observer = new MutationObserver(() => {
      attemptScroll();
    });

    // Observe the entire document body for additions
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Set up polling as backup (checks every 100ms)
    pollingIntervalId = setInterval(() => {
      attemptScroll();
    }, 100);

    // Set up timeout fallback
    timeoutId = setTimeout(() => {
      cleanup();
      console.warn(
        `scrollToSection: Timeout after ${timeout}ms waiting for element "${id}". ` +
        'Element may be lazy-loaded and taking longer than expected.'
      );
      resolve(false);
    }, timeout);

    // Try immediately after setting up observer and polling
    attemptScroll();
  });
}

/**
 * Synchronous version for backward compatibility
 * Falls back to basic scroll without retry logic
 * @param id - The element ID to scroll to
 */
export function scrollToSectionSync(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`scrollToSectionSync: Element with id "${id}" not found.`);
  }
}

/**
 * Scrolls to the top of the page
 */
export function scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
  window.scrollTo({ top: 0, behavior });
}

/**
 * Checks if an element is in the viewport
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
