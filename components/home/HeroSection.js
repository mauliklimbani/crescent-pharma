import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Award, Globe, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#ccd5e1] via-white to-[#e6eaf0] overflow-hidden">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="absolute left-0 top-0 w-1/2 h-full opacity-30 max-w-[60vw] max-h-[60vh] md:max-w-none md:max-h-none"
          viewBox="0 0 600 800"
          fill="none"
        >
          <ellipse
            cx="300"
            cy="400"
            rx="300"
            ry="400"
            fill="url(#hero-bg1)"
          />
          <defs>
            <linearGradient
              id="hero-bg1"
              x1="0"
              y1="0"
              x2="600"
              y2="800"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3b82f6" stopOpacity="0.12" />
              <stop offset="1" stopColor="#6366f1" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute right-0 bottom-0 w-1/3 h-2/3 opacity-20 max-w-[40vw] max-h-[40vh] md:max-w-none md:max-h-none"
          viewBox="0 0 400 600"
          fill="none"
        >
          <ellipse
            cx="200"
            cy="300"
            rx="200"
            ry="300"
            fill="url(#hero-bg2)"
          />
          <defs>
            <linearGradient
              id="hero-bg2"
              x1="0"
              y1="0"
              x2="400"
              y2="600"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2563eb" stopOpacity="0.10" />
              <stop offset="1" stopColor="#a5b4fc" stopOpacity="0.06" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-4 flex justify-center lg:justify-start"
            >
              <Badge className="bg-[#99b3cc] text-[#001732] font-semibold px-4 py-2 rounded-full shadow-sm text-sm sm:text-base">
                Trusted by Pharma Leaders
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 leading-tight"
            >
              <span className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#001f4d] to-[#4d6fa3]">
                  World-Class APIs
                </span>
              </span>
              <span className="block text-[#001732]">
                &amp; Intermediates
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base xs:text-lg sm:text-xl text-gray-700 mb-7 max-w-xl mx-auto lg:mx-0"
            >
              Elevating pharmaceutical manufacturing with innovation, quality, and global reach. Delivering excellence in Active Pharmaceutical Ingredients and Intermediates since 1995.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8"
            >
              <Link href={createPageUrl("Products")}>
                <Button
                  size="lg"
                  className="bg-[#001f4d] cursor-pointer hover:bg-[#001732] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg flex items-center group w-full xs:w-auto"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={createPageUrl("About")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#001f4d] text-[#001f4d] bg-[#e6eaf0] cursor-pointer font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center group w-full xs:w-auto"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Our Story
                </Button>
              </Link>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center sm:items-stretch"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
                <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ccd5e1]">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#001f4d]" />
                </span>
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#001f4d]">ISO 9001:2015</div>
                  <div className="text-xs text-gray-500">GMP Certified</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
                <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ccd5e1]">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#001f4d]" />
                </span>
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#001f4d]">50+ Countries</div>
                  <div className="text-xs text-gray-500">Global Reach</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ccd5e1]">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#001f4d]" />
                </span>
                <div>
                  <div className="text-base sm:text-lg font-bold text-[#001f4d]">25+ Years</div>
                  <div className="text-xs text-gray-500">Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex justify-center items-center relative mb-8 lg:mb-0"
          >
            <div className="relative w-[220px] h-[270px] xs:w-[280px] xs:h-[340px] sm:w-[340px] sm:h-[420px] md:w-[400px] md:h-[480px] mx-auto">
              {/* Main card */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#002769] to-[#001732] rounded-3xl shadow-2xl flex flex-col justify-center items-center p-4 xs:p-6 sm:p-8"
              >
                <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 rounded-full bg-white flex items-center justify-center mb-4 xs:mb-6 shadow-lg">
                  <img
                    src="/logo.svg"
                    alt="API Molecule"
                    className="w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 object-contain"
                  />
                </div>
                <div className="text-white text-lg xs:text-xl sm:text-2xl font-bold mb-1 xs:mb-2 text-center">
                  Science. Quality. Trust.
                </div>
                <div className="text-[#ccd5e1] text-xs xs:text-sm text-center max-w-xs">
                  Advanced manufacturing for a healthier tomorrow.
                </div>
              </motion.div>
              {/* Floating pill */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 xs:-top-8 xs:-right-8 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#99b3cc] to-[#4d6fa3] rounded-full shadow-lg flex items-center justify-center"
              >
                <div className="w-5 h-5 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-white rounded-full shadow-inner"></div>
              </motion.div>
              {/* Floating capsule */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  x: [0, -8, 0]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 xs:-bottom-6 xs:-left-6 w-9 h-9 xs:w-12 xs:h-12 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#80a0c0] to-[#ccd5e1] rounded-full shadow-md flex items-center justify-center"
              >
                <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-white/80 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
