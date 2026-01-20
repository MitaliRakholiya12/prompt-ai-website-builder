import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import {
  MessageSquare,
  Brain,
  Settings,
  Rocket,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Chat to build",
    description:
      "Build a complete app just by describing what you want. Our AI handles all the complex infrastructure for you, including the backend, database, and hosting. No coding required.",
    icon: MessageSquare,
    preview: (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <Sparkles size={16} />
          </div>
          <span className="font-semibold text-gray-700">
            Ask Creao to build anything
          </span>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl flex-1">
          <p className="text-gray-600 leading-relaxed">
            "Create a SaaS landing page for an AI startup with pricing and
            login."
          </p>
        </div>
        <div className="mt-4 flex gap-2 justify-end">
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            Start <ArrowRight size={14} />
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "AI understands your idea",
    description:
      "Our intelligent system parses your requirements, plans the architecture, and structures your database instantly.",
    icon: Brain,
    preview: (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
        <div className="mb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Product Brief
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="font-medium text-gray-900">Goal</span>
            </div>
            <p className="text-gray-500 text-sm pl-4">
              Build a centralized event planning dashboard that manages tasks,
              vendors, and budget.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="font-medium text-gray-900">Features</span>
            </div>
            <div className="pl-4 space-y-2">
              <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">
                Task Management System
              </div>
              <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">
                Vendor Directory
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Customize & refine",
    description:
      "Tweak the design, adjust logic, and add features with simple natural language commands. You're in full control.",
    icon: Settings,
    preview: (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
            EDITING
          </div>
        </div>
        <div className="space-y-3 mt-4">
          <div className="h-8 bg-gray-100 rounded w-3/4"></div>
          <div className="h-32 bg-gray-50 rounded border-2 border-blue-500 border-dashed flex items-center justify-center">
            <span className="text-blue-500 font-medium">
              Drag to resize section
            </span>
          </div>
          <div className="flex gap-2">
            <div className="h-8 bg-gray-100 rounded w-1/3"></div>
            <div className="h-8 bg-gray-100 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Publish instantly",
    description:
      "Go live with a single click. Your app is scalable, secure, and ready for users immediately.",
    icon: Rocket,
    preview: (
      <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl shadow-xl h-full flex flex-col justify-center items-center text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
          <Rocket className="text-white" size={32} />
        </div>
        <h3 className="text-white text-2xl font-bold mb-2">
          Your App is Live!
        </h3>
        <p className="text-gray-400 mb-6">https://my-awesome-app.creao.ai</p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors w-full">
          View Dashboard
        </button>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Update active step based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Divide the scroll range into segments for each step
      const stepDuration = 1 / steps.length;
      const currentStep = Math.min(
        Math.floor(latest / stepDuration),
        steps.length - 1
      );
      setActiveStep(currentStep);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Define colors for each step's background
  const stepColors = [
    "bg-blue-50",
    "bg-green-50",
    "bg-purple-50",
    "bg-rose-50",
  ];

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-white ">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-[28%_1fr] gap-20 w-full h-[90vh]">
          {/* Left Side - Steps List */}
          <div className="flex flex-col h-full gap-10  pt-10">
            <h1 className=" lg:text-6xl font-bold text-gray-900">
              How it works
            </h1>

            <div className="flex flex-col space-y-4">
              {steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer transition-all duration-300 p-5 rounded-2xl border ${
                      isActive
                        ? "bg-white border-gray-200 shadow-lg scale-105"
                        : "bg-transparent border-transparent opacity-50 hover:opacity-80"
                    }`}
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                      scale: isActive ? 1.05 : 1,
                      x: isActive ? 10 : 0,
                    }}
                  >
                    {/* MAIN LAYOUT */}
                    <div
                      className={`flex gap-3 ${
                        isActive
                          ? "flex-col items-start"
                          : "flex-row items-center"
                      }`}
                    >
                      {/* ICON */}
                      <div
                        className={`inline-flex items-center justify-center rounded-lg p-2 ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <step.icon className="w-10 h-10" />
                      </div>

                      {/* TITLE + DESCRIPTION */}
                      <div className="flex flex-col">
                        <h1
                          className={`text-lg font-bold ${
                            isActive ? "text-gray-900" : "text-gray-700"
                          }`}
                        >
                          {step.title}
                        </h1>

                        {/* DESCRIPTION ONLY FOR ACTIVE */}
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-gray-600 text-base leading-relaxed mt-2"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Dynamic Preview */}
          <div className="relative h-full flex w-full items-center justify-center">
            <motion.div
              className={`absolute inset-0 rounded-[40px] -z-10 transform rotate-1 scale-[0.98] transition-colors duration-500 ${stepColors[activeStep]}`}
            ></motion.div>
            <div className="w-full h-full bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100 p-8 relative">
              <div className="absolute top-4 left-8 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              <div className="mt-8 h-full">
                {steps.map(
                  (step, index) =>
                    activeStep === index && (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="h-full"
                      >
                        {step.preview}
                      </motion.div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
