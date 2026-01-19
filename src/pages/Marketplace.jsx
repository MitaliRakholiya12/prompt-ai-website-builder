import { motion } from "framer-motion";
import { useState } from "react";

export default function Marketplace() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-10 py-20">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">
          Build Websites Using AI Prompts 🤖
        </h1>
        <p className="text-gray-600 text-lg">
          Just type what you want. AI creates your website instantly.
        </p>
      </motion.div>

      {/* PROMPT BOX */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-3xl mx-auto mt-16 bg-white p-6 rounded-xl shadow-md border border-black"
      >
        <p className="mb-3 text-gray-700 font-medium">Try a prompt:</p>
        <div className="flex gap-4">
          <input
            className="flex-1 p-3 rounded border border-black outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Create a gym website with modern design"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className="px-6 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Generate
          </button>
        </div>
      </motion.div>

      {/* HOW IT WORKS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        {[
          { title: "Write Prompt", icon: "📝" },
          { title: "AI Builds Website", icon: "⚡" },
          { title: "Publish Online", icon: "🚀" },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            className="bg-white p-8 rounded-xl text-center shadow-md border-2 border-black"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-gray-600">
              {step.title === "Write Prompt" && "Describe your website idea"}
              {step.title === "AI Builds Website" && "AI generates full website"}
              {step.title === "Publish Online" && "Download and go live"}
            </p>
          </motion.div>
        ))}
      </div>

      {/* MARKETPLACE */}
      <h2 className="text-4xl font-bold mt-28 mb-10 text-center">
        AI Website Marketplace
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {["Business", "Portfolio", "Ecommerce"].map((template, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            className="bg-white rounded-xl overflow-hidden shadow-md border-2 border-black"
          >
            <div className="h-40 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{template} Website</h3>
              <p className="text-gray-600 mt-2">
                Generate using AI prompt
              </p>
              <button className="mt-4 w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
                Generate Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
