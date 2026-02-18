import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "WORK", href: "/#work" },
    { label: "JOURNAL", href: "/#journal" },
    { label: "ABOUT", href: "/#about" },
    { label: "CONTACT", href: "/#contact" },
  ];

  const authLinks = [{ label: "LOGIN", href: "/login" }];

  // Placeholder for auth state - in a real app this would come from a context
  const isLoggedIn = localStorage.getItem("token");

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 lg:px-16 py-8 ${
        isHome ? "mix-blend-difference" : "bg-[#080808]/80 backdrop-blur-md"
      }`}
    >
      <Link
        to="/"
        className="flex items-center gap-2 group cursor-pointer no-underline text-white"
      >
        <span className="font-black tracking-tighter text-xl group-hover:text-brand-pink transition-colors">
          SUJAYA <span className="opacity-50"> </span> PARVATHY
        </span>
      </Link>

      <nav className="hidden md:flex gap-10 items-center">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.5 }}
            className="text-[10px] tracking-[0.3em] font-bold hover:text-brand-pink transition-all relative group no-underline text-white"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-pink transition-all group-hover:w-full"></span>
          </motion.a>
        ))}

        {isLoggedIn ? (
          <Link
            to="/admin"
            className="text-[10px] tracking-[0.3em] font-bold text-brand-pink hover:text-white transition-all relative group no-underline"
          >
            ADMIN
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
          </Link>
        ) : (
          authLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-[10px] tracking-[0.3em] font-bold hover:text-brand-pink transition-all relative group no-underline text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-pink transition-all group-hover:w-full"></span>
            </Link>
          ))
        )}
      </nav>
    </motion.header>
  );
};

export default Navbar;
