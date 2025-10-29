import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { createPageUrl } from "@/utils";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: createPageUrl("Home") },
  {
    name: "About",
    href: createPageUrl("About"),
    dropdown: [
      { name: "Company History", href: createPageUrl("About") + "#history" },
      { name: "Mission & Vision", href: createPageUrl("About") + "#mission" },
      { name: "Leadership Team", href: createPageUrl("About") + "#team" }
    ]
  },
  {
    name: "Products",
    href: createPageUrl("Products"),
    dropdown: [
      { name: "APIs", href: createPageUrl("Products") + "#apis" },
      { name: "Intermediates", href: createPageUrl("Products") + "#intermediates" },
      { name: "Custom Synthesis", href: createPageUrl("Products") + "#custom" }
    ]
  },
  {
    name: "Capabilities",
    href: "#",
    dropdown: [
      { name: "Manufacturing", href: createPageUrl("Manufacturing") },
      { name: "R&D", href: createPageUrl("Research") },
      { name: "Quality", href: createPageUrl("Quality") }
    ]
  },
  { name: "Careers", href: createPageUrl("Careers") },
  { name: "Contact", href: createPageUrl("Contact") }
];

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg" : "bg-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href={createPageUrl("Home")} className="flex items-center">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Vubrix Pharma</h1>
                  <p className="text-xs text-blue-600 font-medium">APIs & Intermediates</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                        {item.name}
                        <ChevronDown className="ml-1 w-4 h-4" />
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-2">
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
                        router.pathname === item.href ? "text-blue-600" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href={createPageUrl("Contact")}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <Link href={createPageUrl("Contact")}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Vubrix Pharma</h3>
                  <p className="text-blue-400 text-sm font-medium">APIs & Intermediates</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading manufacturer of high-quality Active Pharmaceutical Ingredients and Intermediates, 
                serving the global pharmaceutical industry with innovation and excellence.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.slice(0, 5).map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">support@vubrixpharma.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <span className="text-gray-300">
                    123 Pharma Drive<br />
                    Industrial Park, NY 10001
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Vubrix Pharma. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Quality Policy
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400 text-sm font-medium text-white">
            Developed by:{" "}
            <a
              href="https://www.linkedin.com/in/maulik-limbani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              maulik limbani
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
