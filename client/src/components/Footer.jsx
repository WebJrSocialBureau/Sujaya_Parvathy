import React from "react";
import { motion } from "framer-motion";
import BackToTop from "./BackToTop";
import { Instagram, Twitter, Youtube, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#050505] pt-16 lg:pt-24 pb-12 px-6 lg:px-16 border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Logo */}
          <div className="col-span-1">
            <h3 className="font-black tracking-tighter text-sm uppercase mb-3">
              SUJAYA PARVATHY
            </h3>
            <p className="text-white/40 text-[9px] leading-relaxed font-light max-w-xs">
              Media leader and broadcast journalist dedicated to editorial
              excellence and journalistic independence.
            </p>
            <a href="https://bigtv24x7.com">
              <img
                src="/LOGO (2).png"
                alt="Big TV Logo"
                className="w-32 h-auto mb-8"
              />
            </a>
          </div>

          {/* Column 2 - Navigation */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Work", "Journal", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/40 text-[9px] hover:text-brand-pink transition-colors tracking-widest uppercase"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-white/40 text-[9px] tracking-widest uppercase">
              <li>Kochi, Kerala, IN</li>
              <li className="break-all">sujayaparvathy.time7@gmail.com</li>
            </ul>
          </div>

          {/* Column 4 - Social */}
          <div className="col-span-1">
            <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-6">
              Follow
            </h4>
            <div className="flex gap-3">
              {
                // Order: Instagram, X (Twitter icon), Youtube, Facebook, Linkedin
                (() => {
                  const socialLinks = [
                    "https://www.instagram.com/sujayaparvathy/",
                    "https://x.com/sujayaparvathy",
                    "https://www.youtube.com/@bigtv24x7live",
                    "https://www.facebook.com/sujaya.parvathys/",
                    "https://www.linkedin.com/in/sujaya-parvathy-s-84859714b/",
                  ];

                  const socialLabels = [
                    "Instagram",
                    "X",
                    "YouTube",
                    "Facebook",
                    "LinkedIn",
                  ];

                  return [Instagram, Twitter, Youtube, Facebook, Linkedin].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href={socialLinks[i]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={socialLabels[i]}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-pink hover:border-brand-pink transition-all"
                      >
                        <Icon size={16} strokeWidth={1.5} />
                      </a>
                    ),
                  );
                })()
              }
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-3 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
              <div className="flex flex-row items-center gap-3 text-[9px] md:text-[11px] font-bold text-muted uppercase tracking-[0.2em] mt-6 justify-start w-full text-left">
                <span>POWERED BY</span>

                <a href="https://www.socialbureau.in/enquiry-form" target="_blank" rel="noopener noreferrer" className="flex justify-start items-center">
                  <img
                    src="https://www.socialbureau.in/assets/logo.webp"
                    alt="SocialBureau"
                    className="h-5 md:h-8 w-auto"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          <BackToTop />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
