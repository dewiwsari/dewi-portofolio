import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const ROLES = [
  "Software Engineer", 
  "Frontend Developer", 
  "Mobile Developer", 
  "Data Analyst", 
  "AI Engineer", 
  "Other Tech Roles"
];


export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ background: "#F8FAFC" }}
    >
      <div className="max-w-5xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{
              color: "#E96D9E",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Contact
          </span>

          <h2 className="text-4xl lg:text-[48px] text-[#0F172A] tracking-tight mb-4">
            Let's build something{" "}
            <span style={{ color: "#E96D9E" }}>great</span>
          </h2>

          <p
            className="text-[#64748B] max-w-lg mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            I'm actively seeking internship opportunities. Feel free to connect
            with me through any of the platforms below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-6"
        >
          {/* Main Contact Card */}
          <div
            className="rounded-3xl p-8 text-white relative overflow-hidden"
            style={{
              background: "#0F172A",
              boxShadow: "0 20px 60px rgba(15,23,42,0.18)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-72 h-72 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10"
              style={{
                background:
                  "radial-gradient(circle, #E96D9E, transparent)",
              }}
            />

            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 relative z-10"
              style={{
                background:
                  "linear-gradient(135deg,#E96D9E,#EC4899)",
              }}
            >
              <Mail size={24} />
            </div>

            <h3
              className="text-white text-2xl mb-3 relative z-10"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
              }}
            >
              Open to Opportunities
            </h3>

            <p
              className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Currently seeking internship opportunities across:
            </p>

            <div className="flex flex-wrap gap-2 mb-8 relative z-10">
              {ROLES.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full text-xs font-medium border"
                  style={{
                    borderColor: "rgba(233,109,158,0.35)",
                    background: "rgba(233,109,158,0.1)",
                    color: "#FDA4C7",
                  }}
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="space-y-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-10 relative z-10">

                {/* CONTACT */}
                <div>
                  <h4
                    className="text-sm uppercase tracking-wider mb-4"
                    style={{
                      color: "#FDA4C7",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    Contact Information
                  </h4>

                  <div className="space-y-4">

                    <div className="flex items-center gap-3 text-slate-400">
                      <MapPin
                        size={15}
                        style={{ color: "#E96D9E", flexShrink: 0 }}
                      />
                      <span>Depok, West Java, Indonesia</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-400">
                      <Clock
                        size={15}
                        style={{ color: "#E96D9E", flexShrink: 0 }}
                      />
                      <span>Available for a 6 Months Internship</span>
                    </div>

                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=kadewiwulansari@gmail.com"
                      className="flex items-center gap-3 text-slate-400 hover:text-[#E96D9E] transition-colors duration-200"
                    >
                      <Mail
                        size={15}
                        style={{ color: "#E96D9E", flexShrink: 0 }}
                      />
                      <span>kadewiwulansari@gmail.com</span>
                    </a>

                    <a
                      href="https://wa.me/6287770236649"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-[#E96D9E] transition-colors duration-200"
                    >
                      <FaWhatsapp
                        size={15}
                        style={{ color: "#E96D9E", flexShrink: 0 }}
                      />
                      <span>+62 877-7023-6649</span>
                    </a>

                  </div>
                </div>

                {/* SOCIAL */}
                <div>
                  <h4
                    className="text-sm uppercase tracking-wider mb-4"
                    style={{
                      color: "#FDA4C7",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    Social Profiles
                  </h4>

                  <div className="space-y-4">

                    <a
                      href="https://github.com/dewiwsari"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-[#E96D9E] transition-colors duration-200"
                    >
                      <Github
                        size={15}
                        style={{ color: "#E96D9E", flexShrink: 0 }}
                      />
                      <span>github.com/dewiwsari</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/dewiwulansarii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-[#E96D9E] transition-colors duration-200"
                    >
                      <Linkedin
                        size={15}
                        style={{ color: "#E96D9E", flexShrink: 0 }}
                      />
                      <span>linkedin.com/in/dewiwulansarii</span>
                    </a>

                    <a
                      href="https://instagram.com/dewiwsari_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-[#E96D9E] transition-colors duration-200"
                    >
                      <Instagram
                        size={15}
                        style={{ color: "#E96D9E", flexShrink: 0 }}
                      />
                      <span>@dewiwsari_</span>
                    </a>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}