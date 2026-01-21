import { motion, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  ArrowRight,
  Bot,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiPython,
  SiOpenjdk,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiFirebase,
} from "react-icons/si";



 const icons = [
  { Icon: FaHtml5, label: "HTML5", color: "bg-[#E34F26]", text: "white", x: "15%", y: "20%" },
  { Icon: FaCss3Alt, label: "CSS3", color: "bg-[#1572B6]", text: "white", x: "25%", y: "15%" },
  { Icon: FaJs, label: "JavaScript", color: "bg-[#F7DF1E]", text: "black", x: "35%", y: "25%" },
  { Icon: FaReact, label: "React", color: "bg-[#61DAFB]", text: "black", x: "45%", y: "10%" },
  { Icon: FaNodeJs, label: "Node.js", color: "bg-[#339933]", text: "white", x: "60%", y: "20%" },
  { Icon: FaGitAlt, label: "Git", color: "bg-[#F05032]", text: "white", x: "70%", y: "12%" },
  { Icon: FaGithub, label: "GitHub", color: "bg-[#181717]", text: "white", x: "80%", y: "22%" },
  { Icon: SiTypescript, label: "TypeScript", color: "bg-[#3178C6]", text: "white", x: "90%", y: "18%" },

  { Icon: SiPython, label: "Python", color: "bg-[#3776AB]", text: "white", x: "10%", y: "45%" },
  { Icon: SiOpenjdk, label: "Java", color: "bg-[#ED8B00]", text: "black", x: "20%", y: "55%" },
  { Icon: SiC, label: "C", color: "bg-[#A8B9CC]", text: "black", x: "8%", y: "60%" },
  { Icon: SiCplusplus, label: "C++", color: "bg-[#00599C]", text: "white", x: "85%", y: "50%" },

  { Icon: SiDotnet, label: ".NET", color: "bg-[#512BD4]", text: "white", x: "15%", y: "80%" },
  { Icon: SiFlutter, label: "Flutter", color: "bg-[#02569B]", text: "white", x: "28%", y: "85%" },
  { Icon: SiDart, label: "Dart", color: "bg-[#0175C2]", text: "white", x: "40%", y: "80%" },
  { Icon: SiMongodb, label: "MongoDB", color: "bg-[#47A248]", text: "white", x: "50%", y: "88%" },
  { Icon: SiMysql, label: "MySQL", color: "bg-[#4479A1]", text: "white", x: "65%", y: "75%" },
  { Icon: SiPostgresql, label: "PostgreSQL", color: "bg-[#4169E1]", text: "white", x: "75%", y: "80%" },
  { Icon: SiDocker, label: "Docker", color: "bg-[#2496ED]", text: "white", x: "88%", y: "75%" },
  { Icon: SiFirebase, label: "Firebase", color: "bg-[#FFCA28]", text: "black", x: "92%", y: "85%" },
];



export default function Integrations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

   // Map scroll range to smooth scale / borderRadius / padding
  const rawScale = useTransform(scrollYProgress, [0.2, 0.3], [1, 0.88]);
  const rawBorder = useTransform(scrollYProgress, [0.2, 0.3], ["0rem", "5rem"]);
  const rawPadding = useTransform(scrollYProgress, [0.2, 0.3], ["0rem", "4rem"]);

  // Apply spring for smooth transition
  const scale = useSpring(rawScale, { stiffness: 200, damping: 25 });
  const borderRadius = useSpring(rawBorder, { stiffness: 200, damping: 25 });
  const padding = useSpring(rawPadding, { stiffness: 200, damping: 25 });



  return (
    <section ref={containerRef} className="bg-white min-h-screen flex items-center justify-center overflow-hidden">
       <motion.div
        style={{ scale, borderRadius, padding }}
        className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-center origin-center"
      >



        
        {/* Background Gradient/Glow (Optional) */}
        <div className="absolute inset-0 bg-radial-gradient from-gray-900 to-black opacity-50"></div>

        {/* Floating Icons */}
        {icons.map(({ Icon, label, color, text, x, y }, index) => (
  <motion.div
    key={index}
    className={`group absolute p-4 rounded-2xl shadow-lg ${color} text-${text}`}
    style={{ left: x, top: y }}
    whileHover={{ scale: 1.15 }}
  >
    <Icon className="w-10 h-10" />

    {/* Hover Label */}
    <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 
      whitespace-nowrap rounded-md bg-black px-3 py-1 text-xs text-white 
      opacity-0 group-hover:opacity-100 transition-all duration-200">
      {label}
    </span>
  </motion.div>
))}



        {/* Central Content */}
        <div className="relative z-20 max-w-2xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            
            
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Build with any language.
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mt-4 max-w-lg mx-auto">
              Seamlessly integrate across your entire tech stack.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Start building with AI <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
