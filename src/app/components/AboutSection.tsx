import { motion } from "motion/react";
import { GraduationCap, MapPin, Zap, Heart } from "lucide-react";
import header from "../../assets/profile/header.png";

const STRENGTHS = [
  {
    icon: <GraduationCap size={17} />,
    title: "Academic Foundation",
    desc: "Software Engineering Technology Student — Learning core computer science and software lifecycles at IPB University.",
  },
  {
    icon: <Zap size={17} />,
    title: "Frontend & UI Development",
    desc: "Frontend Exploration — Practicing responsive web design slicing (Figma to code) using HTML/CSS.",
  },
  {
    icon: <Heart size={17} />,
    title: "Intelligent System Integration",
    desc: "Adaptive AI Integration — Exploring machine learning models to build smart application features",
  },
  {
    icon: <MapPin size={17} />,
    title: "Community & Leadership",
    desc: "Teaches coding to rural youth, mentors juniors, and leads tech orgs — engineering beyond the screen.",
  },
];

const SEEKING = ["Software Engineer", "Frontend Developer", "Mobile Developer", "Data Analyst", "AI Engineer", "Other Tech Roles"];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
              style={{ color: "#E96D9E", fontFamily: "'JetBrains Mono',monospace" }}
            >
              About Me
            </span>
            <h2 className="text-4xl lg:text-[48px] text-[#0F172A] mb-6 tracking-tight">
              Learning, coding, and{" "}
              <span style={{ color: "#E96D9E" }}>building projects </span>one step at a time.
            </h2>

            <p className="text-[#475569] leading-relaxed mb-5 text-[16px]" style={{ fontFamily: "'Inter',sans-serif" }}>
              I'm <span className="font-semibold text-[#0F172A]">Dewi Wulansari</span> — a
              Software Engineering Technology student at IPB University.
              I enjoy building software solutions and exploring how technology 
              can solve everyday problems, both through code and community impact. 
            </p>
            <p className="text-[#475569] leading-relaxed mb-8 text-[16px]" style={{ fontFamily: "'Inter',sans-serif" }}>
              My current tech stack includes Flutter and Native Java for mobile 
              development, Laravel for web apps, and Figma for UI/UX design. 
              I'm always open to exploring new tools and ready to learn as much as 
              I can along the way.
            </p>

            {/* Meta info */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { k: "University", v: "IPB University" },
                { k: "Major", v: "Software Engineering Technology" },
                { k: "Location", v: "Depok, West Java" },
                { k: "Availability", v: "Open to Internship Opportunities (On-site, Remote, Hybrid)" },
              ].map(({ k, v }) => (
                <div key={k} className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-[#94A3B8] uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{k}</span>
                  <span className="text-sm font-semibold text-[#0F172A]" style={{ fontFamily: "'Inter',sans-serif" }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Seeking tags */}
            <div>
              <p className="text-xs text-[#94A3B8] uppercase tracking-widest mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                Seeking Roles In
              </p>
              <div className="flex flex-wrap gap-2">
                {SEEKING.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                    style={{
                      background: "rgba(233,109,158,0.06)",
                      borderColor: "rgba(233,109,158,0.25)",
                      color: "#E96D9E",
                      fontFamily: "'Inter',sans-serif",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Banner image */}
            <div className="rounded-2xl overflow-hidden h-44 relative">
              <img
                src={header}
                alt="Workspace"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg,rgba(233,109,158,0.25),rgba(15,23,42,0.35))" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-white text-lg font-semibold tracking-tight text-center px-4"
                  style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
                >
                  Software Engineering
                </p>
              </div>
            </div>

            {/* Strengths grid */}
            <div className="grid grid-cols-2 gap-3">
              {STRENGTHS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="p-4 rounded-2xl border border-[#F1F5F9] bg-[#F8FAFC] hover:border-[#E96D9E]/30 hover:bg-white hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(233,109,158,0.1)", color: "#E96D9E" }}
                  >
                    {s.icon}
                  </div>
                  <h4
                    className="text-[#0F172A] mb-1.5 text-sm"
                    style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700 }}
                  >
                    {s.title}
                  </h4>
                  <p className="text-[#64748B] text-xs leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
