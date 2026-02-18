import React from "react";
import { motion } from "framer-motion";
import { Award, Star, ShieldCheck } from "lucide-react";

const awards = [
  {
    title: "Adalji Award",
    category: "Journalism Excellence",
    desc: "Recognized for outstanding contributions to journalism and commitment to editorial excellence.",
  },
  {
    title: "Gurupriya Media Award",
    category: "Media Excellence (2022)",
    desc: "Honored for significant contributions to Malayalam journalism.",
  },
  {
    title: "Kerala Press Academy Award",
    category: "Best News Anchor",
    desc: "Prestigious recognition for excellence in news presentation and anchoring.",
  },
];

const Awards = () => {
  return (
    <section
      id="awards"
      className="bg-[#080808] py-24 px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase mb-4">
              Recognition
            </h2>
            <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">
              AWARDS & <span className="text-brand-pink">HONORS</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-8 lg:p-16 border border-white/5 rounded-[30px] lg:rounded-[40px] bg-white/[0.01] flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-brand-pink/20 flex items-center justify-center mb-6 lg:mb-8 bg-brand-pink/[0.02] group-hover:bg-brand-pink/10 transition-all duration-500">
                <Award
                  size={28}
                  className="text-brand-pink"
                  strokeWidth={1.5}
                />
              </div>

              <h4 className="text-xl lg:text-3xl font-black uppercase tracking-tighter mb-2 leading-tight">
                {award.title}
              </h4>
              <span className="text-brand-pink text-[8px] lg:text-[10px] font-bold tracking-[0.3em] uppercase mb-6 lg:mb-8">
                {award.category}
              </span>

              <p className="text-white/40 text-[10px] lg:text-sm font-light leading-relaxed">
                {award.desc}
              </p>

              <div className="absolute top-8 right-8 text-white/[0.03] pointer-events-none group-hover:text-brand-pink/10 transition-colors">
                <ShieldCheck size={100} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
