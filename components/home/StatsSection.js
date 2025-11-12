import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Expert Team Members",
    description: "Skilled professionals"
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries Served",
    description: "Global presence"
  },
  {
    icon: Award,
    value: "25+",
    label: "Years Experience",
    description: "Industry leadership"
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Quality Rate",
    description: "Consistent excellence"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#e6eaf0] to-[#e6eaf0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            Our commitment to excellence drives measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#94d12b] to-[#7fb324] rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-gray-900 mb-2"
                >
                  {stat.value}
                </motion.div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
