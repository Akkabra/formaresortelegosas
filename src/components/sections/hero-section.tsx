
"use client";

import Image from 'next/image';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import images from '@/lib/placeholder-images.json';
import { cn } from '@/lib/utils';


export default function HeroSection() {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if(contactSection) {
      const headerOffset = 64; // Approx height of the header
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10">
            {images.heroImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                fill
                priority={index === 0}
                className={cn(
                  "object-cover transition-opacity duration-1000 ease-in-out absolute inset-0",
                  currentImage === index ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
        </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 to-black/70" />

      <div className="container px-4 text-white flex flex-col items-center z-10">
        <Image
            src="/LOGO PRINCIPAL FORMARESORTES LEGOBLANCO SIN FONDO SAS.png"
            alt="FormaResortes LEGO SAS Logo"
            width={307}
            height={160}
            className="mb-4 w-[227px] md:w-[307px]"
        />
        <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase drop-shadow-2xl">
          Ingeniería en <span className="text-primary">Resortes</span>
        </h1>
        <p className="mt-4 font-body text-base md:text-lg max-w-2xl mx-auto drop-shadow-xl">
          Resortes de precisión y formas de alambre. Calidad, durabilidad y rendimiento en cada vuelta.
        </p>
        <Button 
          onClick={scrollToContact}
          className="mt-8 font-headline text-lg tracking-wider btn-shine"
          size="lg"
          variant="outline"
        >
          Contáctanos
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
