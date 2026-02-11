import { ReactNode } from "react";
import { Lato } from "next/font/google"
import ClientSideLayout from "./ClientSideLayout";
import "./globals.css";

export const metadata = {
  title: "Artisanery Tech | Product-Focused Software Engineering",
  description:
    "Artisanery Tech is a United States software development company specializing in custom software development, scalable web applications, product strategy, and long-term software architecture.",
    keywords: [
      "US software development company",
      "custom software development",
      "product-focused engineering firm",
      "software consulting United States",
      "enterprise software architecture"
    ], 
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
            <ClientSideLayout>
              {children}
            </ClientSideLayout>
      </body>
    </html>
  );
}