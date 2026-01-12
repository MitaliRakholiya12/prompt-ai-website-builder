import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import Navbar from "../components/Navbar";

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
        Marketing Copy Writer
      </h3>

      <div className="flex justify-between items-center mb-8 pr-8">
        <span className="bg-black/20 text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
          Marketing & Sales
        </span>
        <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 font-medium text-sm flex items-center gap-2 transition-colors">
          Remix
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
            AI Marketing Copy Writer
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
                  Select Marketing Channel
                </p>
                <p className="text-gray-500 text-xs">
                  Choose the platform where you'll use this content
                </p>
              </div>
            </div>
            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-500 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Choose a market channel</option>
                <option>Twitter / X</option>
                <option>LinkedIn</option>
                <option>Instagram</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
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
                Text Content (Optional)
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                placeholder="Enter a description..."
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
                    AI Study Companion
                  </h3>

                  <div className="flex justify-between items-center mb-8">
                    <span className="bg-black/20 text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                      Education
                    </span>
                    <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 font-medium text-sm flex items-center gap-2 transition-colors">
                      Remix
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="absolute top-45 left-15 w-[550px] h-[780px] 
                 bg-white rounded-3xl p-6 shadow-lg
                 transform -rotate-10 transition-transform duration-300
                 hover:rotate-0 hover:scale-105 overflow-hidden">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-8 h-8 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80")',
                        }}
                      ></div>
                      <div className="font-bold text-gray-900 text-sm">
                        AI Study Companion
                      </div>
                    </div>

                    <div className="bg-[#3b82f6] text-white p-5 rounded-2xl mb-6 relative overflow-hidden">
                      <div className="flex items-start gap-2 relative z-10">
                        <svg
                          className="w-5 h-5 shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <div>
                          <p className="font-bold text-lg leading-tight mb-4">
                            Transform your notes into interactive study
                            materials
                          </p>
                          <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-900 transition-colors w-full">
                            Generate
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 overflow-y-auto custom-scrollbar pr-2">
                      <div className="space-y-2">
                        <div className="font-bold text-gray-900 text-sm">
                          Study Mode
                        </div>
                        <p className="text-gray-400 text-xs mb-2">
                          Choose how you want to study
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
                            Quiz
                          </div>
                          <div className="border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
                            Study Guide
                          </div>
                          <div className="border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
                            Flashcards
                          </div>
                          <div className="border border-gray-200 rounded-xl p-3 text-center text-sm font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
                            Analysis
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="font-bold text-gray-900 text-sm">
                          Your Note
                        </div>
                        <textarea
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl text-xs text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] bg-gray-50"
                          placeholder="Paste your course notes, lecture content, or study material here..."
                          defaultValue="Classification: Frogs are amphibians in the order Anura. This means they are vertebrates that live in water and on land..."
                        ></textarea>
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
                    Content Calendar
                  </h3>

                  <div className="flex justify-between items-center mb-8">
                    <span className="bg-black/20 text-gray-900 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                      Marketing & Sales
                    </span>
                    <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 font-medium text-sm flex items-center gap-2 transition-colors">
                      Remix
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-lg flex-1 overflow-hidden flex flex-col absolute top-45 left-15 w-[550px] h-[780px] 
                 bg-white rounded-3xl p-6 shadow-lg
                 transform -rotate-10 transition-transform duration-300
                 hover:rotate-0 hover:scale-105 overflow-hidden">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full text-white">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="font-bold text-gray-900 text-sm">
                        Content Calendar
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col">
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 19l-7-7 7-7"
                            ></path>
                          </svg>
                          <span className="text-sm font-medium">Today</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex bg-gray-100 p-1 rounded-lg">
                          <button className="px-3 py-1 text-xs font-medium text-gray-500">
                            Day
                          </button>
                          <button className="px-3 py-1 text-xs font-bold text-white bg-blue-500 rounded-md shadow-sm">
                            Week
                          </button>
                          <button className="px-3 py-1 text-xs font-medium text-gray-500">
                            Month
                          </button>
                        </div>
                      </div>

                      {/* Calendar Grid Header */}
                      <div className="grid grid-cols-5 gap-1 mb-2 text-center">
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-gray-400 uppercase">
                            Sun
                          </span>
                          <span className="text-sm font-bold text-gray-900">
                            21
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-gray-400 uppercase">
                            Mon
                          </span>
                          <span className="text-sm font-bold text-gray-900">
                            22
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-gray-400 uppercase">
                            Tue
                          </span>
                          <span className="text-sm font-bold text-gray-900">
                            23
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-gray-400 uppercase">
                            Wed
                          </span>
                          <span className="text-sm font-bold text-gray-900">
                            24
                          </span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] text-gray-400 uppercase">
                            Thu
                          </span>
                          <span className="text-sm font-bold text-gray-900">
                            25
                          </span>
                        </div>
                      </div>

                      {/* Calendar Events Grid */}
                      <div className="flex-1 overflow-y-auto relative custom-scrollbar border-t border-gray-100">
                        {/* Time Labels */}
                        <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between py-2 text-[10px] text-gray-400 font-medium">
                          <div>7 AM</div>
                          <div>8 AM</div>
                          <div>9 AM</div>
                          <div>10 AM</div>
                          <div>11 AM</div>
                          <div>12 AM</div>
                          <div>1 PM</div>
                        </div>

                        {/* Grid Lines */}
                        <div className="absolute left-10 right-0 top-0 bottom-0 flex flex-col justify-between">
                          <div className="border-b border-gray-50 h-full"></div>
                          <div className="border-b border-gray-50 h-full"></div>
                          <div className="border-b border-gray-50 h-full"></div>
                          <div className="border-b border-gray-50 h-full"></div>
                          <div className="border-b border-gray-50 h-full"></div>
                          <div className="border-b border-gray-50 h-full"></div>
                        </div>

                        {/* Events */}
                        <div className="absolute left-10 right-0 top-0 bottom-0 grid grid-cols-5 gap-1 pt-2">
                          {/* Sun */}
                          <div></div>
                          {/* Mon */}
                          <div className="relative">
                            <div className="absolute top-[15%] left-0 right-1 bg-blue-100 border-l-2 border-blue-500 p-1.5 rounded-r-md text-[9px] leading-tight">
                              <div className="font-bold text-blue-700">
                                8:00 AM 🔵
                              </div>
                              <div className="text-blue-600">
                                Financial Update
                              </div>
                            </div>
                          </div>
                          {/* Tue */}
                          <div className="relative">
                            <div className="absolute top-[30%] left-0 right-1 bg-purple-100 border-l-2 border-purple-500 p-1.5 rounded-r-md text-[9px] leading-tight">
                              <div className="font-bold text-purple-700">
                                9:00 AM 🟣
                              </div>
                              <div className="text-purple-600">
                                Onboarding Presentat...
                              </div>
                            </div>
                            <div className="absolute top-[80%] left-0 right-1 bg-orange-100 border-l-2 border-orange-500 p-1.5 rounded-r-md text-[9px] leading-tight">
                              <div className="font-bold text-orange-700">
                                12:00 AM 🟠
                              </div>
                              <div className="text-orange-600">
                                1:1 with Jon
                              </div>
                            </div>
                          </div>
                          {/* Wed */}
                          <div className="relative"></div>
                          {/* Thu */}
                          <div className="relative">
                            <div className="absolute top-[30%] left-0 right-1 bg-orange-50 border-l-2 border-orange-400 p-1.5 rounded-r-md text-[9px] leading-tight opacity-70">
                              <div className="font-bold text-orange-700">
                                9:00 AM
                              </div>
                              <div className="text-orange-600">New P...</div>
                            </div>
                            <div className="absolute top-[60%] left-0 right-1 bg-blue-100 border-l-2 border-blue-500 p-1.5 rounded-r-md text-[9px] leading-tight">
                              <div className="font-bold text-blue-700">
                                11:00 AM 🔵
                              </div>
                              <div className="text-blue-600">Youtube</div>
                            </div>
                            <div className="absolute bottom-[0%] left-0 right-1 bg-blue-50 border-l-2 border-blue-300 p-1.5 rounded-r-md text-[9px] leading-tight">
                              <div className="font-bold text-blue-600">
                                13:00 P...
                              </div>
                            </div>
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
      <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">More Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="bg-white p-8 rounded-2xl shadow-sm h-64 flex items-center justify-center">
            <p className="text-gray-500">Feature 1</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm h-64 flex items-center justify-center">
            <p className="text-gray-500">Feature 2</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm h-64 flex items-center justify-center">
            <p className="text-gray-500">Feature 3</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
