import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
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
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col overflow-hidden">
    
    {/* Header */}
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
          <Sparkles size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">AI Builder</h3>
          <p className="text-xs text-gray-500">Chat to create apps</p>
        </div>
      </div>

      <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
        LIVE
      </span>
    </div>

    {/* Chat Area */}
    <div className="flex-1 p-6 space-y-4 bg-gray-50 overflow-y-auto">
      
      {/* User Message */}
      <div className="flex justify-end">
        <div className="bg-black text-white px-4 py-3 rounded-2xl max-w-[75%] text-sm leading-relaxed">
          Create a SaaS landing page for an AI startup with pricing, login and dashboard.
        </div>
      </div>

      {/* AI Message */}
      <div className="flex gap-3 items-start">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
          <Sparkles size={14} />
        </div>

        <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border max-w-[75%]">
          <p className="text-sm text-gray-700 leading-relaxed">
            Got it! I’m setting up:
          </p>

          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>• Landing page layout</li>
            <li>• Authentication flow</li>
            <li>• Pricing section</li>
            <li>• Database & backend</li>
          </ul>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <div className="flex justify-between text-xs text-gray-500 mb-2">
          <span>Building application</span>
          <span>68%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[68%] bg-blue-600 rounded-full transition-all"></div>
        </div>
      </div>
    </div>

    {/* Input */}
    <div className="border-t p-4 bg-white">
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-gray-100 rounded-xl px-4 py-2 text-sm text-gray-500">
          Describe what you want to build...
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium">
          Send
        </button>
      </div>
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
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col overflow-hidden">

    {/* Header */}
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-green-600 flex items-center justify-center text-white">
          <Brain size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Understanding Your Idea</h3>
          <p className="text-xs text-gray-500">Planning system architecture</p>
        </div>
      </div>

      <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-600">
        ANALYZING
      </span>
    </div>

    {/* Analysis Content */}
    <div className="flex-1 p-6 space-y-5 bg-gray-50 overflow-y-auto">

      {/* Parsed Intent */}
      <div className="bg-white border rounded-xl p-5 shadow-sm">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
          Parsed Requirements
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-gray-100 rounded-lg px-3 py-2">SaaS Platform</div>
          <div className="bg-gray-100 rounded-lg px-3 py-2">User Authentication</div>
          <div className="bg-gray-100 rounded-lg px-3 py-2">Pricing Plans</div>
          <div className="bg-gray-100 rounded-lg px-3 py-2">Admin Dashboard</div>
        </div>
      </div>

      {/* Architecture Plan */}
      <div className="bg-white border rounded-xl p-5 shadow-sm">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
          Architecture Plan
        </p>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <span className="text-sm text-gray-700">Frontend: React + Tailwind</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <span className="text-sm text-gray-700">Backend: Node.js API</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <span className="text-sm text-gray-700">Auth: JWT + OAuth</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <span className="text-sm text-gray-700">Hosting: Cloud Infrastructure</span>
          </div>
        </div>
      </div>

      {/* Database Schema */}
      <div className="bg-white border rounded-xl p-5 shadow-sm">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
          Database Structure
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="border rounded-lg p-3">
            <p className="font-medium text-gray-800 mb-1">Users</p>
            <p className="text-xs text-gray-500">id, email, password, role</p>
          </div>

          <div className="border rounded-lg p-3">
            <p className="font-medium text-gray-800 mb-1">Subscriptions</p>
            <p className="text-xs text-gray-500">plan, status, expiry</p>
          </div>

          <div className="border rounded-lg p-3">
            <p className="font-medium text-gray-800 mb-1">Projects</p>
            <p className="text-xs text-gray-500">name, owner, created_at</p>
          </div>

          <div className="border rounded-lg p-3">
            <p className="font-medium text-gray-800 mb-1">Payments</p>
            <p className="text-xs text-gray-500">amount, provider, status</p>
          </div>
        </div>
      </div>

    </div>

    {/* Footer */}
    <div className="border-t px-6 py-4 bg-white flex items-center justify-between">
      <span className="text-xs text-gray-500">
        Architecture ready in seconds
      </span>

      <button className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium">
        Continue
      </button>
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
  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 h-full flex overflow-hidden">

    {/* Canvas Area */}
    <div className="flex-1 bg-gray-50 p-6 overflow-auto relative">
      <div className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-600">
        LIVE CANVAS
      </div>

      <div className="max-w-xl mx-auto mt-12 space-y-6">

        {/* Editable Section */}
        <div className="bg-white border-2 border-dashed border-purple-400 rounded-xl p-6 relative">
          <span className="absolute -top-3 left-4 bg-purple-600 text-white text-xs px-2 py-0.5 rounded">
            Selected
          </span>

          <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
        </div>

        {/* Other Sections */}
        <div className="bg-white border rounded-xl p-6 opacity-60">
          <div className="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
          <div className="h-4 bg-gray-100 rounded w-full"></div>
        </div>
      </div>
    </div>

    {/* Control Panel */}
    <div className="w-[320px] border-l bg-white flex flex-col">

      {/* Panel Header */}
      <div className="px-5 py-4 border-b">
        <h3 className="font-semibold text-gray-900">Customize Section</h3>
        <p className="text-xs text-gray-500">Edit styles & logic</p>
      </div>

      {/* Controls */}
      <div className="flex-1 p-5 space-y-5 overflow-y-auto">

        {/* Design Controls */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
            Design
          </p>

          <div className="space-y-2">
            <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
              Background: White
            </div>
            <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
              Border Radius: 16px
            </div>
            <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
              Padding: 24px
            </div>
          </div>
        </div>

        {/* Logic Controls */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
            Logic
          </p>

          <div className="space-y-2">
            <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
              On Click → Submit Form
            </div>
            <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm">
              Validation Enabled
            </div>
          </div>
        </div>

        {/* AI Command */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
            AI Command
          </p>

          <div className="border rounded-xl p-3 bg-gray-50 text-sm text-gray-600">
            “Make this section dark and add animation”
          </div>

          <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-xl text-sm font-medium">
            Apply Changes
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t px-5 py-4 text-xs text-gray-500">
        Changes applied instantly
      </div>
    </div>
  </div>
),
  },
 
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const previousStep = useRef(0);

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
        steps.length - 1,
      );
      
      if (currentStep !== activeStep) {
        setDirection(currentStep > previousStep.current ? 1 : -1);
        previousStep.current = currentStep;
        setActiveStep(currentStep);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeStep]);

  // Define colors for each step's background
  const stepColors = [
    "bg-blue-300",
    "bg-green-300",
    "bg-purple-300",
  ];

  const iconColors = [
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
  ];

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-white ">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <div className="w-full h-full bg-[#f4f4f4] opacity-100 grid grid-cols-1 lg:grid-cols-[30%_70%]">
          {/* Left Side - Steps List */}
          <div className="flex flex-col h-full gap-8 pt-25 overflow-y-auto overscroll-contain">
            <h1 className=" lg:text-6xl font-bold pl-5 text-gray-900">
              How It Works
            </h1>

            <div className="flex flex-col space-y-0.5">
              {steps.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer transition-all duration-300 p-5 ml-3 mr-10  ${
                      isActive
                        ? " scale-105"
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
                      className={`flex gap-3 p-5 rounded-2xl border bg-white border-gray-200 shadow-lg ${
                        isActive
                          ? "flex-col items-start"
                          : "flex-row items-center"
                      }`}
                    >
                      {/* ICON */}
                      <div
                        className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors duration-300 ${
                          isActive
                            ? `${iconColors[activeStep]} text-white`
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
          <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
            <div
              className={`absolute inset-0 transition-colors duration-700 ease-in-out ${stepColors[activeStep]}`}
            ></div>
            <div className="w-full h-full p-8 relative z-10">
              <div className="h-full pt-30 px-10 pb-10">
                <AnimatePresence mode="wait" custom={direction}>
                  {steps.map(
                    (step, index) =>
                      activeStep === index && (
                        <motion.div
                          key={step.id}
                          custom={direction}
                          initial={{ opacity: 0, y: direction > 0 ? 50 : -50 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: direction > 0 ? -50 : 50 }}
                          transition={{ duration: 0.3 }}
                          className="h-full"
                        >
                          {step.preview}
                        </motion.div>
                      ),
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
