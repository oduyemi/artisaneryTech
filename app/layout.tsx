import { ReactNode } from "react";
import { Lato } from "next/font/google"
import ClientSideLayout from "./ClientSideLayout";
import "./globals.css";

export const metadata = {
  title: "Artisanery Tech | Product-Focused Software Engineering",
  description:
    "Artisanery Tech is the product and engineering arm of Artisanery, building scalable web and mobile products with long-term ownership, clarity, and care.",
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