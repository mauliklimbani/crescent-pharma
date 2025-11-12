import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Factory, Shield, Award, Globe, Beaker, Users, Clock, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";

export default function ManufacturingPage() {
  const capabilities = [
    {
      icon: Factory,
      title: "State-of-the-Art Facilities",
      description: "Modern manufacturing plants equipped with advanced technology and automation systems.",
      features: ["GMP Certified", "ISO 9001:2015", "FDA Approved"]
    },
    {
      icon: Shield,
      title: "Quality Control",
      description: "Comprehensive quality management systems ensuring product consistency and safety.",
      features: ["In-process Testing", "Final Product Analysis", "Stability Studies"]
    },
    {
      icon: Award,
      title: "Regulatory Compliance",
      description: "Full compliance with international regulatory standards and requirements.",
      features: ["FDA", "EMA", "WHO", "ICH Guidelines"]
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Efficient supply chain management serving customers worldwide.",
      features: ["Multiple Locations", "Cold Chain", "Express Shipping"]
    }
  ];

  const processes = [
    {
      title: "API Manufacturing",
      description: "Complete synthesis of Active Pharmaceutical Ingredients under strict GMP conditions.",
      steps: ["Raw Material Selection", "Chemical Synthesis", "Purification", "Quality Testing", "Packaging"]
    },
    {
      title: "Intermediate Production",
      description: "Manufacturing of key intermediates for complex pharmaceutical synthesis.",
      steps: ["Process Development", "Scale-up", "Production", "Quality Control", "Documentation"]
    },
    {
      title: "Custom Synthesis",
      description: "Tailored synthesis solutions for unique pharmaceutical requirements.",
      steps: ["Requirement Analysis", "Route Design", "Development", "Validation", "Delivery"]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Manufacturing Capabilities - Vubrix Pharma</title>
        <meta name="description" content="Explore Vubrix Pharma's state-of-the-art manufacturing capabilities, GMP-certified facilities, and quality assurance processes." />
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
              <Badge className="bg-[#ccd5e1] text-[#001732] mb-6">Manufacturing</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                World-Class
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002769] to-[#001732]">
                  {" "}Manufacturing
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our state-of-the-art facilities combine cutting-edge technology with decades of expertise 
                to deliver pharmaceutical ingredients of the highest quality and consistency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Manufacturing Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine advanced technology, rigorous quality standards, and expert personnel 
                to deliver exceptional pharmaceutical manufacturing services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#94d12b] to-[#7fb324] rounded-2xl flex items-center justify-center">
                        <capability.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                      <p className="text-gray-600 mb-6">{capability.description}</p>
                      <div className="space-y-2">
                        {capability.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="secondary" className="mr-2 mb-2">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-[#e6eaf0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Manufacturing Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From raw materials to finished products, our comprehensive manufacturing process 
                ensures quality, consistency, and regulatory compliance at every step.
              </p>
            </motion.div>

            <div className="space-y-12">
              {processes.map((process, index) => (
                <motion.div
                  key={process.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>
                          <p className="text-gray-600 mb-6">{process.description}</p>
                          <div className="space-y-3">
                            {process.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-center">
                                <div className="w-8 h-8 bg-[#ccd5e1] rounded-full flex items-center justify-center mr-3">
                                  <span className="text-[#002769] font-semibold text-sm">{stepIndex + 1}</span>
                                </div>
                                <span className="text-gray-700">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="relative h-64 bg-gradient-to-br from-[#335588] to-[#002769] rounded-2xl flex items-center justify-center">
                          <Beaker className="w-24 h-24 text-white opacity-80" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Assurance & Control</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Our quality assurance system is built on the foundation of international standards 
                    and best practices, ensuring that every product meets or exceeds customer expectations.
                  </p>
                  <p>
                    From raw material testing to final product release, our quality control laboratory 
                    performs comprehensive analyses using state-of-the-art equipment and validated methods.
                  </p>
                  <p>
                    We maintain complete traceability throughout the manufacturing process, with detailed 
                    documentation and batch records that support regulatory submissions and audits.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-96">
                  <Image
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600"
                    alt="Quality control laboratory"
                    fill
                    className="rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-[#002769]">99.9%</div>
                  <div className="text-gray-600">Quality Rate</div>
                </div>
              </motion.div>
            </div>
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
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-[#ccd5e1] mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how our manufacturing capabilities can meet your pharmaceutical needs.
              </p>
              <Button size="lg" className="bg-white text-[#002769] hover:bg-gray-100">
                Get a Quote
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
