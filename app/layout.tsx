import { ReactNode } from "react";
import { Lato } from "next/font/google"
import ClientSideLayout from "./ClientSideLayout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://artisanery.tech"),
  title: {
    default: "Artisanery Tech | Product Engineering & Scalable Software Systems",
    template: "%s | Artisanery Tech",
  },
  description:
    "US-based product engineering company specializing in scalable system architecture, MVP development, platform evolution, and technical SEO for SaaS and enterprise platforms.",
  openGraph: {
    title: "Artisanery Tech",
    description:
      "Product-focused engineering for scalable digital platforms.",
    url: "https://artisanery.tech",
    siteName: "Artisanery Tech",
    type: "website",
  },
};


const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
})



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
      <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Artisanery Tech",
                url: "https://artisanery.tech",
                logo: "https://artisanery.tech/images/logo/logotext.png",
                description:
                  "Product-focused engineering firm specializing in scalable software systems, MVP builds, system architecture design, and technical SEO foundations.",
                sameAs: [],
              }),
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Artisanery Tech",
                url: "https://artisanery.tech",
              }),
            }}
          />

            <ClientSideLayout>
              {children}
            </ClientSideLayout>
      </body>
    </html>
  );
}