
"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Wrench, ShieldCheck, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Service = {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    id: "manufacturing",
    title: "Fabricación a Medida",
    description: "Producción de alta precisión.",
    details: "Producimos resortes y formas de alambre personalizadas en una amplia gama de materiales, tamaños y acabados para cualquier aplicación industrial, desde lotes pequeños hasta producción a gran escala.",
    icon: Wrench
  },
  {
    id: "quality",
    title: "Control de Calidad",
    description: "Garantía de durabilidad y rendimiento.",
    details: "Cada producto pasa por un estricto proceso de control de calidad, que incluye pruebas de carga, fatiga y dimensionales, para asegurar que cumple con los más altos estándares de la industria.",
    icon: ShieldCheck
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<Service | undefined>(services[0]);
  const [animationKey, setAnimationKey] = useState(0);

  const handleServiceClick = (service: Service) => {
    setActiveService(service);
    setAnimationKey(prev => prev + 1); // Trigger re-animation
  };

  const ActiveServiceContent = ({ service }: { service: Service }) => (
    <div className="w-full md:w-1/2 lg:w-2/3 md:pl-10 lg:pl-16 animate-fade-in-right">
      <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
        <CardContent className="p-8 md:p-10 flex flex-col justify-center h-full">
          <div className="flex items-start gap-6">
            <div className="text-primary animate-wobble-horizontal">
              <service.icon className="h-12 w-12 md:h-16 md:w-16" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-headline text-primary">
                {service.title}
              </h3>
              <p className="mt-4 text-base md:text-lg text-foreground/90">
                {service.details}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <section id="services" className="services-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-4xl md:text-5xl font-headline text-center text-primary">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-foreground/80">
            Fabricamos resortes y formas de alambre a la medida, adaptados a las necesidades específicas de cada cliente, garantizando calidad, precisión y confiabilidad en cada proyecto.
          </p>
        </AnimateOnScroll>

        {/* Mobile View: Carousel */}
        <div className="md:hidden mt-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-md mx-auto"
          >
            <CarouselContent>
              {services.map((service) => (
                <CarouselItem key={service.id}>
                    <div className="p-1">
                        <Card className="service-card overflow-hidden group cursor-pointer h-full bg-card/50 backdrop-blur-sm">
                            <div className="service-card-inner-border">
                                <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
                                    <div className="text-primary mb-4">
                                        <service.icon className="h-12 w-12" />
                                    </div>
                                    <h3 className="text-2xl font-headline text-primary">
                                        {service.title}
                                    </h3>
                                    <p className="mt-4 text-base text-foreground/90">
                                        {service.details}
                                    </p>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </CarouselItem>
              ))}
            </CarouselContent>
             <CarouselPrevious className="left-0" />
             <CarouselNext className="right-0"/>
          </Carousel>
        </div>

        {/* Desktop View: Tabs */}
        <div className="hidden md:flex mt-16 max-w-7xl mx-auto gap-10 lg:gap-16">
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col space-y-4">
            {services.map((service) => (
              <Button
                key={service.id}
                variant="ghost"
                className={cn(
                  "flex items-center justify-start text-left p-4 h-auto rounded-lg transition-all duration-300 transform-gpu hover:scale-105 hover:-rotate-1",
                  "bg-card/30 border border-transparent",
                  activeService?.id === service.id && "bg-primary/90 text-primary-foreground border-primary glow-primary"
                )}
                onClick={() => handleServiceClick(service)}
              >
                <div className={cn("p-3 bg-primary/10 rounded-md", activeService?.id === service.id && 'bg-white/20 animate-spin-once')}>
                    <service.icon className={cn("h-7 w-7 text-primary", activeService?.id === service.id && "text-white")} />
                </div>
                <div className="ml-4">
                  <p className="font-headline text-lg">{service.title}</p>
                  <p className={cn("text-sm text-foreground/70", activeService?.id === service.id && "text-white/80")}>
                    {service.description}
                  </p>
                </div>
              </Button>
            ))}
          </div>
          {activeService && <ActiveServiceContent service={activeService} key={animationKey} />}
        </div>
      </div>
    </section>
  );
}
