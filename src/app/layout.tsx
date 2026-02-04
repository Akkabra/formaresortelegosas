import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import FloatingContactButton from '@/components/floating-contact-button';

export const metadata: Metadata = {
  title: 'FORMARESORTES LEGO SAS',
  description: 'Fabricación y venta de resortes de alta calidad y formas de alambre.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
