import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] pt-12 lg:pt-24 pb-12 px-6 lg:px-16 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-10 lg:gap-24 mb-12 lg:mb-20">
          <div className="col-span-12 lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4 lg:mb-8">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-brand-pink flex items-center justify-center overflow-hidden shrink-0">
                <span className="text-[10px] lg:text-xs font-black text-black">
                  SP
                </span>
              </div>
              <span className="font-black tracking-tighter text-lg lg:text-2xl uppercase text-left">
                SUJAYA PARVATHY
              </span>
            </div>
            <p className="text-white/40 text-[10px] sm:text-sm leading-relaxed font-light tracking-wide max-w-sm mb-8 lg:mb-12 text-left">
              Media leader and broadcast journalist dedicated to editorial
              excellence and journalistic independence. Leading the future of
              news at Big TV Malayalam.
            </p>
            <div className="flex gap-2 sm:gap-6 justify-start">
              {[Instagram, Twitter, Youtube, Facebook, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-pink hover:border-brand-pink transition-all"
                  >
                    <Icon size={14} lgSize={16} strokeWidth={1.5} />
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 text-left">
              <div className="col-span-1">
                <div className="mb-10 lg:mb-16">
                  <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-4 lg:mb-8">
                    Navigation
                  </h4>
                  <ul className="space-y-3 lg:space-y-4">
                    {["Work", "Journal", "About", "Contact"].map((link) => (
                      <li key={link}>
                        <a
                          href={`#${link.toLowerCase()}`}
                          className="text-white/40 text-[9px] lg:text-xs hover:text-brand-pink transition-colors tracking-widest uppercase"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10 lg:mb-0">
                  <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-4 lg:mb-8">
                    Contact
                  </h4>
                  <ul className="space-y-3 lg:space-y-4 text-white/40 text-[9px] lg:text-xs tracking-widest uppercase">
                    <li>Kochi, Kerala, IN</li>
                    <li className="break-all">editorial@sujayap.com</li>
                    <li className="break-all">media.inquiries@bigtv.com</li>
                  </ul>
                </div>
              </div>

              <div className="col-span-1">
                <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-4 lg:mb-8 text-left">
                  Current Role
                </h4>
                <p className="text-brand-pink font-bold text-[9px] lg:text-xs tracking-widest mb-1 lg:mb-2 uppercase text-left">
                  CHIEF EDITOR
                </p>
                <div className="flex items-center justify-start gap-2 text-white/40 text-[9px] lg:text-xs tracking-widest uppercase">
                  <span>Big</span>
                  <span className="bg-brand-pink text-black px-1 font-black text-[7px] lg:text-[9px]">
                    TV
                  </span>
                  <span>Malayalam</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 lg:pt-12 border-t border-white/5 flex flex-col-reverse md:flex-row justify-between items-center gap-8 lg:gap-8">
          <p className="text-[8px] lg:text-[10px] font-bold text-white/20 tracking-[0.4em] text-left leading-relaxed">
            © 2026 SUJAYA PARVATHY. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 lg:gap-4 group"
          >
            <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.3em] text-white/40 group-hover:text-brand-pink transition-colors uppercase">
              Back to Top
            </span>
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-pink group-hover:bg-brand-pink group-hover:text-black transition-all">
              <ArrowUp size={14} lgSize={16} strokeWidth={2} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
