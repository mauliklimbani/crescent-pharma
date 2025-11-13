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
      name: "Aripiprazole",
      category: "apis",
      type: "API",
      description: "Antipsychotic used for the treatment of schizophrenia and bipolar disorder.",
      features: ["CAS No.: 126722-12-6", "End Application: Antipsychotic"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
    },
    {
      id: 2,
      name: "Fluconazole",
      category: "apis",
      type: "API",
      description: "Broad-spectrum antifungal used for the treatment of fungal infections.",
      features: ["CAS No.: 86386-73-4", "End Application: Antifungal"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400"
    },
    // All intermediates below retained as-is:
    {
      id: 3,
      name: "7-Hydroxy-3,4-dihydro-2(1H)-quinolinone",
      category: "intermediates",
      type: "Intermediate",
      description: "Core quinolinone intermediate supporting diverse CNS active compounds.",
      features: ["CAS No.: 22246-18-0", "High Purity Grade", "Flexible Scaling"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400"
    },
    {
      id: 4,
      name: "7-(4-Chlorobutoxy)-3,4-dihydro-2(1H)-quinolinone",
      category: "intermediates",
      type: "Intermediate",
      description: "Key intermediate for Aripiprazole synthesis with controlled impurity profile.",
      features: ["CAS No.: 120004-76-7", "Optimized for Aripiprazole", "GMP Compliant Process"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
    },
    {
      id: 5,
      name: "1-(2,3-Dichlorophenyl)piperazine hydrochloride",
      category: "intermediates",
      type: "Intermediate",
      description: "Versatile piperazine derivative for neuropsychiatric API development.",
      features: ["CAS No.: 116532-26-2", "Controlled Particle Size", "Stable Supply"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400"
    },
    {
      id: 6,
      name: "6-Hydroxy-2(1H)-3,4-dihydroquinolinone",
      category: "intermediates",
      type: "Intermediate",
      description: "Hydroxylated quinolinone for cardiovascular and CNS candidate pipelines.",
      features: ["CAS No.: 54167-66-6", "Low Residual Solvents", "Custom Specifications"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400"
    },
    {
      id: 7,
      name: "5-(4-Chlorobutyl)-1-cyclohexanyl tetrazole",
      category: "intermediates",
      type: "Intermediate",
      description: "High-value tetrazole intermediate dedicated to Cilostazol manufacture.",
      features: ["CAS No.: 73663-42-5", "End Use: Cilostazol", "Robust Quality Control"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400"
    },
    {
      id: 8,
      name: "1-Acetyl-4-(4-Hydroxyphenyl) Piperazine",
      category: "intermediates",
      type: "Intermediate",
      description: "Piperazine intermediate essential for Ketoconazole synthesis.",
      features: ["CAS No.: 67614-60-7", "End Use: Ketoconazole", "Consistent Impurity Profile"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400"
    },
    {
      id: 9,
      name: "Cis Tosylate",
      category: "intermediates",
      type: "Intermediate",
      description: "Cis-configured tosylate intermediate for advanced antifungal APIs.",
      features: ["CAS No.: 154003-23-3", "High Chemical Stability", "Flexible Batch Sizes"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
    },
    {
      id: 10,
      name: "Cis Mesylate",
      category: "intermediates",
      type: "Intermediate",
      description: "Mesylate intermediate tailored for Itraconazole production.",
      features: ["CAS No.: 67614-86-7", "End Use: Itraconazole", "Regulatory Support"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400"
    },
    {
      id: 11,
      name: "(S)-1-(2-Chloroacetyl)pyrrolidine-2-carbonitrile",
      category: "intermediates",
      type: "Intermediate",
      description: "Chiral intermediate supporting Vildagliptin API synthesis.",
      features: ["CAS No.: 214368-66-6", "End Use: Vildagliptin", "Chiral Purity Control"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400"
    },
    {
      id: 12,
      name: "3-Amino-1-adamantanol",
      category: "intermediates",
      type: "Intermediate",
      description: "Adamantane-based intermediate suited for antiviral and CNS targets.",
      features: ["CAS No.: 702-82-6", "High Assay Strength", "Robust Supply Chain"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
    },
    {
      id: 13,
      name: "1-Bromo-2,4-difluorobenzene",
      category: "intermediates",
      type: "Intermediate",
      description: "Halogenated aromatic intermediate for diversified API programs.",
      features: ["CAS No.: 348-57-2", "Multi-Step Compatibility", "Secure Packaging"],
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400"
    },
    {
      id: 14,
      name: "1-(3-Chlorophenyl)-4-(3-chloropropyl)piperazine hydrochloride",
      category: "intermediates",
      type: "Intermediate",
      description: "Hydrochloride salt intermediate dedicated to Trazodone synthesis.",
      features: ["CAS No.: 52605-52-4", "End Use: Trazodone", "Controlled Moisture Content"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400"
    },
    {
      id: 15,
      name: "1-Bromo-2-Nitrobenzene",
      category: "intermediates",
      type: "Intermediate",
      description: "Nitrobenzene intermediate widely used in Boscalid production.",
      features: ["CAS No.: 577-19-5", "End Use: Boscalid", "Stringent QC Release"],
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
        <section className="py-8 bg-white border-b">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:gap-6  md:items-center md:justify-between">
              {/* Search */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#335588] focus:border-transparent transition"
                  />
                </div>
              </div>
              {/* Category Filter */}
              {/* For mobile, use dropdown. For md+ screen, show button group */}
              <div className="w-full md:w-auto flex flex-col md:flex-row gap-2 justify-start md:justify-end">
                {/* Mobile dropdown */}
                <div className="block md:hidden w-full relative z-10">
                  <div className="relative">
                    <select
                      className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 bg-gradient-to-r from-[#f3f6fa] to-[#e6eaf0] shadow focus:ring-2 focus:ring-[#335588] focus:border-[#335588] transition 
                        font-medium text-base"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #f3f6fa, #e6eaf0)",
                      }}
                    >
                      {categories.map((category) => (
                        <option
                          key={category.id}
                          value={category.id}
                          className="bg-white text-[#002769] font-semibold py-2 rounded-lg"
                          style={{
                            background: "#fff",
                            color: "#002769",
                            fontWeight: "600",
                            borderRadius: "0.5rem",
                          }}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                    {/* Down arrow icon */}
                    <span className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2 text-[#001732]">
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* Desktop button group */}
                <div className="hidden md:flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors whitespace-nowrap ${
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
                          {/*<Button 
                            variant="ghost" 
                            className="w-full group-hover:bg-[#e6eaf0] group-hover:text-[#002769] transition-colors"
                          >
                            View Details
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>*/}
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
