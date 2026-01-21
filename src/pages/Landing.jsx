import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import Integrations from "./Integrations";

function Landing() {
  const targetRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (contentRef.current) {
        const width = contentRef.current.scrollWidth;
        const viewport = window.innerWidth;
        setScrollRange(width - viewport);
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <div className="bg-white">
      {/* Header */}
      <Navbar />

      {/* Horizontal Scroll Hero Section */}
      {/* h-[250vh] ensures we have enough scroll distance to traverse the horizontal content */}
      <section
        ref={targetRef}
        style={{ height: `${scrollRange + window.innerHeight}px` }}
        className="relative"
      >
        <div className="sticky top-22 flex h-screen items-center overflow-hidden">
          <motion.div
            ref={contentRef}
            style={{ x }}
            className="flex gap-10 px-20"
          >
            {/* Slide 1: Intro Section */}
            <div className="min-w-[80vw] lg:min-w-[40vw] flex flex-col justify-center h-full">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-5 leading-tight">
                Infinitely
                <br />
                personalized
                <br />
                software.
              </h1>

              {/* Build Section */}
              <div className="bg-gray-50 rounded-3xl p-8 mb-8 h-64 flex flex-col justify-between relative w-full max-w-xl">
                <textarea
                  rows={2}
                  placeholder="I want to build an AI Study Companion..."
                  className="w-full resize-none bg-transparent text-2xl font-semibold text-gray-900 placeholder-gray-400 focus:outline-none leading-snug"
                />

                <div className="flex items-center justify-between mt-auto">
                  {/* Privacy Note */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                    <div className="w-4 h-4 flex items-center justify-center">
                      🔒
                    </div>
                    <span>Your project is private</span>
                  </div>

                  <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 font-medium text-sm flex items-center gap-2 transition-colors">
                    Build with AI
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 2: Blue Card - Marketing Copy Writer */}
            <div className="min-w-[500px] flex items-center justify-center h-full">
              <div className="bg-[#3b82f6] rounded-[50px] pt-8 pl-8 pr-0 pb-0 overflow-hidden relative w-[500px] h-[730px] flex flex-col shadow-2xl">
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    AI Website Builder
                  </h3>

                  <div className="flex justify-between items-center mb-8 pr-8">
                    <span className="bg-black/20 text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                      Website & Startup
                    </span>
                    <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 font-medium text-sm flex items-center gap-2 transition-colors">
                      Build Site
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Content Preview */}
                  <div
                    className="absolute top-45 left-15 w-[550px] h-[780px] 
                 bg-white rounded-3xl p-6 shadow-lg
                 transform -rotate-10 transition-transform duration-300
                 hover:rotate-0 hover:scale-105 overflow-hidden"
                  >
                    {/* Top Profile */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-8 h-8 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80")',
                        }}
                      ></div>
                      <div className="font-bold text-gray-900 text-sm">
                        AI Website Builder
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                      {/* Step 1 */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded text-white font-bold text-xs shrink-0">
                            1
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">
                              Generate a full website from your idea
                            </p>
                          
                          </div>
                        </div>
                       
                      </div>

                      {/* Step 2 */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded text-white font-bold text-xs shrink-0">
                            2
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">
                              Provide Content Input
                            </p>
                            <p className="text-gray-500 text-xs">
                              Add text content and/or upload an image to analyze
                            </p>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                            Text Content
                          </label>
                          <textarea
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                            placeholder="Create a SaaS landing page for an AI startup
with hero, pricing, testimonials and login"
                          ></textarea>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                            Image Upload (Optional)
                          </label>
                          <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-2 text-gray-400 text-sm cursor-pointer hover:bg-gray-50 transition-colors">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <span>Click to upload image</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3: Green Card - Study Companion */}
            <div className="min-w-[500px] flex items-center justify-center h-full">
              <div className="bg-[#4ade80] rounded-[50px] p-12 overflow-hidden relative w-[500px] h-[730px] flex flex-col shadow-2xl">
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Portfolio Generator
                  </h3>

                  <div className="flex justify-between items-center mb-8 pr-8">
                    <span className="bg-black/20 text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                      Personal Website
                    </span>
                    <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 font-medium text-sm flex items-center gap-2 transition-colors">
                      Generate
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Content Preview */}
                  <div
                    className="absolute top-45 left-15 w-[550px] h-[780px] 
                 bg-white rounded-3xl p-6 shadow-lg
                 transform -rotate-10 transition-transform duration-300
                 hover:rotate-0 hover:scale-105 overflow-hidden"
                  >
                    {/* Top Profile */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-8 h-8 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80")',
                        }}
                      ></div>
                      <div className="font-bold text-gray-900 text-sm">
                        Portfolio Generator
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                      {/* Step 1 */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded text-white font-bold text-xs shrink-0">
                            1
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">
                              Turn your skills into a personal website
                            </p>
                          
                          </div>
                        </div>
                        
                      </div>

                      {/* Step 2 */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded text-white font-bold text-xs shrink-0">
                            2
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">
                              Provide Content Input
                            </p>
                            <p className="text-gray-500 text-xs">
                              Add text content and/or upload an image to analyze
                            </p>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                            Text Content
                          </label>
                          <textarea
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                            placeholder="Portfolio website for UI/UX designer
with dark theme and contact form"
                          ></textarea>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                            Image Upload (Optional)
                          </label>
                          <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-2 text-gray-400 text-sm cursor-pointer hover:bg-gray-50 transition-colors">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <span>Click to upload image</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 4: Red Card - Content Calendar */}
            <div className="min-w-[500px] flex items-center justify-center h-full">
              <div className="bg-[#ef4444] rounded-[50px] p-12 overflow-hidden relative w-[500px] h-[730px] flex flex-col shadow-2xl">
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Business Website
                  </h3>

                  <div className="flex justify-between items-center mb-8 pr-8">
                    <span className="bg-black/20 text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                      Company & Brand
                    </span>
                    <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 font-medium text-sm flex items-center gap-2 transition-colors">
                      Create
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Content Preview */}
                  <div
                    className="absolute top-45 left-15 w-[550px] h-[780px] 
                 bg-white rounded-3xl p-6 shadow-lg
                 transform -rotate-10 transition-transform duration-300
                 hover:rotate-0 hover:scale-105 overflow-hidden"
                  >
                    {/* Top Profile */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-8 h-8 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80")',
                        }}
                      ></div>
                      <div className="font-bold text-gray-900 text-sm">
                        Business Website AI
                      </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                      {/* Step 1 */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded text-white font-bold text-xs shrink-0">
                            1
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">
                              Professional websites in seconds
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded text-white font-bold text-xs shrink-0">
                            2
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">
                              Provide Content Input
                            </p>
                            <p className="text-gray-500 text-xs">
                              Add text content and/or upload an image to analyze
                            </p>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                            Text Content
                          </label>
                          <textarea
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                            placeholder="Website for digital marketing agency
with services, about and contact page"
                          ></textarea>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                            Image Upload (Optional)
                          </label>
                          <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-2 text-gray-400 text-sm cursor-pointer hover:bg-gray-50 transition-colors">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <span>Click to upload image</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vertical Scroll Content to demonstrate sequential scrolling */}
      <HowItWorks />
      <Integrations />
      <Pricing />
    </div>
  );
}

export default Landing;
