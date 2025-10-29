import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock, Globe, Beaker } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "ISO 9001:2015 certified with comprehensive quality management systems and rigorous testing protocols."
  },
  {
    icon: Award,
    title: "Regulatory Excellence",
    description: "FDA, EMA, and WHO compliance with complete regulatory support and documentation."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "500+ skilled professionals including PhD chemists, regulatory experts, and quality specialists."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Proven track record of on-time delivery with flexible supply chain management."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving 50+ countries with established distribution networks and local support."
  },
  {
    icon: Beaker,
    title: "Innovation Focus",
    description: "Continuous R&D investment in process optimization and new product development."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose Crescent Pharma?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence, innovation, and customer satisfaction 
            makes us the preferred partner for pharmaceutical companies worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 h-full border-0 shadow-lg">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center"
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 flex-grow">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
