import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, Atom } from "lucide-react";

const products = [
  {
    category: "Cardiovascular",
    name: "Atorvastatin Calcium",
    type: "API",
    description: "High-purity statin for cholesterol management",
    features: ["USP/EP Compliant", "DMF Filed", "GMP Certified"],
    icon: Beaker
  },
  {
    category: "Antibiotics",
    name: "Amoxicillin Trihydrate",
    type: "API",
    description: "Beta-lactam antibiotic with proven efficacy",
    features: ["WHO Prequalified", "Multiple Patents", "Global Supply"],
    icon: Atom
  },
  {
    category: "Intermediate",
    name: "Benzyl Penicillin",
    type: "Intermediate",
    description: "Key intermediate for beta-lactam synthesis",
    features: ["High Yield Process", "Cost Effective", "Scalable"],
    icon: Beaker
  }
];

export default function FeaturedProducts() {
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
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our premium range of APIs and intermediates, manufactured to 
            the highest pharmaceutical standards and trusted worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 h-full border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0 h-full">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#335588] to-[#002769] p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-white/20 text-white border-white/20">
                        {product.category}
                      </Badge>
                      <product.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-[#ccd5e1]">{product.type}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#335588] rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link href={createPageUrl("Products")}>
                      <Button 
                        variant="ghost" 
                        className="w-full group-hover:bg-[#e6eaf0] group-hover:text-[#002769] bg-[#e6eaf0] transition-colors cursor-pointer text-[#002769]"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href={createPageUrl("Products")}>
            <Button size="lg" className="bg-[#002769] hover:bg-[#001f4d]">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
