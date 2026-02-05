import { Footer } from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";

export default function ClientSideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
