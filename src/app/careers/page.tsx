'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

// 🔧 Define Job type
interface Job {
  title: string;
  location?: string;
  type?: string;
  description?: string;
}

const jobs: Job[] = [
  {
    title: "Frontend Developer",
    location: "Remote / India",
    type: "Full-time",
    description:
      "We are looking for a skilled frontend developer with experience in Next.js, TailwindCSS, and modern UI frameworks.",
  },
  {
    title: "Backend Developer",
    location: "Remote / India",
    type: "Full-time",
    description:
      "Join our backend team to build scalable APIs and integrations. Experience with Node.js and databases is required.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote / Hybrid",
    type: "Contract",
    description:
      "We need a creative designer who can craft beautiful and functional user experiences for web applications.",
  },
  {
    title: "Project Manager",
    location: "Remote / Hybrid",
    type: "Contract",
    description:
      "We need a creative designer who can craft beautiful and functional user experiences for web applications.",
  },
];

export default function CareersPage() {
  const [open, setOpen] = useState(false);
  // 🔧 selectedJob is either a Job or null
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // 🔧 job param is typed
  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  return (
    <>
      <Header />
      <div className="relative w-full h-[clamp(300px,60vh,600px)] overflow-hidden flex items-center justify-center px-6 text-white pt-[100px]">
        <div className="absolute inset-0 z-0">
          <Image
            width={1920}
            height={600}
            src="/images/industry-banner.jpg"
            alt="Industry Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-[clamp(2rem,4vw,5rem)] font-light text-center flex flex-wrap justify-center">
          Contact Us
        </div>
      </div>

      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="pt-20 text-center bg-gradient-to-b from-gray-50 to-white">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg"
          >
            At Alchemy, we believe in transforming ideas into digital experiences. Explore our open roles and be part of something impactful.
          </motion.p>
        </section>

        {/* Job Listings */}
        <section className="ba-container mx-auto px-6 py-16">
          <h2 className="text-4xl font-light mb-6 text-center">Open Positions</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="rounded-2xl bg-gray-50 shadow-md hover:shadow-xl transition p-6">
                  <h3 className="text-2xl font-light mb-2 text-center">{job.title}</h3>
                  <p className="text-gray-600 mb-3 text-center">{job.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                  </div>
                  <button
                    className="w-full bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition"
                    onClick={() => handleApply(job)}
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-20 bg-gray-50">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4"
          >
            Don’t see a role that fits?
          </motion.h2>
          <p className="text-gray-600 mb-6">
            We are always looking for talented individuals. Send us your resume and we’ll reach out when a matching opportunity opens.
          </p>
          <button
            onClick={() => handleApply({ title: "General Application" })}
            className="bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition"
          >
            Send Resume
          </button>
        </section>

        {/* Apply Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative">
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-4">
                Apply for {selectedJob?.title}
              </h2>

              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" required />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" required />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" required />
                <input type="text" value={selectedJob?.title || ""} readOnly className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
                <input type="file" accept=".pdf,.doc,.docx" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
                <textarea placeholder="Your message (optional)" rows={4} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"></textarea>
                <button type="submit" className="w-full bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
