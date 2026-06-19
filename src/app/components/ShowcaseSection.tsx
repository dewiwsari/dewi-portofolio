import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Github, Figma, ExternalLink, ChevronLeft, ChevronRight,
  X, Trophy, FileText, Award, Briefcase, Users, Code2,
  ChevronDown, Building2,
} from "lucide-react";
import sitefestImg from "../../assets/competitions/sitefest.png";
import secompImg from "../../assets/competitions/secomp.jpg";
import hmpeImg from "../../assets/competitions/hmpe-uny.png";
import smartItImg from "../../assets/competitions/smart-it.png";
import PublicationsBT from "../../assets/publications/publication-bt.png";
import loa from "../../assets/publications/loa-bt.png";
import brieff from "../../assets/organizations/brieff.png";
import gmd from "../../assets/organizations/gmd.jpg";
import gmd1 from "../../assets/organizations/gmd1.png";
import gmd2 from "../../assets/organizations/gmd2.png";
import kominfo from "../../assets/organizations/kominfo.png";
import sikrab from "../../assets/organizations/sikrab.jpg";
import mte from "../../assets/organizations/mte.jpg";
import kabinet from "../../assets/organizations/kabinet.jpg";
import mulmed from "../../assets/organizations/mulmed.jpg";
import pkl from "../../assets/works/pkl.png";
import mct1 from "../../assets/works/mct1.jpeg";
import mct2 from "../../assets/works/mct2.jpeg";
import assist from "../../assets/works/assist.png";
import assist1 from "../../assets/works/assist1.jpg";
import myskill from "../../assets/certificates/MySkill.png";
import viskom from "../../assets/projects/cover-viskom.png";
import ukom from "../../assets/projects/cover-ukom.png";
import cms from "../../assets/projects/cms.png";
import gofood from "../../assets/projects/gofood.png";
import kmeans from "../../assets/projects/k-means.png";
import rf from "../../assets/projects/rf.png";


// ─── Types ───────────────────────────────────────────────────────────────────

interface CardItem {
  id: string;
  title: string;
  subtitle: string;
  role?: string;
  period?: string;
  achievement?: string;
  tags: string[];
  images: string[];
  links?: { github?: string; figma?: string; demo?: string; view?: string; cert?: string };
  overview?: string;
  responsibilities?: string[];
  achievements?: string[];
  technologies?: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PROJECTS: CardItem[] = [
  {
    id: "poultrease",
    title: "Poultrease",
    subtitle: "Poultry Farm Management System",
    role: "UI/UX Designer & Mobile Developer",
    period: "2024",
    tags: ["Mobile", "Website", "Java", "XML", "Android Studio", "Figma"],
    images: [
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=640&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=640&h=400&fit=crop&auto=format",
    ],
    links: { github: "#", figma: "#", demo: "#" },
    overview: "A comprehensive mobile app helping poultry farmers track flock health, feeding schedules, egg production, and financial performance in real-time — even offline.",
    responsibilities: [
      "Lead Flutter developer — architecture & UI implementation",
      "Integrated Firebase Realtime Database for live data sync",
      "Designed Figma prototypes and built pixel-perfect UI",
      "Built offline-first persistence with Hive",
    ],
    technologies: ["Java", "Kotlin", "Android Studio", "Figma"],
    achievements: ["Selected for IPB Innovation Showcase 2024"],
  },
  {
    id: "cms-extracurricular",
    title: "Journalist Extracurricular CMS",
    subtitle: "Content Management System - Website Based",
    role: "UI/UX Designer & Frontend Developer",
    period: "2026",
    tags: ["Website", "Blade", "PHP", "Laravel", "MySQL"],
    images: [
      cms,
    ],
    links: { github: "https://github.com/dewiwsari/FE-Jurnalistik.git", demo: "https://jurnalsmandas.web.id/" },
    overview: "Full-featured CMS for managing school extracurricular activities — member registrations, event scheduling, reporting, and role-based access control.",
    responsibilities: [
      "React + TypeScript frontend with responsive design",
      "Laravel REST API with comprehensive RBAC",
      "Normalized MySQL schema design & optimization",
      "Real-time notification system via WebSockets",
    ],
    technologies: ["Blade", "PHP", "Laravel", "MySQL"],
  },
  {
    id: "edenia-florist",
    title: "UI/UX Design for Edenia Florist App",
    subtitle: "E-Commerce Mobile App",
    role: "UI/UX Designer",
    period: "2024",
    tags: ["Design", "Figma"],
    images: [
      "https://images.unsplash.com/photo-1628277613967-6abca504d0ac?w=640&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=640&h=400&fit=crop&auto=format",
    ],
    links: { github: "#", figma: "#" },
    overview: "A beautifully designed e-commerce florist app with product catalog, custom bouquet builder, order tracking, and push notifications.",
    responsibilities: [
      "Designed Figma prototypes and built pixel-perfect UI",
    ],
    technologies: ["Figma"],
  },
  {
    id: "ai-food-rec",
    title: "AI Food Recommendation",
    subtitle: "ML-Powered Nutrition Mobile App",
    role: "UI/UX Designer & Flutter Developer",
    period: "2026",
    tags: ["Mobile", "Gemini AI",  "Flutter", "Dart", "Figma", "ML"],
    images: [
      viskom,
    ],
    links: { github: "#", demo: "#" },
    overview: "Intelligent food recommendation app using hybrid ML (collaborative + content-based filtering) to suggest personalized meal plans based on nutritional goals and allergies.",
    responsibilities: [
      "Trained hybrid ML model with scikit-learn",
      "FastAPI backend serving predictions at <200ms",
      "Flutter onboarding & preference engine",
      "Data pipeline with Pandas for model evaluation",
    ],
    technologies: ["Flutter", "Dart", "Figma", "Scikit-learn", "Pandas", "PostgreSQL"],
    achievements: ["95% recommendation accuracy on test set", "Sub-200ms API response time"],
  },
  {
    id: "big-data",
    title: "GoFood Product Batch Analytics",
    subtitle: "Big Data Processing with PySpark & Spark SQL",
    role: "Data Analyst & Pipeline Engineer",
    period: "2026",
    tags: ["Data Analytics", "Big Data", "PySpark", "Spark SQL", "Kaggle"],
    images: [
      gofood, kmeans, rf,
    ],
    links: { demo: "#" },
    overview: "Built a localized Big Data pipeline to ingest, clean, and analyze over 45,000+ commercial food delivery product listings from GoFood across major Indonesian cities using PySpark.",
    responsibilities: [
      "Configured a local PySpark Session environment to fetch and ingest raw datasets via the KaggleHub API programmatically.",
      "Engineered an automated preprocessing routine to resolve multi-line CSV formatting, escape characters, and infer accurate schemas.",
      "Developed optimized Spark SQL queries to run demographic pricing distributions, categorical trends, and regional operational behavior benchmarks.",
      "Aggregated commercial markdown trends by calculating platform-wide discount penetration rates using Spark DataFrame actions.",
    ],
    technologies: ["PySpark", "Spark SQL", "Python", "Google Colab", "Kaggle API"],
    achievements: [
      "Successfully processed 45,000+ data rows with inferred complex nested-string schema definitions.",
      "Discovered that bakery/snacks lead platform volume, while only 6.06% of merchants actively utilize dynamic price discounts."
    ],
  },
  {
    id: "otsu-thresholding",
    title: "Otsu's Thresholding Implementation",
    subtitle: "Computer Vision & Digital Image Processing",
    role: "Computer Vision Engineer (Academic)",
    period: "2025",
    tags: ["Computer Vision", "Image Segmentation", "OpenCV", "Algorithms", "Python"],
    images: [
      
    ],
    links: { demo: "#" },
    overview: "Implemented and evaluated Otsu's binarization method from scratch to perform optimal image segmentation, comparing built-in OpenCV functions against a manual 0-255 intensity variance search loop.",
    responsibilities: [
      "Developed an image segmentation pipeline to convert standard grayscale inputs into binary format using dynamic histogram thresholding.",
      "Coded Otsu's mathematical algorithm from scratch using NumPy to evaluate inter-class variance across all 256 pixel intensity levels.",
      "Analyzed the probability distributions ($w_1$, $w_2$) and class means ($\mu_1$, $\mu_2$) to dynamically locate peak mathematical boundaries.",
      "Generated performance visualization charts using Matplotlib to map image histograms against the top three highest-variance thresholds.",
    ],
    technologies: ["OpenCV", "NumPy", "Matplotlib", "Python", "Colab Google"],
    achievements: [
      "Identified the exact optimal mathematical threshold at 124.00 for the standard Lena benchmark image.",
      "Successfully mapped the highest inter-class variance distribution, validating manual loop arrays against native OpenCV operations."
    ],
  },
  {
    id: "epl-player-analytics",
    title: "EPL Goal Scorer Analytics",
    subtitle: "Descriptive Statistics & Outlier Detection",
    role: "Data Analyst (Academic)",
    period: "2025",
    tags: ["Data Analytics", "Pandas", "NumPy", "Tukey's Fences", "Python"],
    images: [
      
    ],
    links: { demo: "#" },
    overview: "Performed exploratory data analysis and descriptive statistics on the English Premier League (2020-2021) goal scorers dataset using Pandas and NumPy.",
    responsibilities: [
      "Cleaned raw sports datasets by handling arbitrary indices and isolating core performance attributes via Pandas `.iloc` slicing.",
      "Computed structural metrics including means, medians, standard deviations, and multi-level quantiles for advanced player evaluation.",
      "Implemented Tukey's Fences mathematical algorithm to detect statistical outliers and filter high-performing assist-makers.",
      "Aggregated multi-variable data using `.groupby()` to evaluate performance consistency and scoring averages across different football clubs.",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Google Colab", "Google Drive API"],
    achievements: [
      "Successfully mapped and filtered anomalies across 522 player profiles using automated IQR threshold filters.",
      "Delivered tabular aggregation models measuring standard deviation shifts in team scoring behavior."
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Recommendation Engine",
    subtitle: "Supervised Learning & Customer Feedback Classification",
    role: "Data Scientist / ML Engineer (Academic)",
    period: "2026",
    tags: ["Data Scientist", "Machine Learning", "Scikit-Learn", "Classification", "Feature Engineering", "Python"],
    images: [
      ukom,
    ],
    links: { demo: "https://drive.google.com/drive/folders/1bQxWFONAmB1NwnPqE4y7NTDf2sVixNxJ?usp=sharing" },
    overview: "Built an end-to-end predictive classification pipeline adhering to national data science standards to determine e-commerce product recommendation indices based on structured customer demographics and review behaviors.",
    responsibilities: [
      "Programmed a programmatic dataset intake pipeline using the KaggleHub API to fetch over 22,000 commercial fashion review entries.",
      "Engineered tabular preprocessing steps to handle sparse structures and filter out null text values across multi-variable classes.",
      "Conducted feature construction by tokenizing string properties into mathematical length markers and mapping categorical ordinal ranks.",
      "Trained and cross-evaluated Logistic Regression and Random Forest models using an 80:20 operational train-test partition strategy.",
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Google Colab", "Kaggle API"],
    achievements: [
      "Achieved a peak test accuracy of 93.2% utilizing the baseline Logistic Regression model for production telemetry.",
      "Successfully delivered a validation matrix optimizing high precision metrics (0.98) on recommended classes."
    ],
  },
];

const WORK: CardItem[] = [
  {
    id: "icon-plus",
    title: "Internship at PT Indonesia Comnets Plus",
    subtitle: "Technical Administrative Assistant",
    period: "Jan-Jun 2022",
    tags: ["NOC", "Excel", ],
    images: [pkl,],
    links: { view: "https://drive.google.com/drive/folders/1G8UXjfH_lNOpDZs2SEpINoUVcfhmCBrr" },
    overview: "Managed and monitored core infrastructure data, including POP environmental metrics and retail service tickets, ensuring operational stability and accurate reporting for regional network operations.",
    responsibilities: [
      "Monitored & managed POP environmental data (temperature & humidity) to ensure infrastructure stability and prevent hardware downtime.",
      "Tracked and reconciled Network Operations Center (NOC) data, including Open Tickets and Serpo Retail (Service Operation) metrics.",
      "Managed hardware asset tracking by auditing and documenting ONT Serial Numbers and MAC addresses for retail deployments.",
      "Compiled and analyzed daily operational data into structured reports for cross-functional management and troubleshooting follow-ups.",
      "Collaborated with field engineers to expedite ticket resolution and maintain strict Service Level Agreements (SLA)."
    ],
    technologies: [
      "NMS (Network Management System)",
      "Trouble Ticketing System", 
      "GPON / FTTH Technology", 
      "Microsoft Excel", 
      "Asset Management Systems"
   ],
  },
  {
    id: "teaching-assistant",
    title: "Teaching Assistant",
    subtitle: "IPB University — Islamic Studies",
    period: "Aug – Dec 2024",
    tags: ["Education", "Leadership", "Communication","Teaching", "Data Management"],
    images: [
      assist, assist1,
    ],
    links: { view: "https://www.instagram.com/asistensi.pai.sv.ipb" },
    overview: "Assisted professors in delivering Islamic Education courses, managing academic data, and coordinating class logistics for 60+ undergraduate students.",
    responsibilities: [
      "Lectured, explained course materials, and facilitated group discussions based on the teaching assistant team's guidelines.",
      "Designed student assignments and conducted objective evaluations and grading for over 60 students.",
      "Managed and maintained accurate student grading databases to ensure data integrity.",
      "Coordinated with the teaching assistant team for material preparation, task distribution, and technical class operations.",
    ],
    technologies: ["Microsoft Excel", "Google Sheets", "Learning Management System (LMS)"],
  },
  {
    id: "coding-instructor",
    title: "Part-Time Robotics Instructor",
    subtitle: "Mechatron Robotic School",
    period: "Feb 2026 – Present",
    tags: ["Robotics", "STEM", "Teaching", "Education", "Communication"],
    images: [
      mct1,
      mct2,    ],
    links: { view: "#" },
    overview: "Instructing elementary school students in fundamental robotics concepts using Bricks, TMS, and SPM, while managing classroom administrative and evaluation tasks.",
    responsibilities: [
      "Taught and demonstrated robotics concepts using Bricks, TMS (Total Mechanism System), and SPM (Smart Programming Module) tailored for elementary students.",
      "Facilitated hands-on building and logic sessions to foster problem-solving and STEM skills in children.",
      "Managed classroom administrative duties, including monitoring student attendance and documenting session progress.",
      "Evaluated student projects, provided constructive feedback, and maintained accurate grading records.",
    ],
    technologies: ["Robotics Bricks", "TMS (Robotics Kit)", "SPM (Simple Power Machine)", "Classroom Management Tools"],
  },
];

const ORGS: CardItem[] = [
  {
    id: "micro-it",
    title: "HIMAVO Micro IT — IPB University",
    subtitle: "IPB's Premier Tech Student Organization",
    role: "Division Secretary — Multimedia",
    period: "2024–2025",
    tags: ["Administration", "Project Management", "Multimedia", "Communication"],
    images: [mulmed, kabinet, mte,],
    links: { view: "https://www.instagram.com/micro_ipb" },
    overview: "Served as Division Secretary of the Multimedia Division while actively contributing to Micro Technology Education, one of the organization's flagship programs. Managed administrative operations, coordinated cross-divisional activities, and supported event execution to ensure successful educational and technology-focused initiatives.",
    responsibilities: [
      "Handled comprehensive divisional administration, including document archiving and maintaining attendance records for work programs, workshops, and meetings.",
      "Coordinated actively with bureau coordinators and other divisions to streamline internal communication and collaboration.",
      "Monitored, tracked, and managed internal project timelines to ensure all multimedia events and programs executed according to schedule.",
      "Contributed as an Event Division Member for Micro Technology Education, assisting in event planning, participant coordination, activity execution, and on-site event management.",
      "Supported the organization of technology education programs aimed at enhancing students' technical knowledge and practical skills through workshops and learning activities.",
    ],
  },
  {
    id: "gmd",
    title: "Gerakan Mengajar Desa",
    subtitle: "Community Education & Operations Volunteer",
    period: "2022–2024",
    tags: ["Education", "Business Development", "Content Management", "Social Impact"],
    images: [gmd1, gmd, gmd2,],
    links: { view: "https://www.instagram.com/mengajardesa.depok" },
    overview: "Contributed across multi-functional teams in a national educational initiative, driving fundraising efforts, producing community content, and delivering academic programs to rural elementary students.",
    responsibilities: [
      "Drove fundraising initiatives within the Business Development division through strategic merchandise/product sales to secure event funding.",
      "Produced and managed inspiring video content for the community's digital platforms as part of the Content Management team to boost engagement.",
      "Delivered both academic and non-academic lessons to elementary school students through creative indoor and outdoor learning activities.",
      "Coordinated and structured on-site community service programs to ensure orderly, impactful, and well-organized event execution.",
    ],
    technologies: ["Public Speaking", "Capcut", "Educational Content Creation", ],
  },
  {
    id: "kominfo",
    title: "KOMINFO TRPL",
    subtitle: "Software Engineering Technology Student Community",
    role: "Creative Content Designer",
    period: "2025",
    tags: ["Graphic Design", "Content Creation", "Social Media", "TPL"],
    images: [
      kominfo, sikrab,
    ],
    links: { view: "https://www.instagram.com/tpl.svipb" },
    overview: "Designed and managed creative digital content for the Software Engineering Technology (TPL) student community Instagram platform to boost engagement and share cohort updates.",
    responsibilities: [
      "Designed visually engaging feed and story content for the official TRPL cohort Instagram account.",
      "Conceptualized and developed branding elements and digital assets tailored to the identity of the software engineering community.",
      "Collaborated with the communications team to plan, schedule, and execute the content calendar for upcoming events and announcements.",
    ],
    technologies: ["Canva", "Instagram Insight", "Social Media Management"],
  },
];

const COMPETITIONS: CardItem[] = [
  {
    id: "sitefest",
    title: "SITEFEST 4.0",
    subtitle: "National UI/UX Design Competition",
    achievement: "Top 10 Finalist",
    period: "2024",
    tags: ["National", "UI/UX Design", "Team Leader"],
    images: [sitefestImg,],
    overview: "Led a multidisciplinary team in the National UI/UX Design Competition at SITEFEST 4.0 organized by BEM Primakara University. Guided the project from ideation to presentation, earning a Top 10 Finalist position nationwide.",
    achievements: [
      "Top 10 Finalist nationwide",
      "Competed against teams from various universities in Indonesia",
      "Presented UI/UX design solutions for real-world problems",
    ],
  },
  {
    id: "secomp",
    title: "SECOMP 2025",
    subtitle: "Software Engineering Competition",
    achievement: "Top 5 Finalist",
    period: "2025",
    tags: ["National", "UI/UX Design", "Team Leader"],
    images: [
      secompImg,
    ],
    links: { view: "https://drive.google.com/file/d/19bWpyhHDKZIbuZm2M9qHDc1aoOMVElcm/view?usp=drive_link" },
    overview: "Served as Team Leader in the UI/UX Design category of SECOMP 2025 organized by Telkom University. Directed design decisions, coordinated team members, and represented the team during competition activities, achieving a Top 5 Finalist position at the national level.",
    achievements: [
      "National-level finalist",
      "Designed user-centered interface solutions",
      "Competed with participants from universities across Indonesia",
    ],
  },
  {
    id: "hmpe-uny",
    title: "Business Plan Competition 2025",
    subtitle: "HMPE FEB Universitas Negeri Yogyakarta",
    achievement: "Participant",
    period: "2025",
    tags: ["Business Plan", "Entrepreneurship", "Team Leader"],
    images: [
      hmpeImg,
    ],
    overview: "Participated in the National Seminar and Business Plan Competition 2025 organized by the Student Association of Economics Education, Faculty of Economics and Business, Universitas Negeri Yogyakarta.",
    achievements: [
      "National competition participant",
      "Developed and presented a business plan proposal",
      "Explored sustainable business and digital technology synergy concepts",
    ],
  },
  {
    id: "smart-it",
    title: "Smart IT Competition 2025",
    subtitle: "UI/UX Design Competition",
    achievement: "Participant",
    period: "2025",
    tags: ["National", "UI/UX Design", "Team Leader"],
    images: [
      smartItImg,
    ],
    overview: "Participated in the UI/UX Design Competition category at Smart IT Competition 2025 as part of Team DNS Server, organized by the D3 Informatics Engineering Program of Universitas Sebelas Maret.",
    achievements: [
      "Represented Team DNS Server",
      "Designed user experience and interface solutions",
      "Participated in a national technology competition",
    ],
  },
];

const PUBLICATIONS: CardItem[] = [
  {
    id: "fishco",
    title: "ANALISIS PENERAPAN BLACK BOX TESTING BERBASIS DECISION TABLE TERHADAP FUNGSIONALITAS WEBSITE FISHCO",
    subtitle: "JATI (Jurnal Mahasiswa Teknik Informatika)",
    period: "Published 2026",
    tags: [
      "Black Box Testing", 
      "Software Testing", 
      "Software Quality Assurance", 
      "Technical Paper"
    ],
    images: [PublicationsBT, loa,],
    links: { view: "https://ejournal.itn.ac.id/jati/article/view/16836" },
    overview: "Authored and published a research paper examining the application of Decision Table-based Black Box Testing on the FishCo website. The study involved designing structured test scenarios, validating functional requirements, and analyzing testing outcomes to improve software reliability, functionality, and quality assurance practices.",
  },
  {
    id: "viskom",
    title: "Sistem Rekomendasi Masakan Berbasis Deteksi Multiobjek Bahan Makanan Menggunakan YOLO dan Generative AI",
    subtitle: "Techne Jurnal Ilmiah Elektroteknika",
    period: "Reviewing Process",
    tags: [  
      "Computer Vision",
      "YOLO",
      "Generative AI",
      "Recommendation System",
      "Research Paper",
    ],
    images: [],
    links: { view: "#" },
    overview: "Co-authored a research paper proposing an intelligent cooking recommendation system that combines YOLO-based multi-object food ingredient detection with Generative AI. The study focuses on identifying available ingredients through computer vision and generating personalized recipe recommendations to support efficient meal preparation and reduce food waste.",
  },
  {
    id: "pppl",
    title: "PENGEMBANGAN SISTEM INFORMASI MANAJEMEN KONTEN EKSTRAKURIKULER MENGGUNAKAN METODE WATERFALL",
    subtitle: "Jurnal Inter Tech",
    period: "Reviewing Process",
    tags: [
      "Web Development",
      "Information System",
      "Waterfall Method",
      "Software Engineering",
      "Research Paper",
    ],
    images: [],
    links: { view: "#" },
    overview: "Co-authored a research paper on the development of a web-based extracurricular content management information system using the Waterfall software development methodology. The research covers requirements analysis, system design, implementation, testing, and maintenance processes to improve content organization, publication efficiency, and communication within extracurricular activities.",
  },
];

const CERTIFICATES: CardItem[] = [
  {
    id: "figma",
    title: "Figma UI/UX Design Certificate",
    subtitle: "MySkill Certification",
    period: "2025",
    tags: ["Figma", "UI/UX Design", "MySkill", "Design Thinking"],
    images: [
      myskill,
    ],
    links: { view: "https://app.notion.com/p/Dewi-Wulansari-J0403231024-13b64c0f2a2380bcb22dde1bdc9495fa?source=copy_link" },
    overview: "Official MySkill certification validating proficiency in Figma UI/UX design.",
  },
];

// ─── Tab config ───────────────────────────────────────────────────────────────

type TabKey = "projects" | "work" | "organizations" | "competitions" | "publications" | "certificates";

const TABS: { key: TabKey; label: string; icon: React.ReactNode; data: CardItem[] }[] = [
  { key: "projects", label: "Projects", icon: <Code2 size={14} />, data: PROJECTS },
  { key: "work", label: "Work", icon: <Briefcase size={14} />, data: WORK },
  { key: "organizations", label: "Organizations", icon: <Users size={14} />, data: ORGS },
  { key: "competitions", label: "Competitions", icon: <Trophy size={14} />, data: COMPETITIONS },
  { key: "publications", label: "Publications", icon: <FileText size={14} />, data: PUBLICATIONS },
  { key: "certificates", label: "Certificates", icon: <Award size={14} />, data: CERTIFICATES },
];

// ─── Card Component ───────────────────────────────────────────────────────────

function ShowcaseCard({ item, tabKey, onClick }: { item: CardItem; tabKey: TabKey; onClick: () => void }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSlide = useCallback(() => {
    if (item.images.length < 2) return;
    timerRef.current = setInterval(() => setImgIdx((i) => (i + 1) % item.images.length), 900);
  }, [item.images.length]);

  const stopSlide = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    setImgIdx(0);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      onClick={onClick}
      className="relative flex-shrink-0 w-72 lg:w-80 rounded-3xl overflow-hidden cursor-pointer flex flex-col"
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 4px 24px rgba(15,23,42,0.07),0 1px 4px rgba(15,23,42,0.04)",
      }}
    >
      {/* Image */}
      <div
        className="relative h-44 overflow-hidden bg-[#F1F5F9] shrink-0"
        onMouseEnter={() => { setHovered(true); startSlide(); }}
        onMouseLeave={() => { setHovered(false); stopSlide(); }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={item.images[imgIdx]}
            src={item.images[imgIdx]}
            alt={item.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top,rgba(15,23,42,0.4) 0%,transparent 60%)",
            opacity: hovered ? 1 : 0.6,
          }}
        />

        {/* Achievement badge */}
        {item.achievement && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#E96D9E,#EC4899)", boxShadow: "0 2px 8px rgba(233,109,158,0.5)" }}
          >
            <Trophy size={10} />
            {item.achievement}
          </div>
        )}

        {/* Nav arrows */}
        {item.images.length > 1 && hovered && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i - 1 + item.images.length) % item.images.length); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#0F172A] hover:bg-white transition-colors z-10"
            >
              <ChevronLeft size={13} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setImgIdx((i) => (i + 1) % item.images.length); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#0F172A] hover:bg-white transition-colors z-10"
            >
              <ChevronRight size={13} />
            </button>
          </>
        )}

        {/* Dots */}
        {item.images.length > 1 && (
          <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1 z-10">
            {item.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
                className={`rounded-full transition-all ${i === imgIdx ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50"}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3
            className="text-[#0F172A] line-clamp-1 mb-0.5"
            style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "15px" }}
          >
            {item.title}
          </h3>
          <p className="text-[#64748B] text-xs line-clamp-1" style={{ fontFamily: "'Inter',sans-serif" }}>
            {item.subtitle}
          </p>
        </div>

        {(item.role || item.period) && (
          <div className="flex items-center gap-3 mb-3">
            {item.role && (
              <span className="text-[10px] text-[#94A3B8]" style={{ fontFamily: "'Inter',sans-serif" }}>
                {item.role}
              </span>
            )}
            {item.period && (
              <span
                className="text-[10px] text-[#94A3B8] ml-auto"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                {item.period}
              </span>
            )}
          </div>
        )}

        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                style={{
                  background: "rgba(233,109,158,0.08)",
                  color: "#E96D9E",
                  fontFamily: "'JetBrains Mono',monospace",
                }}
              >
                {t}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span
                className="px-2 py-0.5 rounded-full text-[10px] text-[#94A3B8]"
                style={{ background: "#F1F5F9", fontFamily: "'Inter',sans-serif" }}
              >
                +{item.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* CTA links */}
        <div className="flex items-center gap-3 mt-auto pt-3 border-t border-[#F8FAFC] flex-wrap">
          {tabKey === "projects" && (
            <>
              {item.links?.github && <LinkChip icon={<Github size={12} />} label="GitHub" href={item.links.github} />}
              {item.links?.figma && <LinkChip icon={<Figma size={12} />} label="Figma" href={item.links.figma} />}
              {item.links?.demo && <LinkChip icon={<ExternalLink size={12} />} label="Demo" href={item.links.demo} />}
            </>
          )}
          {(tabKey === "work") && item.links?.view && (
            <LinkChip icon={<Building2 size={12} />} label="View Work" href={item.links.view} />
          )}
          {tabKey === "organizations" && item.links?.view && (
            <LinkChip icon={<Users size={12} />} label="View Organization" href={item.links.view} />
          )}
          {tabKey === "competitions" && (
            <>
              {item.links?.view && <LinkChip icon={<ExternalLink size={12} />} label="View Documentation" href={item.links.view} />}
              {item.links?.cert && <LinkChip icon={<Award size={12} />} label="Certificate" href={item.links.cert} />}
            </>
          )}
          {tabKey === "publications" && item.links?.view && (
            <LinkChip icon={<FileText size={12} />} label="Read Paper" href={item.links.view} />
          )}
          {tabKey === "certificates" && item.links?.view && (
            <LinkChip icon={<Award size={12} />} label="View Credential" href={item.links.view} />
          )}
        </div>
      </div>
    </motion.article>
  );
}

function LinkChip({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#64748B] hover:text-[#E96D9E] transition-colors"
      style={{ fontFamily: "'Inter',sans-serif" }}
    >
      {icon}
      {label}
    </a>
  );
}

// ─── Accordion ────────────────────────────────────────────────────────────────

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#F1F5F9] last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-3.5 text-left group"
      >
        <span
          className="text-sm font-semibold text-[#0F172A] group-hover:text-[#E96D9E] transition-colors"
          style={{ fontFamily: "'Plus Jakarta Sans',sans-serif" }}
        >
          {title}
        </span>
        <ChevronDown
          size={15}
          className={`text-[#94A3B8] transition-transform flex-shrink-0 ml-2 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function ItemModal({ item, onClose }: { item: CardItem; onClose: () => void }) {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: "rgba(15,23,42,0.72)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.97 }}
        transition={{ type: "spring", damping: 28, stiffness: 340 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto bg-white sm:rounded-3xl rounded-t-3xl flex flex-col"
        style={{ scrollbarWidth: "none", boxShadow: "0 32px 80px rgba(15,23,42,0.2)" }}
      >
        {/* Gallery */}
        <div className="relative h-56 sm:h-64 bg-[#F1F5F9] shrink-0 sm:rounded-t-3xl rounded-t-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={item.images[imgIdx]}
              src={item.images[imgIdx]}
              alt={item.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top,rgba(15,23,42,0.4),transparent 60%)" }}
          />

          {item.images.length > 1 && (
            <>
              <button
                onClick={() => setImgIdx((i) => (i - 1 + item.images.length) % item.images.length)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={() => setImgIdx((i) => (i + 1) % item.images.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
              >
                <ChevronRight size={17} />
              </button>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {item.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`rounded-xl overflow-hidden border-2 transition-all ${i === imgIdx ? "border-white w-10 h-7" : "border-white/40 w-7 h-5 opacity-70"}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </>
          )}

          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors"
          >
            <X size={17} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h2
                className="text-xl text-[#0F172A] leading-tight mb-1"
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800 }}
              >
                {item.title}
              </h2>
              <p className="text-[#64748B] text-sm" style={{ fontFamily: "'Inter',sans-serif" }}>
                {item.subtitle}
              </p>
            </div>
            {item.period && (
              <span
                className="text-xs text-[#94A3B8] whitespace-nowrap mt-1"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                {item.period}
              </span>
            )}
          </div>

          {item.achievement && (
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white mb-4"
              style={{ background: "linear-gradient(135deg,#E96D9E,#EC4899)" }}
            >
              <Trophy size={12} />
              {item.achievement}
            </div>
          )}

          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(233,109,158,0.08)", color: "#E96D9E", fontFamily: "'JetBrains Mono',monospace" }}
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Accordions */}
          <div className="mt-2">
            {item.overview && (
              <Accordion title="Overview" defaultOpen>
                <p className="text-sm text-[#475569] leading-relaxed" style={{ fontFamily: "'Inter',sans-serif" }}>
                  {item.overview}
                </p>
              </Accordion>
            )}

            {item.responsibilities && item.responsibilities.length > 0 && (
              <Accordion title="Responsibilities">
                <ul className="space-y-2.5">
                  {item.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#475569]" style={{ fontFamily: "'Inter',sans-serif" }}>
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#E96D9E" }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </Accordion>
            )}

            {item.technologies && item.technologies.length > 0 && (
              <Accordion title="Technologies">
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium border"
                      style={{
                        background: "#F8FAFC",
                        borderColor: "#E2E8F0",
                        color: "#475569",
                        fontFamily: "'JetBrains Mono',monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Accordion>
            )}

            {item.achievements && item.achievements.length > 0 && (
              <Accordion title="Achievements & Impact">
                <ul className="space-y-2.5">
                  {item.achievements.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#475569]" style={{ fontFamily: "'Inter',sans-serif" }}>
                      <Trophy size={13} className="mt-0.5 shrink-0" style={{ color: "#F59E0B" }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </Accordion>
            )}
          </div>

          {/* External links */}
          {item.links && Object.values(item.links).some(Boolean) && (
            <div className="flex flex-wrap gap-2.5 mt-5 pt-5 border-t border-[#F1F5F9]">
              {item.links.github && (
                <a
                  href={item.links.github}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F172A] text-white text-sm font-semibold hover:bg-[#1E293B] transition-colors"
                  style={{ fontFamily: "'Inter',sans-serif" }}
                >
                  <Github size={15} /> GitHub
                </a>
              )}
              {item.links.figma && (
                <a
                  href={item.links.figma}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  style={{ background: "rgba(242,78,30,0.1)", color: "#F24E1E", fontFamily: "'Inter',sans-serif" }}
                >
                  <Figma size={15} /> Figma
                </a>
              )}
              {item.links.demo && (
                <a
                  href={item.links.demo}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg,#E96D9E,#EC4899)", fontFamily: "'Inter',sans-serif" }}
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
              {item.links.view && (
                <a
                  href={item.links.view}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold hover:border-[#E96D9E]/40 transition-colors"
                  style={{ borderColor: "#E2E8F0", color: "#0F172A", background: "#F8FAFC", fontFamily: "'Inter',sans-serif" }}
                >
                  <ExternalLink size={15} /> View
                </a>
              )}
              {item.links.cert && (
                <a
                  href={item.links.cert}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  style={{ background: "rgba(233,109,158,0.08)", color: "#E96D9E", fontFamily: "'Inter',sans-serif" }}
                >
                  <Award size={15} /> Certificate
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("projects");
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentTab = TABS.find((t) => t.key === activeTab)!;

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section id="highlights" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ color: "#E96D9E", fontFamily: "'JetBrains Mono',monospace" }}
          >
            Highlights & Experience
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl lg:text-[48px] text-[#0F172A] tracking-tight">
              A showcase of my work
            </h2>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-2xl border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:border-[#E96D9E]/40 hover:text-[#E96D9E] hover:bg-[#E96D9E]/5 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-2xl border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:border-[#E96D9E]/40 hover:text-[#E96D9E] hover:bg-[#E96D9E]/5 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div
          className="flex gap-1 p-1 rounded-2xl bg-[#F1F5F9] mb-8 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-white text-[#0F172A] shadow-sm"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
              style={{ fontFamily: "'Inter',sans-serif" }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        >
          <AnimatePresence mode="popLayout">
            {[...currentTab.data]
              .sort((a, b) => {
                const getYear = (period?: string) => {
                  if (!period) return 0;

                  const matches = period.match(/\d{4}/g);
                  if (!matches) return 0;

                  return Math.max(...matches.map(Number));
                };

                return getYear(b.period) - getYear(a.period);
              })
              .map((item, i) => (
              <motion.div
                key={`${activeTab}-${item.id}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
              >
                <ShowcaseCard item={item} tabKey={activeTab} onClick={() => setSelectedItem(item)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
