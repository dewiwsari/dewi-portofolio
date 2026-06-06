import { motion } from "motion/react";
import { Github, Download, ArrowRight, Sparkles, Mail } from "lucide-react";
import { Eye } from "lucide-react";


const STATS = [
  { value: "10+", label: "Projects Built" },
  { value: "3", label: "Work Experiences" },
  { value: "5+", label: "Awards & Recognitions" },
];

function FloatingBadge({ label, bg, color, style }: { label: string; bg: string; color: string; style?: React.CSSProperties }) {
  return (
    <motion.span
      className="absolute px-3 py-1.5 rounded-full text-xs font-semibold border border-white/60 shadow-sm backdrop-blur-sm whitespace-nowrap"
      style={{ background: bg, color, ...style }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
    >
      {label}
    </motion.span>
  );
}

export function HeroSection() {
  const badgePositions: React.CSSProperties[] = [
    { top: "8%", left: "2%" },
    { top: "18%", right: "2%" },
    { top: "32%", left: "-4%" },
    { top: "45%", right: "-2%" },
    { top: "60%", left: "1%" },
    { top: "72%", right: "3%" },
    { bottom: "18%", left: "3%" },
    { bottom: "8%", right: "1%" },
    { top: "5%", left: "30%" },
    { bottom: "5%", right: "25%" },
    { top: "50%", left: "48%" },
    { bottom: "25%", left: "42%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#F8FAFC" }}>
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle,rgba(233,109,158,0.18) 0%,transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle,rgba(236,72,153,0.1) 0%,transparent 70%)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle,rgba(15,23,42,0.04) 1px,transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* ── LEFT CONTENT ── */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-sm font-medium"
              style={{ borderColor: "rgba(233,109,158,0.35)", background: "rgba(233,109,158,0.06)", color: "#E96D9E" }}
            >
              <Sparkles size={13} />
              Open for Internship Opportunities · 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-5xl lg:text-6xl xl:text-[68px] text-[#0F172A] mb-5 leading-[1.05] tracking-tight"
            >
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#E96D9E 0%,#EC4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Dewi
              </span>
              <br />
              Wulansari
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base font-medium text-[#64748B] mb-3 tracking-wide"
              style={{ fontFamily: "'JetBrains Mono',monospace" }}
            >
              Software Engineering Undergraduate Student
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="text-[#475569] leading-relaxed mb-8 max-w-[520px] text-[17px]"
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              Software Engineering Technology student at{" "}
              <span className="font-semibold text-[#0F172A]">IPB University</span>, 
              building digital experiences across mobile, web, and data. A 6th-semester 
              student dedicated to strengthening my technical 
              foundations through hands-on learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-white text-sm font-semibold hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
                style={{
                  background: "linear-gradient(135deg,#E96D9E,#EC4899)",
                  boxShadow: "0 4px 20px rgba(233,109,158,0.4),0 1px 3px rgba(233,109,158,0.3)",
                  fontFamily: "'Inter',sans-serif",
                }}
              >
                <Mail size={15} />
                Get in Touch
                <ArrowRight size={14} />
              </a>
              <a
                href="https://drive.google.com/file/d/1hc1IY8YQyrFJFReONDGVjuacCxAYn_7V/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-[#E2E8F0] text-[#0F172A] text-sm font-semibold hover:border-[#E96D9E]/40 hover:bg-[#E96D9E]/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: "'Inter',sans-serif", boxShadow: "0 1px 4px rgba(15,23,42,0.06)" }}
              >
                <Eye size={18} />
                Open CV
              </a>
              <a
                href="https://github.com/dewiwsari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0F172A] text-white text-sm font-semibold hover:bg-[#1E293B] hover:scale-[1.02] active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: "'Inter',sans-serif" }}
              >
                <Github size={15} />
                GitHub
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="flex items-center gap-6"
            >
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  <div>
                    <p
                      className="text-2xl text-[#0F172A] leading-none mb-0.5"
                      style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800 }}
                    >
                      {s.value}
                    </p>
                    <p className="text-xs text-[#94A3B8]" style={{ fontFamily: "'Inter',sans-serif" }}>
                      {s.label}
                    </p>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="w-px h-8 bg-[#E2E8F0]" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT PHOTO ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-[300px] sm:w-[360px] lg:w-full max-w-[420px]">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-[2.5rem]"
                style={{
                  background: "linear-gradient(135deg,#E96D9E,#EC4899)",
                  transform: "rotate(-3deg) scale(1.02)",
                  opacity: 0.12,
                }}
              />
              <div
                className="absolute inset-0 rounded-[2.5rem]"
                style={{
                  background: "linear-gradient(135deg,#E96D9E,#EC4899)",
                  transform: "rotate(1.5deg) scale(1.01)",
                  opacity: 0.07,
                }}
              />

              {/* Photo */}
              <div
                className="relative rounded-[2.5rem] overflow-hidden"
                style={{ aspectRatio: "4/5", boxShadow: "0 24px 80px rgba(15,23,42,0.14),0 4px 12px rgba(15,23,42,0.08)" }}
              >
                <img
                  src="/src/assets/profile/foto.png"
                  alt="Dewi Wulansari"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top,rgba(15,23,42,0.55) 0%,transparent 55%)" }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <p
                    className="text-white font-semibold text-base leading-tight"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
                  >
                    Dewi Wulansari
                  </p>
                  <p className="text-white/65 text-xs mt-0.5" style={{ fontFamily: "'Inter',sans-serif" }}>
                    IPB University · Software Engineering Technology
                  </p>
                </div>
              </div>


              {/* Stat chips */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-4 top-8 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[#F1F5F9]"
              >
                <p
                  className="text-2xl text-[#0F172A] leading-none"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800 }}
                >
                  10+
                </p>
                <p className="text-[10px] text-[#94A3B8] mt-0.5" style={{ fontFamily: "'Inter',sans-serif" }}>
                  Projects
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 }}
                className="absolute -left-4 bottom-24 bg-white rounded-2xl px-4 py-3 shadow-xl border border-[#F1F5F9]"
              >
                <p
                  className="text-2xl leading-none"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, color: "#E96D9E" }}
                >
                  5+
                </p>
                <p className="text-[10px] text-[#94A3B8] mt-0.5" style={{ fontFamily: "'Inter',sans-serif" }}>
                  Awards
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
