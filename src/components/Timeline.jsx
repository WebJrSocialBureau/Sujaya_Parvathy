import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2026 – Present",
    role: "Chief Editor",
    org: "Big TV Malayalam",
    desc: "Leading the editorial vision and operations for the channel launch.",
  },
  {
    year: "2023 – 2026",
    role: "Coordinating Editor",
    org: "Reporter TV",
    desc: "Overseeing editorial operations and news content strategy.",
  },
  {
    year: "2021 – 2023",
    role: "News Editor",
    org: "24 News",
    desc: "Lead anchor and editor. Notably stood for journalistic freedom during suspension controversy.",
  },
  {
    year: "2012 – 2021",
    role: "Chief Broadcast Journalist",
    org: "Asianet News Network",
    desc: "Nearly a decade at Keralas most-watched news channel, conducting high-profile interviews.",
  },
  {
    year: "2009 – 2011",
    role: "Chief of Bureau",
    org: "Jeevan TV (New Delhi)",
    desc: "Covering national politics and central government activities from the capital.",
  },
  {
    year: "2007 – 2008",
    role: "Interviewer",
    org: "Doordarshan News",
    desc: "Foundational role in conducting interviews and content research.",
  },
];

const Timeline = () => {
  return (
    <section
      id="journal"
      className="bg-[#080808] py-24 px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-brand-pink"></span>
            Career Timeline
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] lg:leading-none">
            THE <span className="text-brand-pink">JOURNEY</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-8 lg:space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 group pl-8 md:pl-0">
                  <div className="p-6 lg:p-12 border border-white/5 rounded-xl lg:rounded-2xl bg-white/[0.02] hover:bg-brand-pink/[0.02] hover:border-brand-pink/20 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 blur-[40px] -translate-y-1/2 translate-x-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <span className="text-brand-pink font-bold text-[8px] lg:text-[10px] tracking-[0.3em] uppercase block mb-1 lg:mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-lg lg:text-3xl font-black uppercase tracking-tighter mb-1">
                      {item.role}
                    </h4>
                    <p className="text-white/40 text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4 lg:mb-6">
                      {item.org}
                    </p>
                    <p className="text-white/60 text-xs lg:text-sm font-light leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10 ml-[8px] md:ml-0 -translate-x-1/2">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#080808] border-2 border-brand-pink ring-4 ring-brand-pink/10"></div>
                </div>

                {/* Empty Spacer */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
