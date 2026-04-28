import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Twitter, Youtube, Facebook, Linkedin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const socials = [
    { icon: Instagram, label: "IG" },
    { icon: Twitter, label: "X" },
    { icon: Youtube, label: "YT" },
    { icon: Facebook, label: "FB" },
    { icon: Linkedin, label: "IN" },
  ];
  return (
    <div className="relative min-h-screen w-full bg-[#080808] text-white overflow-hidden selection:bg-brand-pink/30">
      <Helmet>
        <title>
          Sujaya Parvathy | Award Winning Journalist & Multimedia Storyteller
        </title>
        <meta
          name="description"
          content="Official website of Sujaya Parvathy - Crafting compelling narratives through multimedia storytelling. A voice that resonates with truth and integrity."
        />
        <link rel="canonical" href="https://sujayaparvathy.com/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Background Grid Accent */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,45,85,0.1) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Main Content Area */}
      <main className="relative z-10 grid grid-cols-12 min-h-screen items-center px-8 lg:px-16 pt-20">
        {/* Left Side: Large Text */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 py-10 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4 lg:mb-6 flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="w-8 lg:w-12 h-[1px] bg-brand-pink"></div>
            <span className="text-brand-pink text-[8px] lg:text-[10px] tracking-[0.5em] font-black uppercase">
              Award Winning Journalist
            </span>
          </motion.div>

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.7,
              }}
              className="text-4xl sm:text-[15vw] lg:text-[9vw] leading-[0.9] lg:leading-[0.8] font-black tracking-tighter m-0 uppercase break-words text-center lg:text-left"
            >
              SUJAYA <br />
              <span className="stroke-outline">PARVATHY</span>
            </motion.h1>

            {/* Background Text Accent */}
            <motion.div
              style={{ y: y1 }}
              className="absolute -top-10 left-0 text-[10vw] lg:text-[15vw] font-black text-white/2 select-none pointer-events-none z-[-1] whitespace-nowrap opacity-20"
            >
              IMPACT
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="max-w-md text-white/40 text-sm mt-10 leading-relaxed font-light tracking-wide lg:ml-2 text-center lg:text-left mx-auto lg:mx-0"
          >
            Crafting compelling narratives through multimedia storytelling. A
            voice that resonates with truth and integrity in the digital
            landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-12 flex items-center gap-8"
          ></motion.div>
        </div>

        {/* Right Side: Portrait Image Wrapper */}
        <div className="col-span-12 lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2 h-[60vh] lg:h-auto mb-10 lg:mb-0">
          {/* Decorative Pink Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-0 w-full h-full bg-brand-pink/10 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ y: y2 }}
            className="relative w-full max-w-sm aspect-[3/4] z-10"
          >
            {/* Outline Box */}
            <div className="absolute -inset-4 border border-brand-pink/20 rounded-2xl z-20 pointer-events-none"></div>

            {/* The Image */}
            <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl group">
              <img
                src="https://res.cloudinary.com/dpfpenhqc/image/upload/q_auto/f_auto/v1777366804/iy8mbrsuzzaraf6c0for_jewnf0.jpg"
                alt="Sujaya Parvathy"
                fetchpriority="high"
                width="800"
                height="1067"
                className="w-full h-full object-cover grayscale brightness-110 contrast-110 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              {/* Pinkish Edge Glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,45,85,0.1)] pointer-events-none"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Social Links Rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="fixed bottom-12 right-12 z-50 hidden lg:flex flex-col gap-6 items-center"
      >
        <div className="w-[1px] h-20 bg-gradient-to-t from-brand-pink/50 to-transparent mb-2"></div>
        {socials.map((social, i) => (
          <a
            key={social.label}
            href="#"
            className="text-white/40 hover:text-brand-pink transition-colors"
          >
            <social.icon size={16} strokeWidth={1.5} />
          </a>
        ))}
      </motion.div>

      {/* Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* Make last name filled on small screens and outlined on large */
          .stroke-outline {
            -webkit-text-fill-color: white;
            -webkit-text-stroke: 0px white;
          }
          @media (min-width: 1024px) {
            .stroke-outline {
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 1px white;
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default Hero;
