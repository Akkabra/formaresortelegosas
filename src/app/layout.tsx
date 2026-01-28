import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import FloatingContactButton from '@/components/floating-contact-button';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.formaresorteslego.com'),
  title: {
    default: 'FormaResortes LEGO SAS - Resortes de Precisión y Formas de Alambre',
    template: `%s | FormaResortes LEGO SAS`,
  },
  description: 'Más de 20 años de experiencia en la fabricación de resortes de compresión, torsión, extensión y formas de alambre a medida. Calidad y precisión para la industria en Itagüí, Colombia.',
  keywords: ['resortes', 'formas de alambre', 'resortes de compresión', 'resortes de torsión', 'resortes de extensión', 'fabricación de resortes', 'FormaResortes', 'Itagüí', 'Colombia', 'industria metalmecánica'],
  authors: [{ name: 'FormaResortes LEGO SAS', url: 'https://www.formaresorteslego.com' }],
  creator: 'FormaResortes LEGO SAS',
  
  openGraph: {
    title: 'FormaResortes LEGO SAS - Expertos en Resortes y Alambre',
    description: 'Soluciones a medida en resortes de compresión, torsión, extensión y formas de alambre. Calidad garantizada para todas las industrias.',
    url: 'https://www.formaresorteslego.com',
    siteName: 'FormaResortes LEGO SAS',
    images: [
      {
        url: '/LOGO PRINCIPAL FORMARESORTES LEGOBLANCO SIN FONDO SAS.png',
        width: 307,
        height: 160,
        alt: 'Logo de FormaResortes LEGO SAS',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FormaResortes LEGO SAS - Resortes de Precisión',
    description: 'Fabricamos resortes y formas de alambre a medida con los más altos estándares de calidad. Contáctanos para tu próximo proyecto.',
    images: ['/LOGO PRINCIPAL FORMARESORTES LEGOBLANCO SIN FONDO SAS.png'],
  },

  icons: {
    icon: '/LOGO PRINCIPAL FORMARESORTES LEGOBLANCO SIN FONDO SAS.png',
    shortcut: '/LOGO PRINCIPAL FORMARESORTES LEGOBLANCO SIN FONDO SAS.png',
    apple: '/LOGO PRINCIPAL FORMARESORTES LEGOBLANCO SIN FONDO SAS.png',
  },
  
  alternates: {
    canonical: '/',
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&family=Oswald:wght@500;700&family=Poppins&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <FloatingContactButton />
        <Toaster />
      </body>
    </html>
  );
}
