"use client";

import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.459L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.451-4.437-9.887-9.888-9.888-5.451 0-9.887 4.434-9.889 9.888-.001 2.225.651 4.315 1.847 6.03l-1.216 4.422 4.522-1.192z"/>
    </svg>
);

export default function FloatingContactButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <TooltipProvider>
      <div className={cn(
        "fixed bottom-6 right-6 z-50 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href="https://wa.me/573332688419" target="_blank" rel="noopener noreferrer">
              <Button
                size="icon"
                className="rounded-full w-14 h-14 shadow-lg btn-shine bg-[#25D366] hover:bg-[#1DA851] text-white"
                aria-label="Contactar por WhatsApp"
              >
                <WhatsAppIcon />
              </Button>
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Contáctanos por WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
