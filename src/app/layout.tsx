import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; 
import "./globals.css";
import './kinetic-background.css'; 
import Analytics from "@/components/Analytics/Analytics"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.datapop.fun'), 
  title: "DataPop",
  description: "Transformamos datos en experiencias visuales",
  openGraph: {
    title: "DataPop",
    description: "Transformamos datos en experiencias visuales",
    url: "https://www.datapop.fun/",
    siteName: "DataPop",
    images: [
      {
        url: "/Miniatura.png", 
        width: 1200,
        height: 630,
        alt: "Miniatura de Data Pop",
      },
    ],
    locale: "es_CO",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4ST40NQSSK"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4ST40NQSSK');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Analytics /> {/* detecta navegación y reporta */}
        {children}
      </body>
    </html>
  );
}
