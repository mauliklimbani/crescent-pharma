import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Beaker, Microscope, FlaskRound, TestTube, Award, Users, TrendingUp, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";

export default function ResearchPage() {
  const researchAreas = [
    {
      icon: Beaker,
      title: "Process Optimization",
      description: "Continuous improvement of manufacturing processes for better efficiency and quality.",
      achievements: ["30% Yield Improvement", "Cost Reduction", "Green Chemistry"]
    },
    {
      icon: Microscope,
      title: "Analytical Development",
      description: "Advanced analytical methods for comprehensive product characterization and quality control.",
      achievements: ["HPLC Methods", "Stability Studies", "Impurity Profiling"]
    },
    {
      icon: FlaskRound,
      title: "New Product Development",
      description: "Innovation in API and intermediate synthesis for emerging pharmaceutical needs.",
      achievements: ["Novel Routes", "Patent Applications", "Scale-up Ready"]
    },
    {
      icon: TestTube,
      title: "Formulation Research",
      description: "Development of new formulations and delivery systems for enhanced efficacy.",
      achievements: ["Sustained Release", "Bioavailability", "Patient Compliance"]
    }
  ];

  const ongoingProjects = [
    {
      title: "Green Chemistry Initiative",
      description: "Developing environmentally friendly synthesis routes using sustainable catalysts and solvents.",
      progress: 75,
      team: "Dr. Sarah Johnson, Dr. Michael Chen",
      timeline: "Q4 2024"
    },
    {
      title: "Continuous Manufacturing",
      description: "Implementing continuous flow chemistry for improved efficiency and product consistency.",
      progress: 60,
      team: "Dr. Robert Kim, Dr. Emily Davis",
      timeline: "Q1 2025"
    },
    {
      title: "AI-Driven Process Design",
      description: "Leveraging machine learning algorithms for predictive process optimization and route design.",
      progress: 40,
      team: "Dr. James Wilson, Dr. Lisa Rodriguez",
      timeline: "Q2 2025"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Research & Development - Vubrix Pharma</title>
        <meta name="description" content="Explore Vubrix Pharma's cutting-edge research and development initiatives in pharmaceutical manufacturing and process innovation." />
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
              <Badge className="bg-[#ccd5e1] text-[#001732] mb-6">Research & Development</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Driving
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002769] to-[#001732]">
                  {" "}Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our R&D team pushes the boundaries of pharmaceutical manufacturing through cutting-edge research, 
                process innovation, and sustainable chemistry solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Research Focus Areas</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We invest heavily in research across multiple disciplines to advance pharmaceutical 
                manufacturing technology and improve patient outcomes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#94d12b] to-[#7fb324] rounded-2xl flex items-center justify-center">
                        <area.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                      <p className="text-gray-600 mb-6">{area.description}</p>
                      <div className="space-y-2">
                        {area.achievements.map((achievement, achievementIndex) => (
                          <Badge key={achievementIndex} variant="secondary" className="mr-2 mb-2">
                            {achievement}
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

        {/* Ongoing Projects */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-[#e6eaf0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ongoing Research Projects</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our current research initiatives focus on breakthrough technologies and sustainable 
                solutions that will shape the future of pharmaceutical manufacturing.
              </p>
            </motion.div>

            <div className="space-y-8">
              {ongoingProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                          <p className="text-gray-600 mb-6">{project.description}</p>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <span>Progress</span>
                                <span>{project.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-[#002769] h-2 rounded-full transition-all duration-500"
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-600">
                              <Users className="w-4 h-4 mr-2" />
                              <span>{project.team}</span>
                            </div>
                            
                            <div className="flex items-center text-sm text-gray-600">
                              <TrendingUp className="w-4 h-4 mr-2" />
                              <span>Target: {project.timeline}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative h-64 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                          <Lightbulb className="w-24 h-24 text-white opacity-80" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Research Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our multidisciplinary team of scientists, engineers, and researchers brings together 
                expertise from leading institutions and pharmaceutical companies worldwide.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Director of R&D",
                  expertise: "Process Chemistry, Green Chemistry",
                  education: "PhD Chemistry, MIT",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400"
                },
                {
                  name: "Dr. Michael Chen",
                  role: "Senior Research Scientist",
                  expertise: "Analytical Chemistry, Method Development",
                  education: "PhD Analytical Chemistry, Stanford",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                },
                {
                  name: "Dr. Emily Davis",
                  role: "Process Development Engineer",
                  expertise: "Chemical Engineering, Scale-up",
                  education: "PhD Chemical Engineering, UC Berkeley",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="relative w-32 h-32 mx-auto mb-6">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-[#002769] font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-3">{member.expertise}</p>
                      <p className="text-gray-500 text-xs">{member.education}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Partner with Our Research Team
              </h2>
              <p className="text-xl text-[#ccd5e1] mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate on innovative solutions that advance pharmaceutical manufacturing 
                and improve patient care worldwide.
              </p>
              <Button size="lg" className="bg-white text-[#002769] hover:bg-gray-100">
                Start a Collaboration
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
