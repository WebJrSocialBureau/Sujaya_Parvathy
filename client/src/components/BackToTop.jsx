import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50
                 flex items-center justify-center
                 w-10 h-10 lg:w-12 lg:h-12
                 rounded-full
                 border border-white/10
                 bg-[#050505]
                 text-white/60
                 hover:bg-brand-pink hover:text-black hover:border-brand-pink
                 transition-all"
        >
            <ArrowUp size={16} strokeWidth={2} />
        </button>
    );
};

export default BackToTop;
