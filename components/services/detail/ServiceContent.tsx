"use client";

import { motion } from "framer-motion";

interface Section {
  title: string;
  content: string;
}

interface ServiceContentProps {
  intro: string;
  sections: Section[];
}

export function ServiceContent({ intro, sections }: ServiceContentProps) {
  return (
    <section className="relative py-28 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-white/80 font-light">
            {intro}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative"
            >
              {/* Accent line */}
              <div className="absolute -left-6 top-2 w-1 h-8 bg-white/20 rounded-full" />

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 tracking-tight">
                {section.title}
              </h3>

              {/* Content */}
              <div className="text-white/70 leading-relaxed space-y-3 whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
