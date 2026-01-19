import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plug, Database, Cloud, Zap, X } from "lucide-react";

export default function IntegrationsPage() {
  const [activeIntegration, setActiveIntegration] = useState(null);

  const integrations = [
    {
      name: "OpenAI",
      desc: "Connect prompt engine with OpenAI models",
      icon: <Zap className="w-10 h-10 text-indigo-600" />
    },
    {
      name: "Database",
      desc: "Store and retrieve prompt history",
      icon: <Database className="w-10 h-10 text-indigo-600" />
    },
    {
      name: "Cloud Storage",
      desc: "Save projects securely on cloud",
      icon: <Cloud className="w-10 h-10 text-indigo-600" />
    },
    {
      name: "API Connector",
      desc: "Integrate with external APIs easily",
      icon: <Plug className="w-10 h-10 text-indigo-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white text-slate-800 p-10">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center text-indigo-700"
      >
        AI Prompt Builder Integrations
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {integrations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center space-y-4">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
                <Button
                  className="mt-4 rounded-xl bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => setActiveIntegration(item)}
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {activeIntegration && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/30 backdrop-blur flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-slate-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-indigo-700">Connect {activeIntegration.name}</h2>
              <button onClick={() => setActiveIntegration(null)}>
                <X className="w-6 h-6 text-slate-500 hover:text-slate-800" />
              </button>
            </div>

            <p className="text-slate-500 mb-6">Enter API key or credentials to connect.</p>

            <input
              type="text"
              placeholder="Enter API Key"
              className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <Button className="w-full mt-6 rounded-xl bg-indigo-600 hover:bg-indigo-700">
              Connect Now
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
