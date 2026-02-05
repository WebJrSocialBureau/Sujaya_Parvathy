import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#080808] py-24 lg:py-40 px-8 lg:px-16 overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-[-5%] text-[20vw] lg:text-[15vw] font-black text-white/[0.02] select-none pointer-events-none uppercase whitespace-nowrap">
        Philosophy
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Philosophical Quote */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase mb-4 lg:mb-8 flex items-center gap-4">
                <span className="w-8 lg:w-12 h-[1px] bg-brand-pink"></span>
                The Foundation
              </h2>

              <blockquote className="text-xl sm:text-3xl lg:text-5xl font-light italic leading-tight tracking-tight text-white/90">
                "I believe that a{" "}
                <span className="text-brand-pink font-bold not-italic text-sm sm:text-3xl lg:text-5xl inline sm:block lg:inline">
                  free and independent press
                </span>{" "}
                is essential to democracy. Our responsibility is to serve the
                public interest above all else."
              </blockquote>

              <div className="mt-12 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full bg-brand-pink/20 flex items-center justify-center text-[10px] font-black">
                    SP
                  </div>
                </div>
                <div>
                  <p className="text-white font-bold tracking-widest text-xs">
                    SUJAYA PARVATHY
                  </p>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">
                    Chief Editor, Big TV
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Professional Summary */}
          <div className="col-span-12 lg:col-span-6 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-lg lg:text-xl text-white/70 leading-relaxed font-light">
                Accomplished broadcast journalist with over{" "}
                <span className="text-white font-medium">
                  18 years of experience
                </span>{" "}
                in Malayalam television news. Currently serving as Chief Editor
                at Big TV Malayalam, bringing extensive expertise in news
                editing and editorial operations.
              </p>

              <p className="text-sm lg:text-base text-white/50 leading-relaxed">
                Recognized for unwavering commitment to journalistic integrity
                and editorial independence, with a distinguished career spanning
                premier channels including Asianet News, Reporter TV, 24 News,
                and Doordarshan.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-brand-pink text-[10px] font-black tracking-widest uppercase mb-4">
                    Integrity
                  </h4>
                  <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                    Standing firm on principles of journalistic freedom over
                    career considerations.
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-pink text-[10px] font-black tracking-widest uppercase mb-4">
                    Leadership
                  </h4>
                  <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                    Building and mentoring editorial teams to establish credible
                    news sources.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
