import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Plus, Minus } from "lucide-react";

const detailedExperience = [
  {
    role: "Chief Editor",
    org: "Big TV Malayalam",
    period: "2026 – Present",
    points: [
      "Providing strategic editorial direction and overseeing all news content.",
      "Leading editorial teams and establishing content standards for the newly launched channel.",
      "Developing comprehensive editorial policies and guidelines.",
      "Managing daily news operations, story selection, and content planning.",
      "Ensuring journalistic integrity, accuracy, and adherence to ethical standards.",
      "Building and mentoring editorial teams.",
    ],
  },
  {
    role: "Coordinating Editor",
    org: "Reporter TV",
    period: "2023 – 2026",
    points: [
      "Coordinated editorial operations across multiple news programs.",
      "Supervised news editing teams and ensured content quality standards.",
      "Managed daily news planning, story assignments, and editorial workflow.",
      "Developed content strategies for prime-time news bulletins.",
      "Led coverage of major state and national political events.",
    ],
  },
  {
    role: "News Editor / Associate News Editor",
    org: "24 News",
    period: "2021 – 2023",
    points: [
      "Led news editing operations and coordinated editorial content.",
      "Anchored prime-time news programs and special coverage.",
      "Supervised news production teams and editorial workflows.",
      "Notably stood for journalistic freedom during a suspension controversy in March 2023.",
      "Garnered widespread support from journalist community for principled stance.",
    ],
  },
  {
    role: "Chief Broadcast Journalist",
    org: "Asianet News",
    period: "2012 – 2021",
    points: [
      "Led major news coverage and programs at Keralas most-watched news channel.",
      "Anchored prime-time news bulletins reaching millions of viewers.",
      "Led coverage of multiple state and national elections.",
      "Conducted high-profile interviews with political leaders and experts.",
      "Developed and presented investigative reports and special programs.",
    ],
  },
];

const ExperienceDetail = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="details"
      className="bg-[#080808] py-24 px-8 lg:px-16 border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-brand-pink"></span>
            Involvement
          </h2>
          <h3 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
            EDITORIAL <br />
            <span className="text-brand-pink">DEEP DIVE</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Role List */}
          <div className="lg:col-span-5 space-y-3 lg:space-y-4">
            {detailedExperience.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-full text-left p-4 lg:p-8 rounded-xl lg:rounded-2xl border transition-all duration-500 relative overflow-hidden group ${
                  activeIdx === idx
                    ? "bg-brand-pink/5 border-brand-pink/30 scale-[1.01] lg:scale-[1.02]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/10"
                }`}
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full bg-brand-pink transition-transform duration-500 ${activeIdx === idx ? "scale-y-100" : "scale-y-0"}`}
                ></div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4
                      className={`text-sm lg:text-base font-bold tracking-widest uppercase mb-1 transition-colors ${activeIdx === idx ? "text-brand-pink" : "text-white"}`}
                    >
                      {exp.org}
                    </h4>
                    <p className="text-[10px] lg:text-xs text-white/40 font-medium tracking-widest transition-colors">
                      {exp.role}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transition-transform duration-500 ${activeIdx === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detailed Points */}
          <div className="lg:col-span-7 relative h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 lg:p-12 bg-white/[0.01] border border-white/5 rounded-[40px] h-full"
              >
                <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-8">
                  <div>
                    <h5 className="text-2xl lg:text-4xl font-black uppercase tracking-tighter text-white">
                      {detailedExperience[activeIdx].org}
                    </h5>
                    <p className="text-brand-pink text-xs font-bold tracking-[0.3em] uppercase mt-2">
                      {detailedExperience[activeIdx].period}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {detailedExperience[activeIdx].points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 group"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-pink transition-colors">
                        <Plus
                          size={8}
                          className="text-brand-pink group-hover:text-black transition-colors"
                        />
                      </div>
                      <p className="text-xs lg:text-sm text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background Accent */}
            <div className="absolute -z-10 bottom-0 right-0 w-64 h-64 bg-brand-pink/5 blur-[100px] rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDetail;
