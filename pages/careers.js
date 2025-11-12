import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Users,
  HeartHandshake,
  Globe,
  Building2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision plans." },
  { icon: Clock, title: "Flexible Schedule", desc: "Hybrid work with flexible hours for better balance." },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual stipend for courses, books, and conferences." },
  { icon: HeartHandshake, title: "Inclusive Culture", desc: "Welcoming environment where every voice matters." },
  { icon: Sparkles, title: "Growth Path", desc: "Clear career frameworks and mentorship support." },
  { icon: Globe, title: "Global Impact", desc: "Contribute to medicines used worldwide." }
];

const openings = [
  {
    title: "Senior Process Chemist",
    dept: "R&D",
    location: "Hyderabad, IN",
    type: "Full-time",
    summary: "Lead scale-up from lab to pilot for key APIs; collaborate cross-functionally.",
    link: "#apply"
  },
  {
    title: "Quality Assurance Specialist",
    dept: "Quality",
    location: "Hyderabad, IN",
    type: "Full-time",
    summary: "Own batch documentation, audits, and compliance initiatives (cGMP, ICH).",
    link: "#apply"
  },
  {
    title: "Manufacturing Supervisor",
    dept: "Manufacturing",
    location: "Hyderabad, IN",
    type: "Shift",
    summary: "Oversee production lines, safety, and throughput with continuous improvement.",
    link: "#apply"
  }
];

export default function CareersPage() {
  return (
    <Layout currentPageName="Careers">
      <Head>
        <title>Vubrix Pharma Careers</title>
        <meta name="description" content="Join Vubrix Pharma to advance global health with world-class APIs and intermediates." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#002769] to-[#001732] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <Badge className="bg-white/15 text-white border-white/20 mb-4">We’re hiring</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Build the future of pharmaceuticals with us
            </h1>
            <p className="text-[#ccd5e1] text-lg mb-8">
              Join a mission-driven team crafting high-quality APIs and intermediates that power
              breakthrough therapies worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#openings">
                <Button size="lg" className="bg-white text-[#001f4d] hover:bg-gray-100">
                  View Open Roles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#culture">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#001f4d]">
                  Life at Vubrix Pharma
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{ label: "Employees", value: "500+" }, { label: "Nationalities", value: "10+" }, { label: "APIs Produced", value: "120+" }, { label: "Facilities", value: "3" }].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-bold text-gray-900">{item.value}</div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <Badge className="bg-[#94d12b] text-white border-[#94d12b] mb-3">Benefits</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Perks that support you</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We invest in your wellbeing, growth, and long-term success.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <Card key={b.title} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <b.icon className="w-6 h-6 text-[#94d12b]" />
                    <h3 className="font-semibold text-gray-900">{b.title}</h3>
                  </div>
                  <p className="text-gray-600">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-[#94d12b] text-white border-[#94d12b] mb-3">Culture</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Life at Vubrix Pharma</h2>
              <p className="text-gray-600 mb-6">
                We’re scientists, engineers, and operators united by a mission to improve
                patient outcomes. We celebrate curiosity, craftsmanship, and collaboration.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><Users className="w-5 h-5 text-[#002769] mt-1" /> Cross-functional squads and mentorship</li>
                <li className="flex items-start gap-3"><Building2 className="w-5 h-5 text-[#002769] mt-1" /> Modern facilities with safety-first design</li>
                <li className="flex items-start gap-3"><Globe className="w-5 h-5 text-[#002769] mt-1" /> Global customers and real-world impact</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#benefits"><Button variant="outline">See Benefits</Button></a>
                <a href="#openings"><Button>Open Roles</Button></a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white border rounded-xl p-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Briefcase, label: "Career Growth" },
                  { icon: GraduationCap, label: "Continuous Learning" },
                  { icon: HeartHandshake, label: "Supportive Team" },
                  { icon: ShieldCheck, label: "Safety First" }
                ].map((i) => (
                  <div key={i.label} className="flex items-center gap-3 p-4 rounded-lg border bg-white">
                    <i.icon className="w-6 h-6 text-[#94d12b]" />
                    <span className="font-medium text-gray-900">{i.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <Badge className="bg-[#94d12b] text-white border-[#94d12b] mb-3">Open Roles</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Join the team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Don’t see a fit? Reach out via our contact page.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openings.map((role) => (
              <Card key={role.title} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                    <Badge>{role.dept}</Badge>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" /> {role.location}
                    <span className="mx-1">•</span>
                    <Clock className="w-4 h-4" /> {role.type}
                  </div>
                  <p className="text-gray-600 mb-6">{role.summary}</p>
                  <div className="mt-auto">
                    <a href={role.link}>
                      <Button className="w-full">Apply Now</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div id="apply" className="mt-10 text-center">
            <p className="text-gray-700 mb-4">Prefer email? Send your CV to <a className="text-[#002769] underline" href="mailto:support@vubrixpharma.com">support@vubrixpharma.com</a></p>
            <Link href={createPageUrl("Contact")}>
              <Button variant="outline">Contact HR</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}


