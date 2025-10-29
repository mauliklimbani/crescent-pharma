import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, TrendingUp, CheckCircle, Target, Shield } from "lucide-react";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Us - Vubrix Pharma</title>
        <meta name="description" content="Learn about Vubrix Pharma's 25+ years of excellence in API and intermediate manufacturing, serving the global pharmaceutical industry." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="bg-blue-100 text-blue-800 mb-6">About Vubrix Pharma</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Leading the Future of 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {" "}Pharmaceutical Manufacturing
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                For over 25 years, Vubrix Pharma has been at the forefront of API and intermediate manufacturing, 
                serving the global pharmaceutical industry with unwavering commitment to quality and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white" id="history">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Founded in 1995 by a team of visionary chemists and entrepreneurs, Vubrix Pharma 
                    began as a small research facility with a big dream: to make high-quality pharmaceutical 
                    ingredients accessible to companies worldwide.
                  </p>
                  <p>
                    What started as a modest operation has grown into one of the most trusted names in API 
                    and intermediate manufacturing. Our journey has been marked by continuous innovation, 
                    strategic partnerships, and an unwavering commitment to quality that has earned us 
                    recognition from regulatory bodies across the globe.
                  </p>
                  <p>
                    Today, we operate state-of-the-art manufacturing facilities across multiple continents, 
                    serve customers in over 50 countries, and maintain our position as industry leaders 
                    through cutting-edge research and development.
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
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600"
                    alt="Manufacturing facility"
                    fill
                    className="rounded-2xl shadow-2xl object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="mission">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide the highest quality Active Pharmaceutical Ingredients and Intermediates 
                      that enable pharmaceutical companies to develop life-saving medications, while 
                      maintaining the highest standards of safety, quality, and regulatory compliance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the global leader in pharmaceutical manufacturing innovation, setting new 
                      standards for quality, sustainability, and customer partnership while contributing 
                      to the advancement of global healthcare.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every action we take
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We pursue excellence in everything we do, from research and development to manufacturing and customer service."
                },
                {
                  icon: Shield,
                  title: "Quality",
                  description: "Quality is non-negotiable. We maintain the highest standards in all our processes and products."
                },
                {
                  icon: Users,
                  title: "Integrity",
                  description: "We conduct business with honesty, transparency, and ethical behavior in all our relationships."
                },
                {
                  icon: Globe,
                  title: "Innovation",
                  description: "We continuously invest in research and development to advance pharmaceutical manufacturing technology."
                },
                {
                  icon: CheckCircle,
                  title: "Safety",
                  description: "The safety of our employees, customers, and the environment is our top priority."
                },
                {
                  icon: TrendingUp,
                  title: "Partnership",
                  description: "We build long-term relationships based on mutual trust, collaboration, and shared success."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the leaders guiding Vubrix Pharma&apos;s vision and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Smit", role: "Director" },
                { name: "Vandit Khambhadiya", role: "Director" },
                { name: "Dhruvik", role: "Director" }
              ].map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                      <p className="text-blue-600 font-semibold">{leader.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
