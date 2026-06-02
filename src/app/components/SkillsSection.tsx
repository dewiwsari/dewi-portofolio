import { motion } from "motion/react";

interface Skill { name: string; icon: string }

const SKILL_GROUPS: { category: string; skills: Skill[] }[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/EA2D2E" },
      { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin/7F52FF" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php/8892BF" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Dart", icon: "https://cdn.simpleicons.org/dart/0175C2" },
      { name: "SQL", icon: "https://cdn.simpleicons.org/sqlite/003B57" },
      { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/336791" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },  
      { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
      { name: "Android Studio", icon: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
      { name: "Anaconda", icon: "https://cdn.simpleicons.org/anaconda/44A833" },
      { name: "R Studio", icon: "https://cdn.simpleicons.org/r/276DC3" },
      { name: "Unity", icon: "https://cdn.simpleicons.org/unity/000000" },
    ],
  },
  {
    category: "Analytics & Data",
    skills: [
      { name: "Excel", icon: "https://cdn.simpleicons.org/microsoftexcel/217346" },
      { name: "Power BI", icon: "https://cdn.simpleicons.org/powerbi/F2C811" },
      { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "PySpark", icon: "https://cdn.simpleicons.org/apachespark/E25A1C" },
      { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter/F37626" },
    ],
  },
];

function SkillChip({ name, icon }: Skill) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="flex flex-col items-center gap-2 p-3.5 rounded-2xl bg-white border border-[#F1F5F9] hover:border-[#E96D9E]/30 hover:shadow-md cursor-default transition-colors duration-150 w-[80px]"
    >
      <div className="w-9 h-9 flex items-center justify-center">
        <img
          src={icon}
          alt={name}
          className="w-7 h-7 object-contain"
          onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0"; }}
        />
      </div>
      <span
        className="text-[10px] text-[#64748B] text-center leading-tight font-medium"
        style={{ fontFamily: "'Inter',sans-serif" }}
      >
        {name}
      </span>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ color: "#E96D9E", fontFamily: "'JetBrains Mono',monospace" }}
          >
            Technical Skills
          </span>
          <h2 className="text-4xl lg:text-[48px] text-[#0F172A] tracking-tight mb-4">
            Tools of the trade
          </h2>
          <p className="text-[#64748B] max-w-lg mx-auto" style={{ fontFamily: "'Inter',sans-serif" }}>
            A broad, evolving toolkit spanning mobile, web, backend, and data — forged through real projects and continuous learning.
          </p>
        </motion.div>

        <div className="space-y-10">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.07 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-[0.16em] whitespace-nowrap"
                  style={{ fontFamily: "'JetBrains Mono',monospace" }}
                >
                  {group.category}
                </span>
                <div className="flex-1 h-px bg-[#E2E8F0]" />
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <SkillChip key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
