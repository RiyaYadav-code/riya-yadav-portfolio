import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  BookOpen, 
  Code2, 
  User,
  Layout, 
  Search,
  Cpu,
  Sparkles,
  Camera
} from "lucide-react";

// --- SUB-COMPONENTS ---

const SectionHeading = ({ title, icon: Icon }) => (
  <div className="mb-6 mt-10">
    <div className="flex items-center gap-2 mb-2">
      {Icon && <Icon size={18} className="text-blue-400" />}
      <h2 className="text-sm font-bold tracking-widest text-gray-300 uppercase">{title}</h2>
    </div>
    <div className="w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent"></div>
  </div>
);

const SkillBadge = ({ children, isAi }) => (
  <motion.span 
    whileHover={{ scale: 1.05, y: -2 }}
    className={`px-3 py-1.5 border text-[11px] font-medium rounded-md inline-block mr-2 mb-2 transition-all cursor-default
      ${isAi 
        ? "bg-blue-500/10 border-blue-500/30 text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:border-blue-400" 
        : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-500 hover:bg-gray-800"}`}
  >
    <div className="flex items-center gap-1.5">
      {isAi && <Sparkles size={10} className="text-blue-400" />}
      {children}
    </div>
  </motion.span>
);

// --- MAIN COMPONENT ---

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const skills = [
    { name: "MYSQL", type: "core" },
    { name: "Power BI", type: "core" },
    { name: "Python", type: "core" },
    { name: "Machine Learning", type: "core" },
    { name: "Excel", type: "core" },
    { name: "Web Programming", type: "core" }
  ];

  const aiTools = [
    "ChatGPT", "Julius AI", "Claude", "Gemini", "GitHub Copilot", "Prompt Engineering"
  ];

  const certifications = [
    {
      id: "skillfied-data-analytics",
      title: "Data Analytics Internship",
      issuer: "SkillFied Mentor",
      issueDate: "June 2026",
      description: "Formally recognized for completing structured data analytics assignments, demonstrating consistency, technical dedication, and proficiency in parsing datasets for actionable insights.",
    },
    {
      id: "codecademy-excel-analytics",
      title: "Excel for Data Analysis",
      issuer: "Codecademy",
      issueDate: "2026",
      description: "Developed specialized skills in professional data cleaning, pivot tables, and complex functions to drive business insights through spreadsheet modeling.",
    },
  ];

  const projects = [
    {
    title: "LinkedIn AI Coach",
      desc: "Developed an AI agent that parses LinkedIn profile structures to analyze professional branding and generate tailored optimization strategies using targeted LLM prompting.",
      tech: ["AI Agents", "LLM Integration", "Python", "React"],
      demo: "https://lnkd.in/dtPjQ4Hk"
    },
    {
      title: "Fake News Detection Model",
      desc: "Built an NLP classifier using Python and Scikit-learn to identify misinformation in text data with 75% accuracy.",
      tech: ["Python", "NLP", "ML"],
      demo: "https://fake-news-project-o6e8.onrender.com" 
    },
    {
      title: "Online Bookstore Analytics",
      desc: "Analyzed transactional data and inventory metrics for an online bookstore to extract key performance trends and optimize sales insights.",
      tech: ["SQL", "Data Analytics", "Python"],
      demo: "https://github.com/RiyaYadav-code/online-bookstore-analytics.git"
    },
    {
      title: "Interactive Sales Dashboard",
      desc: "Utilized Power BI to visualize sales trends and KPIs, providing actionable insights through dynamic filtering.",
      tech: ["Power BI", "DAX", "Visualization"]
    },
    {
      title: "Personal Portfolio Webapp",
      desc: "Developed a responsive site using HTML/CSS and React to showcase projects and technical progress.",
      tech: ["React", "Tailwind", "Responsive Design"],
      demo: "https://riya-yadav-portfolio.onrender.com" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto grid md:grid-cols-12 gap-0 min-h-screen shadow-2xl border-x border-gray-900"
      >
        
        {/* SIDEBAR */}
        <div className="md:col-span-4 bg-[#111] p-8 md:p-12 border-r border-gray-900">
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-black tracking-tighter uppercase">RIYA YADAV</h1>
            <p className="text-blue-400 font-medium text-sm mt-2 tracking-wide uppercase">Aspiring Data Analyst Intern</p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] text-blue-300 font-bold uppercase tracking-wider">Seeking Internship</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 space-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-gray-600" />
              <span>Gurugram, Haryana</span>
            </div>
            
            <a href="tel:+919650090065" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
              <Phone size={16} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
              <span>+91 9650090065</span>
            </a>

            <a href="mailto:riyay6624@gmail.com" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
              <Mail size={16} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
              <span className="truncate">riyay6624@gmail.com</span>
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SectionHeading title="Technical Core" icon={Code2} />
            <div className="flex flex-wrap mb-4">
              {skills.map(skill => (
                <SkillBadge key={skill.name}>{skill.name}</SkillBadge>
              ))}
            </div>
            
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Cpu size={14} className="text-blue-400" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">AI & Productivity Tools</span>
              </div>
              <div className="flex flex-wrap">
                {aiTools.map(tool => (
                  <SkillBadge key={tool} isAi>{tool}</SkillBadge>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SectionHeading title="Transferable Skills" icon={User} />
            <div className="space-y-2 text-sm text-gray-400">
              <p>• Strategic Team Collaboration</p>
              <p>• Fast Learner & Adaptable</p>
              <p>• Effective Communication</p>
              <p>• Analytical Problem Solving</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SectionHeading title="Languages" />
            <div className="flex gap-4 text-sm font-medium">
              <span className="text-gray-300">English</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300">Hindi</span>
            </div>
          </motion.div>
        </div>

        {/* MAIN CONTENT */}
        <div className="md:col-span-8 p-8 md:p-16 bg-[#0c0c0c]">
          
          <motion.section variants={itemVariants}>
            <SectionHeading title="About Me" icon={Search} />
            <p className="text-gray-400 leading-relaxed text-lg font-light italic text-justify">
              Passionate BCA student specializing in AI & Machine Learning with a strong focus on Data Analytics. 
              I excel at translating complex datasets into clear, actionable business insights using SQL, 
              Python, and Power BI. My goal is to leverage advanced AI tools like Julius AI and Prompt 
              Engineering to drive data-led decision-making in a fast-paced corporate environment.
            </p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <SectionHeading title="Academic Background" icon={BookOpen} />
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-gray-800">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 className="text-white font-bold text-lg italic">SGT University</h3>
                  <span className="text-blue-400 text-sm font-mono">2024 — 2027</span>
                </div>
                <p className="text-gray-300 font-medium italic">Bachelor of Computer Applications (AI/ML)</p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs">
                  <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20 italic">Pursuing</span>
                  <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded">Avg SGPA: 8.6+</span>
                </div>
              </div>

              <div className="relative pl-6 border-l border-gray-800">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 className="text-white font-bold text-lg italic">RPS Public School, Dharuhera</h3>
                  <span className="text-gray-500 text-sm font-mono">Completed 2024</span>
                </div>
                <p className="text-gray-300 font-medium">Senior Secondary (12th), CBSE</p>
                <p className="text-gray-500 text-sm mt-1 italic">Aggregate: 95%</p>
              </div>
            </div>
          </motion.section>
          <motion.section variants={itemVariants}>
            <SectionHeading title="Experience" icon={BookOpen} />
            
            <div className="space-y-8">
              
              {/* 💼 DATA ANALYTICS INTERNSHIP */}
              <div className="relative pl-6 border-l border-gray-800">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 className="text-white font-bold text-lg italic">Data Analytics Intern</h3>
                  <span className="text-blue-400 text-sm font-mono">May 2026 — June 2026</span>
                </div>
                <p className="text-gray-300 font-medium italic">SkillFied Mentor</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-400 list-disc list-inside text-justify">
                  <li>Cleaned, transformed, and processed structured datasets to uncover key performance trends and business insights.</li>
                  <li>Developed analytical workflows and leveraged data visualization practices to communicate metrics effectively.</li>
                  <li>Demonstrated exceptional dedication and consistency in delivering data-driven tasks under structured timelines.</li>
                </ul>
              </div>

              {/* 🕒 EVENT VOLUNTEER */}
              <div className="relative pl-6 border-l border-gray-800">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h3 className="text-white font-bold text-lg italic">Event Volunteer</h3>
                  <span className="text-gray-500 text-sm font-mono">2024</span>
                </div>
                <p className="text-gray-300 font-medium italic">University Fest, SGT University</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-400 list-disc list-inside">
                  <li>Managed coordination between design, logistics, and promotion teams</li>
                  <li>Took part in event branding and photography coverage</li>
                  <li>Ensured smooth operations during high-pressure scenarios</li>
                </ul>
              </div>

            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <SectionHeading title="Academic Projects" icon={Layout} />
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="p-5 bg-[#111] border border-gray-900 rounded-lg hover:border-blue-500/30 transition-all group">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-gray-200 group-hover:text-blue-400 transition-colors italic">{project.title}</h4>
                    <div className="flex gap-2">
                      <Github size={14} className="text-gray-600 hover:text-white cursor-pointer" />
                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" title="View Live Project">
                          <ExternalLink size={14} className="text-blue-400 hover:text-blue-200 cursor-pointer" />
                        </a>
                      ) : (
                        <ExternalLink size={14} className="text-gray-600 hover:text-white cursor-pointer" />
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] text-gray-500 font-mono uppercase tracking-tighter">#{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CERTIFICATIONS SECTION */}
          <motion.section variants={itemVariants}>
            <SectionHeading title="Certifications" icon={BookOpen} />
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-5 bg-[#111] border border-gray-900 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-200 italic">{cert.title}</h4>
                      <p className="text-blue-400 text-xs mt-0.5">{cert.issuer} • {cert.issueDate}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mt-3">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.div variants={itemVariants} className="mt-20 text-center text-gray-700 text-[10px] tracking-[0.3em] uppercase">
            Available for Internship Opportunities • 2026
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
