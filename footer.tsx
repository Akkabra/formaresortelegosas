import Image from 'next/image';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Sobre Nosotros' },
    { href: '#products', label: 'Productos' },
    { href: '#services', label: 'Servicios' },
    { href: '#contact', label: 'Contáctanos' },
];

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.459L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.451-4.437-9.887-9.888-9.888-5.451 0-9.887 4.434-9.889 9.888-.001 2.225.651 4.315 1.847 6.03l-1.216 4.422 4.522-1.192z"/>
    </svg>
);


const GmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.3 2.5L12 11.25 5.3 6.5h13.4zM4 18V8l8 5 8-5v10H4z"/>
    </svg>
);

const AnimatedSpringsBg = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
            <defs>
                <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00FFFF" />
                    <stop offset="100%" stopColor="#FF00FF" />
                </linearGradient>
            </defs>
            <g stroke="url(#neon-gradient)" strokeWidth="1.5" fill="none" className="animate-pulse-glow opacity-30">
                <path d="M -50 20 Q 0 40 50 20 T 150 20" />
                <path d="M -100 80 Q -50 100 0 80 T 100 80 T 200 80" />
                <path d="M 50% 10% Q 52% 20% 55% 10% T 60% 10%" />
                <path d="M 20% 90% Q 25% 110% 30% 90% T 40% 90%" />
                <path d="M 80% 85% Q 82% 95% 85% 85% T 90% 85%" />
                <path d="M 90% 25% Q 95% 5% 100% 25% T 110% 25%" />
            </g>
        </svg>
    </div>
);


export default function Footer() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
    };

    return (
        <footer className="footer-bg relative text-gray-300 overflow-hidden">
            <AnimatedSpringsBg />
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
                    
                    <div className="flex flex-col items-center sm:items-start">
                        <Image src="/LOGO PRINCIPAL FORMARESORTES LEGOBLANCO SIN FONDO SAS.png" alt="FormaResortes Logo" width={120} height={24} />
                        <p className="mt-2 text-sm text-gray-400">
                            Innovación y resistencia en cada resorte.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-headline text-lg text-white uppercase tracking-wider">Menú Rápido</h3>
                        <ul className="mt-4 space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-headline text-lg text-white uppercase tracking-wider">Contacto</h3>
                        <ul className="mt-4 space-y-2 text-gray-400">
                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                <Mail className="w-4 h-4" />
                                <span>formaresorteslego@gmail.com</span>
                            </li>
                            <li className="flex items-center justify-center sm:justify-start gap-2">
                                <Phone className="w-4 h-4" />
                                <span>+57 333 268 8419</span>
                            </li>
                             <li className="flex items-center justify-center sm:justify-start gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Cl 34A #40 - 108 Itagüí, Antioquia</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-headline text-lg text-white uppercase tracking-wider">Síguenos</h3>
                        <div className="flex justify-center sm:justify-start mt-4 space-x-6">
                            <a href="https://www.instagram.com/formaresorteslego/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white social-icon">
                                <Instagram className="h-7 w-7" />
                            </a>
                            <a href="https://wa.me/573332688419" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white social-icon">
                                <WhatsAppIcon />
                            </a>
                             <a href="mailto:formaresorteslego@gmail.com" className="text-gray-400 hover:text-white social-icon">
                                <GmailIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800/50 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} FormaResortes. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
