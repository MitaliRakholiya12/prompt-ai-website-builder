import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    desc: "For students & beginners",
    features: [
      "Prompt-based website generation",
      "Basic templates",
      "Single project",
      "Local export",
      "Community support",
    ],
    button: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹999",
    desc: "For freelancers & startups",
    features: [
      "Unlimited AI websites",
      "Custom branding",
      "API integrations",
      "Live preview editor",
      "Hosting support",
      "GitHub export",
      "SEO optimization",
    ],
    button: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "₹2999",
    desc: "For agencies & teams",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Client management",
      "White-label websites",
      "Custom domains",
      "Analytics dashboard",
      "Cloud deployment",
    ],
    button: "Contact Sales",
    popular: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const handlePayment = async (amount, planName) => {
  const res = await fetch("http://localhost:5000/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });

  const order = await res.json();

  const options = {
    key: "YOUR_RAZORPAY_KEY",
    amount: order.amount,
    currency: "INR",
    name: "AI Website Builder",
    description: planName + " Plan",
    order_id: order.id,
    handler: function (response) {
      alert("Payment Successful!");
      console.log(response);
    },
    theme: {
      color: "#6366F1",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Pricing Plans
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-12"
        >
          Build websites using AI prompts. Choose the plan that fits your needs.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              className={`bg-white p-8 rounded-2xl shadow-lg border ${
                plan.popular ? "border-blue-500" : ""
              }`}
            >
              {plan.popular && (
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}

              <h2 className="text-2xl font-bold mt-4">{plan.name}</h2>
              <p className="text-gray-500 mt-2">{plan.desc}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <motion.button
  onClick={() => handlePayment(999, "Pro")}
  className="mt-8 w-full py-3 rounded-xl bg-purple-600 text-white"
>
  Start Pro Trial
</motion.button>
<motion.button
  onClick={() => handlePayment(2999, "Business")}
  className="mt-8 w-full py-3 rounded-xl bg-gray-900 text-white"
>
  Contact Sales
</motion.button>


            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default PricingPage;
