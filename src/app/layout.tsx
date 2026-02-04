import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import FloatingContactButton from '@/components/floating-contact-button';
import Script from 'next/script';


const title = 'FORMARESORTES LEGO SAS | Resortes y Formas de Alambre';
const description = 'Empresa líder en la fabricación y venta de resortes de compresión, torsión, extensión, y formas de alambre. Calidad y precisión para la industria en Colombia.';
const url = 'https://formaresorteslego.com'; 

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ['resortes', 'formas de alambre', 'resortes de compresión', 'resortes de torsión', 'resortes de extensión', 'fabricación de resortes', 'Itagüí', 'Antioquia', 'Colombia', 'industria metalmecánica', 'FormaResortes'],
  authors: [{ name: 'Bra Estudio Web', url: 'https://braestudioweb.com' }],
  creator: 'Bra Estudio Web',
  publisher: 'FORMARESORTES LEGO SAS',
  metadataBase: new URL(url),
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: 'FORMARESORTES LEGO SAS',
    images: [
      {
        url: '/LOGO PRINCIPAL FORMARESORTES LEGOBLANCO SIN FONDO SAS.png',
        width: 800,
        height: 600,
        alt: 'Logo de FORMARESORTES LEGO SAS',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [`${url}/LOGO PRINCIPAL FORMARESORTES LEGOBLANCO SIN FONDO SAS.png`], 
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  alternates: {
    canonical: url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FORMARESORTES LEGO SAS",
  "image": `${url}/LOGO%20PRINCIPAL%20FORMARESORTES%20LEGOBLANCO%20SIN%20FONDO%20SAS.png`,
  "@id": url,
  "url": url,
  "telephone": "+573101234567",
  "email": "formaresorteslego@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cl 34A #40 - 108",
    "addressLocality": "Itagüí",
    "addressRegion": "Antioquia",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.181518093801833,
    "longitude": -75.6029866888636
  },
  "description": description,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/formaresorteslego/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth dark">
      <head>
        <Script
            id="json-ld-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
