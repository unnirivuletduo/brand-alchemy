import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brand Alchemy - Creative. Design. Brand Agency New Zealand",
    template: "%s – Brand Alchemy",
  },
  description: "Creative. Design. Brand Agency New Zealand",
  keywords: [
    "Brand Alchemy",
    "creative agency NZ",
    "design agency New Zealand",
    "brand identity",
    "digital marketing",
    "custom website design",
    "brand strategy",
    "video production",
    "Auckland branding agency",
    "software development",
  ],
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_NZ",
    type: "website",
    images: [{ url: "/images/poster.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8RY5G23Y8G"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8RY5G23Y8G');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '370606434427552');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Metricool Tracker */}
        <Script
          id="metricool-tracker"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(a){
                var b=document.getElementsByTagName("head")[0],
                c=document.createElement("script");
                c.type="text/javascript";
                c.src="https://tracker.metricool.com/resources/be.js";
                c.onreadystatechange=a;
                c.onload=a;
                b.appendChild(c)
              }
              loadScript(function(){
                if (window.beTracker) {
                  window.beTracker.t({
                    hash:"204a6b1bad1a8f3193e0b7da2c07237f"
                  });
                }
              });
            `,
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}