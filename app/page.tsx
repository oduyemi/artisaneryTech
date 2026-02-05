import { BookServiceCTA } from "@/components/home/BookCTA";
import { Capabilities } from "@/components/home/Capabilities";
import { Hero } from "@/components/home/Hero";
import { HowWeWork } from "@/components/home/How";
import { Intro } from "@/components/home/Intro";
import { Stewardship } from "@/components/home/Stewardship";
import { PreFooter } from "@/components/PreFooter";



export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <HowWeWork />
      <BookServiceCTA />
      <Capabilities />
      <Stewardship />
      <PreFooter />
    </>
  );
}
