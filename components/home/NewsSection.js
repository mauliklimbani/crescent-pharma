import React from "react";
import Link from "next/link";
import Image from "next/image";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";

const news = [
  {
    title: "Vubrix Pharma Receives FDA Approval for New API Manufacturing Facility",
    excerpt: "Our state-of-the-art facility in New Jersey has received FDA approval, expanding our manufacturing capacity by 40%.",
    date: "March 15, 2024",
    author: "Press Release",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400"
  },
  {
    title: "Breakthrough in Sustainable API Manufacturing Processes",
    excerpt: "Our R&D team has developed innovative green chemistry methods that reduce environmental impact by 30%.",
    date: "March 8, 2024",
    author: "Dr. Sarah Johnson",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
  },
  {
    title: "Partnership with Leading European Pharmaceutical Company",
    excerpt: "Strategic partnership to supply key APIs for cardiovascular medications, strengthening our global presence.",
    date: "February 28, 2024",
    author: "Business Development",
    category: "Partnerships",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400"
  }
];

export default function NewsSection() {
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
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed about our latest developments and industry insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 h-full border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0 h-full">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {item.author}
                      </div>
                      <Link href={createPageUrl("News")}>
                        <Button variant="ghost" size="sm" className="group-hover:text-blue-600">
                          Read More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
