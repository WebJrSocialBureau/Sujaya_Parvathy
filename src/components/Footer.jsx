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
    <footer className="bg-[#050505] pt-24 pb-12 px-8 lg:px-16 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12 lg:gap-24 mb-20">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-2 mb-8 justify-start">
              <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center overflow-hidden">
                <span className="text-xs font-black text-black">SP</span>
              </div>
              <span className="font-black tracking-tighter text-xl lg:text-2xl uppercase">
                SUJAYA PARVATHY
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light tracking-wide max-w-sm mb-12">
              Media leader and broadcast journalist dedicated to editorial
              excellence and journalistic independence. Leading the future of
              news at Big TV Malayalam.
            </p>
            <div className="flex gap-6">
              {[Instagram, Twitter, Youtube, Facebook, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-pink hover:border-brand-pink transition-all"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-8">
                  Navigation
                </h4>
                <ul className="space-y-4">
                  {["Work", "Journal", "About", "Contact"].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-white/40 text-xs hover:text-brand-pink transition-colors tracking-widest"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-8">
                  Contact
                </h4>
                <ul className="space-y-4 text-white/40 text-xs tracking-widest">
                  <li>Kochi, Kerala, IN</li>
                  <li>editorial@sujayap.com</li>
                  <li>media.inquiries@bigtv.com</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-8">
                  Current Role
                </h4>
                <p className="text-brand-pink font-bold text-xs tracking-widest mb-2">
                  CHIEF EDITOR
                </p>
                <p className="text-white/40 text-xs tracking-widest uppercase">
                  Big TV Malayalam
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-white/20 tracking-[0.4em]">
            © 2026 SUJAYA PARVATHY. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-4 group"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 group-hover:text-brand-pink transition-colors uppercase">
              Back to Top
            </span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-pink group-hover:bg-brand-pink group-hover:text-black transition-all">
              <ArrowUp size={16} strokeWidth={2} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
