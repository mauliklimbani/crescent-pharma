import React from "react";
import Head from "next/head";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ChevronRight,
  Shield,
  Award,
  Users,
  Globe,
  Beaker,
  Factory,
  CheckCircle,
  TrendingUp
} from "lucide-react";

import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsSection from "@/components/home/NewsSection";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Crescent Pharma - APIs & Intermediates</title>
        <meta name="description" content="Leading manufacturer of high-quality Active Pharmaceutical Ingredients and Intermediates, serving the global pharmaceutical industry with innovation and excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Overview */}
        <ServicesOverview />

        {/* Stats Section */}
        <StatsSection />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Latest News */}
        <NewsSection />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
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
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your API and intermediate requirements. Our team is ready to provide 
                you with high-quality solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={createPageUrl("Contact")}>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Get a Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href={createPageUrl("Products")}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    View Products
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
