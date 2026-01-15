export interface SocialLink {
  name: string;
  url: string;
  icon: "email" | "github" | "instagram" | "whatsapp" | "linkedin";
}

export interface DeveloperInfo {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: SocialLink[];
}

export const developerData: DeveloperInfo = {
  name: "Ihza Mahendra",
  role: "Full Stack Developer",
  bio: "Saya seorang developer yang passionate dalam menciptakan solusi teknologi yang bermanfaat. Website ini dikembangkan sebagai proyek untuk membantu bisnis kopi lokal dalam digitalisasi layanan pemesanan dan manajemen cabang.",
  image: "/ihza.webp",
  socialLinks: [
    {
      name: "Email",
      url: "mailto:ihzahmahendra@gmail.com",
      icon: "email",
    },
    {
      name: "GitHub",
      url: "https://github.com/ihza6661",
      icon: "github",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ihza_baker",
      icon: "instagram",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/6289692070270",
      icon: "whatsapp",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ihza-mahendra-a00b843a3/",
      icon: "linkedin",
    },
  ],
};
