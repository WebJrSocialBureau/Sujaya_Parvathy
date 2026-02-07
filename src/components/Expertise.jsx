import React from "react";
import { motion } from "framer-motion";
import {
  Mic2,
  Layout,
  BookOpen,
  Users,
  Compass,
  AlertCircle,
  MessageSquare,
  Zap,
} from "lucide-react";

const competencies = [
  {
    icon: Layout,
    title: "Editorial Leadership",
    desc: "Managing newsrooms and editorial vision.",
  },
  {
    icon: Mic2,
    title: "News Presentation",
    desc: "Prime-time news anchoring and live presentation.",
  },
  {
    icon: BookOpen,
    title: "Content Strategy",
    desc: "Strategic planning and editorial policy formation.",
  },
  {
    icon: SearchIcon,
    title: "Investigative Reporting",
    desc: "In-depth reporting on social and political issues.",
  },
  {
    icon: Users,
    title: "Team Coordination",
    desc: "Supervising large multimedia editorial teams.",
  },
  {
    icon: AlertCircle,
    title: "Crisis Management",
    desc: "Handling complex news scenarios and media ethics.",
  },
  {
    icon: Compass,
    title: "Political Analysis",
    desc: "Deep expertise in Kerala and National politics.",
  },
  {
    icon: Zap,
    title: "Media Operations",
    desc: "Optimizing newsroom workflow and operations.",
  },
];

function SearchIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

const Expertise = () => {
  return (
    <section
      id="work"
      className="bg-[#080808] py-24 px-8 lg:px-16 border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-24 items-end mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase mb-4 flex items-center gap-4">
              <span className="w-8 lg:w-12 h-[1px] bg-brand-pink"></span>
              Core Expertise
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] lg:leading-none">
              STRATEGIC <br />
              <span className="text-brand-pink">COMPETENCIES</span>
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-4 mb-4">
            <p className="text-white/40 text-xs lg:text-sm font-light tracking-wide leading-relaxed lg:max-w-sm">
              Synthesizing 18 years of field journalism into high-level
              editorial leadership and content strategy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl lg:rounded-3xl overflow-hidden">
          {competencies.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#080808] p-8 sm:p-10 hover:bg-white/[0.02] transition-colors group cursor-default"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-brand-pink/5 border border-white/5 flex items-center justify-center mb-6 lg:mb-8 group-hover:border-brand-pink/30 group-hover:scale-110 transition-all duration-500">
                <skill.icon
                  size={18}
                  className="text-brand-pink group-hover:animate-pulse"
                  strokeWidth={1.5}
                />
              </div>
              <h4 className="text-white font-bold tracking-widest text-[10px] lg:text-xs uppercase mb-3 lg:mb-4 group-hover:text-brand-pink transition-colors">
                {skill.title}
              </h4>
              <p className="text-white/30 text-[10px] lg:text-xs font-light leading-relaxed tracking-wide">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
