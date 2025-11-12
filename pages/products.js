import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Beaker, Atom, FlaskRound, Shield } from "lucide-react";
import Layout from "@/components/Layout";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: Beaker },
    { id: "apis", name: "APIs", icon: Atom },
    { id: "intermediates", name: "Intermediates", icon: FlaskRound },
    { id: "custom", name: "Custom Synthesis", icon: Beaker }
  ];

  const products = [
    {
      id: 1,
      name: "Atorvastatin Calcium",
      category: "apis",
      type: "API",
      description: "High-purity statin for cholesterol management",
      features: ["USP/EP Compliant", "DMF Filed", "GMP Certified"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
    },
    {
      id: 2,
      name: "Amoxicillin Trihydrate",
      category: "apis",
      type: "API",
      description: "Beta-lactam antibiotic with proven efficacy",
      features: ["WHO Prequalified", "Multiple Patents", "Global Supply"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400"
    },
    {
      id: 3,
      name: "Benzyl Penicillin",
      category: "intermediates",
      type: "Intermediate",
      description: "Key intermediate for beta-lactam synthesis",
      features: ["High Yield Process", "Cost Effective", "Scalable"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400"
    },
    {
      id: 4,
      name: "Metformin Hydrochloride",
      category: "apis",
      type: "API",
      description: "First-line treatment for type 2 diabetes",
      features: ["USP/EP Compliant", "DMF Filed", "GMP Certified"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
    },
    {
      id: 5,
      name: "Ibuprofen",
      category: "apis",
      type: "API",
      description: "Non-steroidal anti-inflammatory drug",
      features: ["USP/EP Compliant", "DMF Filed", "GMP Certified"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400"
    },
    {
      id: 6,
      name: "Paracetamol",
      category: "apis",
      type: "API",
      description: "Analgesic and antipyretic medication",
      features: ["USP/EP Compliant", "DMF Filed", "GMP Certified"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <Head>
        <title>Products - Vubrix Pharma</title>
        <meta name="description" content="Discover our premium range of APIs and intermediates, manufactured to the highest pharmaceutical standards and trusted worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#e6eaf0] to-[#e6eaf0] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="bg-[#ccd5e1] text-[#001732] mb-6">Our Products</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Premium
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002769] to-[#001732]">
                  {" "}APIs & Intermediates
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of high-quality pharmaceutical ingredients, 
                manufactured under strict GMP conditions and trusted by leading pharmaceutical companies worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#335588] focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                      selectedCategory === category.id
                        ? "bg-[#002769] text-white border-[#002769]"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 h-full border-0 shadow-lg overflow-hidden">
                      <CardContent className="p-0 h-full">
                        {/* Image */}
                        <div className="aspect-video overflow-hidden">
                          <div className="relative w-full h-full">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge className="bg-[#ccd5e1] text-[#001732]">
                              {product.type}
                            </Badge>
                            <Shield className="w-5 h-5 text-[#94d12b]" />
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#002769] transition-colors">
                            {product.name}
                          </h3>

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
                          <Button 
                            variant="ghost" 
                            className="w-full group-hover:bg-[#e6eaf0] group-hover:text-[#002769] transition-colors"
                          >
                            View Details
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#002769] to-[#001732]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-[#ccd5e1] mb-8 max-w-2xl mx-auto">
                Our team of experts can develop custom synthesis solutions tailored to your specific requirements.
              </p>
              <Button size="lg" className="bg-white text-[#002769] hover:bg-gray-100">
                Contact Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
