import { ReactNode } from "react";
import ClientSideLayout from "./ClientSideLayout";
import "./globals.css";

export const metadata = {
  title: "Artisanery Tech | Product-Focused Software Engineering",
  description:
    "Artisanery Tech is the product and engineering arm of Artisanery, building scalable web and mobile products with long-term ownership, clarity, and care.",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
            <ClientSideLayout>
              {children}
            </ClientSideLayout>
      </body>
    </html>
  );
}