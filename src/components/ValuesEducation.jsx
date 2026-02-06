import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Globe, Quote } from "lucide-react";

const academicLevels = [
  {
    degree: "Master of Journalism & Mass Communication",
    inst: "University of Kerala",
    period: "2007 – 2009",
  },
  {
    degree: "Bachelor of Arts (English Vocational)",
    inst: "St. Berchmans College, Changanacherry",
    period: "2004 - 2007",
  },
];

const values = [
  {
    title: "INTEGRITY",
    desc: "Upholding absolute truth and accuracy in every report.",
  },
  {
    title: "INDEPENDENCE",
    desc: "Prioritizing editorial freedom over external pressures.",
  },
  {
    title: "TRANSPARENCY",
    desc: "Maintaining clear, ethical standards in all operations.",
  },
];

const ValuesEducation = () => {
  return (
    <section
      id="values"
      className="bg-[#080808] py-24 px-8 lg:px-16 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          {/* Left: Values & Philosophy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative p-8 sm:p-12 lg:p-20 bg-brand-pink rounded-[40px] lg:rounded-[60px] text-black overflow-hidden"
            >
              <Quote
                className="absolute top-10 right-10 opacity-20 hidden sm:block"
                size={100}
              />

              <h2 className="text-[8px] lg:text-[10px] tracking-[0.5em] font-black uppercase mb-8 lg:mb-12 flex items-center gap-4">
                <span className="w-8 lg:w-12 h-[1px] bg-black"></span>
                Professional Values
              </h2>

              <div className="space-y-8 lg:space-y-12 relative z-10 text-center sm:text-left">
                {values.map((v, i) => (
                  <div key={i}>
                    <h4 className="text-xl lg:text-2xl font-black uppercase tracking-tighter mb-1 lg:mb-2">
                      {v.title}
                    </h4>
                    <p className="text-[10px] lg:text-sm font-medium leading-relaxed max-w-[200px] sm:max-w-xs mx-auto sm:mx-0 opacity-70">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 blur-[50px] rounded-full"></div>
            </motion.div>
          </div>

          {/* Right: Academic & Languages */}
          <div className="lg:col-span-6 space-y-16">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase mb-6 lg:mb-8 flex items-center gap-4"
              >
                <span className="w-8 lg:w-12 h-[1px] bg-brand-pink"></span>
                Academic Foundation
              </motion.h2>

              <div className="space-y-8 lg:space-y-10">
                {academicLevels.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 group text-center sm:text-left items-center sm:items-start"
                  >
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-brand-pink/10 group-hover:border-brand-pink/30 transition-all duration-500 shrink-0">
                      <GraduationCap
                        className="text-white group-hover:text-brand-pink transition-colors"
                        size={20}
                      />
                    </div>
                    <div>
                      <h4 className="text-base lg:text-xl font-bold tracking-tight text-white mb-1 group-hover:text-brand-pink transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-[10px] text-white/40 tracking-widest uppercase mb-1">
                        {edu.inst}
                      </p>
                      <span className="text-[8px] lg:text-[10px] font-bold text-brand-pink/60 tracking-widest">
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-white/5">
              <h2 className="text-white/20 text-[10px] tracking-[0.5em] font-black uppercase mb-8">
                Linguistic Proficiency
              </h2>
              <div className="flex flex-wrap gap-4">
                {[
                  "MALAYALAM (NATIVE)",
                  "ENGLISH (FLUENT)",
                  "HINDI (PROFICIENT)",
                ].map((lang, i) => (
                  <span
                    key={i}
                    className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold tracking-[0.2em] text-white/60 hover:border-brand-pink hover:text-brand-pink transition-all"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesEducation;
