import { ContactAside } from "@/components/contact/Aside";
import { ContactIntro } from "@/components/contact/Intro";
import { ContactForm } from "@/components/forms/Contact";


export default function Contact() {
  return (
    <main className="relative bg-[var(--color-bg)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-20 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-12">
            <ContactIntro />
            <ContactForm />
          </div>

          <ContactAside />
        </div>
      </div>
    </main>
  );
}
