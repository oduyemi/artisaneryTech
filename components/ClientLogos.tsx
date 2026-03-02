"use client";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const logos = [
  "/images/clients/emara.png",
  "/images/clients/sparklingwhite.png",
  "/images/clients/abcole.png",
  "/images/clients/progrowing.png",
  "/images/clients/oduyemi.png",
];

const trustStats = [
  { label: "Products Built", value: "40+" },
  { label: "Active Clients", value: "12+" },
  { label: "Markets Served", value: "Global" },
  { label: "Engineering Focus", value: "Platforms & SaaS" },
];


export default function ClientLogos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const [paused, setPaused] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  /* Cursor spotlight */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const spotlightX = useSpring(mouseX, { stiffness: 35, damping: 18 });
  const spotlightY = useSpring(mouseY, { stiffness: 35, damping: 18 });

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 overflow-hidden border-y border-white/5"
    >
      {/* grid texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* spotlight */}
      <motion.div
        className="absolute w-[520px] h-[520px] pointer-events-none"
        style={{
          left: spotlightX,
          top: spotlightY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.07), transparent 65%)",
          filter: "blur(70px)",
        }}
      />

      {/* ambient glow */}
      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[1000px] h-[420px] bg-white/[0.035] blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.35em] text-white/40 uppercase mb-6">
            Platform Trust
          </p>

          <h3 className="text-3xl md:text-4xl font-semibold text-white/90 mb-4">
            Trusted by teams building serious products
          </h3>

          <p className="text-white/50 max-w-xl mx-auto">
            Companies rely on us to design, build, and scale modern software
            platforms.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          style={{ y: parallax }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {trustStats.map((stat) => (
            <div
              key={stat.label}
              className="
              relative
              rounded-xl
              border border-white/6
              bg-white/[0.025]
              px-6 py-5
              backdrop-blur
              transition
              hover:border-white/15
              hover:bg-white/[0.05]
            "
            >
              <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition bg-white/[0.03]" />

              <p className="relative text-lg font-semibold text-white">
                {stat.value}
              </p>
              <p className="relative text-xs text-white/45 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Carousel */}
        <div
          className="relative space-y-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-56 bg-gradient-to-r from-yellow-900 via-yellow-900/60 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-56 bg-gradient-to-l from-yellow-900 via-yellow-900/60 to-transparent z-10" />

          <CarouselRow
            direction="left"
            paused={paused}
            reduceMotion={reduceMotion}
            depth={0}
          />

          <CarouselRow
            direction="right"
            paused={paused}
            reduceMotion={reduceMotion}
            depth={20}
          />
        </div>
      </div>
    </section>
  );
}

function CarouselRow({
  direction,
  paused,
  reduceMotion,
  depth,
}: {
  direction: "left" | "right";
  paused: boolean;
  reduceMotion?: boolean;
  depth: number;
}) {
  const x = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <motion.div
      style={{ y: depth }}
      className="flex gap-16 items-center"
      animate={reduceMotion || paused ? { x: 0 } : { x }}
      transition={{
        repeat: Infinity,
        duration: 38,
        ease: "linear",
      }}
    >
      {[...logos, ...logos, ...logos].map((logo, i) => (
        <LogoCard key={i} logo={logo} />
      ))}
    </motion.div>
  );
}

function LogoCard({ logo }: { logo: string }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, { stiffness: 110, damping: 14 });
  const smoothY = useSpring(rotateY, { stiffness: 110, damping: 14 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateX.set(-(y - centerY) / 12);
    rotateY.set((x - centerX) / 12);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: smoothX,
        rotateY: smoothY,
        transformStyle: "preserve-3d",
      }}
      className="
        relative group
        h-[90px] w-[210px]
        rounded-2xl
        border border-white/6
        bg-white/[0.025]
        backdrop-blur-xl
        flex items-center justify-center
        transition-all duration-500
        hover:border-white/20
        hover:bg-white/[0.06]
        hover:-translate-y-1
      "
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-white/[0.05]" />

      <div className="relative w-[130px] h-[40px]">
        <Image
          src={logo}
          alt="Client logo"
          fill
          className="
            object-contain
            grayscale
            opacity-70
            transition-all duration-500
            group-hover:grayscale-0
            group-hover:opacity-100
          "
        />
      </div>
    </motion.div>
  );
}