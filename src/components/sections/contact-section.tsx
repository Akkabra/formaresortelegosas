import AnimateOnScroll from "@/components/animate-on-scroll";
import { Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">
            Contáctanos
          </h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground/80">
            Estamos listos para ayudarte con tu próximo proyecto.
          </p>
        </AnimateOnScroll>
        
        <div className="mt-12 md:mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimateOnScroll className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-lg flex items-start gap-4">
              <Mail className="h-7 w-7 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-headline text-xl text-primary">Email</h3>
                <a href="mailto:formaresorteslego@gmail.com" className="mt-1 text-base text-foreground/80 hover:text-primary transition-colors break-all">formaresorteslego@gmail.com</a>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg flex items-start gap-4">
              <Phone className="h-7 w-7 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-headline text-xl text-primary">Teléfono</h3>
                <a href="tel:+573101234567" className="mt-1 text-base text-foreground/80 hover:text-primary transition-colors">+57 310 123 4567</a>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg flex items-start gap-4">
              <MapPin className="h-7 w-7 text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-headline text-xl text-primary">Dirección</h3>
                <p className="mt-1 text-base text-foreground/80">Cl 34A #40 - 108 Itagüí, Antioquia</p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg h-full">
              <h3 className="font-headline text-2xl text-primary mb-6">Envíanos un mensaje</h3>
              <form action="https://formspree.io/f/mwpnaoay" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Nombre</label>
                  <Input type="text" name="name" id="name" required className="w-full" placeholder="Tu nombre completo" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                  <Input type="email" name="email" id="email" required className="w-full" placeholder="tu@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Mensaje</label>
                  <Textarea name="message" id="message" rows={4} required className="w-full min-h-[100px]" placeholder="¿En qué podemos ayudarte?" />
                </div>
                <div>
                  <Button type="submit" className="w-full font-headline text-lg btn-shine" size="lg">
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="mt-12 md:mt-16 max-w-5xl mx-auto">
          <div className="w-full overflow-hidden rounded-lg shadow-2xl border-4 border-card" style={{paddingBottom: "45%", position: "relative"}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.620025983808!2d-75.6029866888636!3d6.181518093801833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46830d13872505%3A0x1994e037b3558b35!2sCl.%2034a%20%2340-108%2C%20La%20Gloria%2C%20Itag%C3%BCi%2C%20Antioquia!5e0!3m2!1sen!2sco!4v1721857989311!5m2!1sen!2sco"
              style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de FormaResortes"
              className="w-full h-full"
            ></iframe>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}