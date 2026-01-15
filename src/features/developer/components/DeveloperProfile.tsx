import { m } from 'framer-motion';
import { Mail, Github, Instagram, MessageCircle, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { developerData } from '../data/developerData';
import type { SocialLink } from '../data/developerData';

const iconMap = {
  email: Mail,
  github: Github,
  instagram: Instagram,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
};

export function DeveloperProfile() {
  const getSocialIcon = (icon: SocialLink['icon']) => {
    const Icon = iconMap[icon];
    return <Icon className="w-5 h-5" />;
  };

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="glass-card p-8 md:p-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Avatar */}
          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/20">
              <AvatarImage src={developerData.image} alt={developerData.name} />
              <AvatarFallback className="text-4xl font-semibold bg-primary text-primary-foreground">
                {developerData.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
          </m.div>

          {/* Name and Role */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {developerData.name}
            </h2>
            <p className="text-lg text-primary font-medium">
              {developerData.role}
            </p>
          </m.div>

          {/* Bio */}
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground leading-relaxed max-w-lg"
          >
            {developerData.bio}
          </m.p>

          {/* Social Links */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-3 pt-4"
          >
            {developerData.socialLinks.map((link, index) => (
              <m.div
                key={link.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                </Button>
              </m.div>
            ))}
          </m.div>
        </div>
      </Card>
    </m.div>
  );
}
