import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary component to catch and handle React errors
 * Prevents the entire app from crashing when an error occurs
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    // In production, you would send this to an error reporting service
    // Example: Sentry, LogRocket, etc.
    // logErrorToService(error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="max-w-2xl w-full">
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle className="text-xl font-semibold mb-2">
                Oops! Terjadi Kesalahan
              </AlertTitle>
              <AlertDescription className="text-base">
                Kami mengalami error yang tidak terduga. Jangan khawatir, data Anda aman. 
                Silakan coba refresh halaman.
              </AlertDescription>
            </Alert>

            <div className="glass-card rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <AlertCircle className="w-6 h-6" />
                <h3 className="font-semibold text-lg">Detail Error</h3>
              </div>

              {this.state.error && (
                <div className="bg-muted/50 rounded-xl p-4 font-mono text-sm">
                  <p className="text-destructive font-semibold mb-2">
                    {this.state.error.toString()}
                  </p>
                  {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                    <details className="mt-4">
                      <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                        Stack Trace
                      </summary>
                      <pre className="mt-2 text-xs overflow-auto max-h-64 text-muted-foreground">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="flex gap-4">
                <Button 
                  onClick={this.handleReset}
                  className="flex items-center gap-2"
                  variant="default"
                >
                  <RefreshCw className="w-4 h-4" />
                  Coba Lagi
                </Button>
                <Button 
                  onClick={() => window.location.href = '/'}
                  variant="outline"
                >
                  Ke Beranda
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Jika masalah berlanjut, silakan hubungi dukungan atau coba hapus cache browser Anda.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
