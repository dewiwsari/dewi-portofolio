import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(248,250,252,0.6)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(15,23,42,0.07)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 transition-transform group-hover:scale-110"
              style={{ background: "linear-gradient(135deg,#E96D9E,#EC4899)", fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              D
            </div>
            <span
              className="hidden sm:block text-[#0F172A] font-semibold text-sm tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
            >
              Dewi Wulansari
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-4 py-2 rounded-xl text-sm text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-all duration-150 font-medium"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="https://drive.google.com/uc?export=download&id=14pTsos8CQi3i9MygMgcOGswQUIc992dj"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#E2E8F0] text-[#0F172A] text-sm font-medium hover:border-[#E96D9E]/40 hover:bg-[#E96D9E]/5 transition-all duration-150"
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              <Download size={14} />
              CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white text-sm font-semibold hover:opacity-90 hover:scale-[1.02] transition-all duration-150"
              style={{ background: "linear-gradient(135deg,#E96D9E,#EC4899)", fontFamily: "'Inter',sans-serif" }}
            >
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-[#64748B] hover:bg-[#F1F5F9] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[60px] inset-x-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-[#F1F5F9] px-5 py-4 flex flex-col gap-1 md:hidden"
            style={{ boxShadow: "0 8px 32px rgba(15,23,42,0.08)" }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 rounded-xl text-[#475569] hover:text-[#E96D9E] hover:bg-[#F8FAFC] transition-all text-sm font-medium"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-2 mt-2 pt-3 border-t border-[#F1F5F9]">
              <a
                href="#"
                className="flex-1 text-center py-2.5 rounded-xl border border-[#E2E8F0] text-[#0F172A] text-sm font-medium"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                Download CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2.5 rounded-xl text-white text-sm font-semibold"
                style={{ background: "linear-gradient(135deg,#E96D9E,#EC4899)", fontFamily: "'Inter',sans-serif" }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
