import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, Factory, Shield, Microscope } from "lucide-react";

const services = [
  {
    icon: Beaker,
    title: "API Manufacturing",
    description: "High-quality Active Pharmaceutical Ingredients manufactured under strict GMP conditions.",
    color: "from-[#94d12b] to-[#7fb324]",
    link: createPageUrl("Products") + "#apis"
  },
  {
    icon: Factory,
    title: "Intermediates",
    description: "Pharmaceutical intermediates and building blocks for complex drug synthesis.",
    color: "from-[#94d12b] to-[#7fb324]",
    link: createPageUrl("Products") + "#intermediates"
  },
  {
    icon: Microscope,
    title: "Custom Synthesis",
    description: "Tailored synthesis solutions for unique pharmaceutical requirements.",
    color: "from-[#94d12b] to-[#7fb324]",
    link: createPageUrl("Products") + "#custom"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Comprehensive quality control and regulatory compliance services.",
    color: "from-[#94d12b] to-[#7fb324]",
    link: createPageUrl("Quality")
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to commercialization, we provide comprehensive pharmaceutical 
            manufacturing solutions with industry-leading expertise and quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full border-0 shadow-lg">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <Link href={service.link}>
                    <Button 
                      variant="ghost" 
                      className="group-hover:bg-[#e6eaf0] group-hover:text-[#002769] transition-colors cursor-pointer text-[#002769]"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
