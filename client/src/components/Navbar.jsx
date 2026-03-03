import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "WORK", href: "/#work" },
    { label: "BLOG", href: "/#blogs" },
    { label: "ABOUT", href: "/#about" },
    { label: "CONTACT", href: "/#contact" },
  ];

  const authLinks = [{ label: "LOGIN", href: "/login" }];

  // Placeholder for auth state - in a real app this would come from a context
  const isLoggedIn = localStorage.getItem("token");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white hover:text-brand-pink transition-colors z-60"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#080808] z-55 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="text-2xl tracking-[0.3em] font-black text-white hover:text-brand-pink transition-all no-underline"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {isLoggedIn ? (
                  <Link
                    to="/admin"
                    onClick={closeMenu}
                    className="text-2xl tracking-[0.3em] font-black text-brand-pink no-underline"
                  >
                    ADMIN
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="text-2xl tracking-[0.3em] font-black text-white hover:text-brand-pink transition-all no-underline"
                  >
                    LOGIN
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
