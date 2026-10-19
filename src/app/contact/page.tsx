'use client';

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "leaflet/dist/leaflet.css";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaPinterestP,
  FaThreads,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const contactDetails = [
  { label: "General Enquiry", value: "+64 20 446 6444", href: "tel:+64204466444", Icon: FaPhone },
  { label: "Email", value: "info@brandalchemy.co.nz", href: "mailto:info@brandalchemy.co.nz", Icon: FaEnvelope },
];

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/brandalchemy.nz", Icon: FaFacebookF },
  { name: "Instagram", href: "https://www.instagram.com/brand.alchemy.nz/", Icon: FaInstagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/brandalchemynz", Icon: FaLinkedinIn },
  { name: "Pinterest", href: "https://nz.pinterest.com/brandalchemy_nz", Icon: FaPinterestP },
  { name: "Threads", href: "https://www.threads.com/@brand.alchemy.nz", Icon: FaThreads },
  { name: "X", href: "https://x.com/brandalchemynz", Icon: FaXTwitter },
  { name: "TikTok", href: "https://www.tiktok.com/@brand.alchemy.nz", Icon: FaTiktok },
  { name: "YouTube", href: "https://www.youtube.com/@brandalchemy_nz", Icon: FaYoutube },
];

// Dynamically import react-leaflet components (client-side only)
const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });

export default function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [customIcon, setCustomIcon] = useState<import("leaflet").Icon | null>(null);

  // Load Leaflet icon only on client
  useEffect(() => {
    const loadLeafletIcon = async () => {
      const L = await import("leaflet");

      const icon = new L.Icon({
        iconUrl: "/leaflet/marker-icon.png",
        shadowUrl: "/leaflet/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      setCustomIcon(icon);
    };

    loadLeafletIcon();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSubmitted(false); // remove success if user edits again
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        website: "" // honeypot
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }

  } catch (error) {
    console.error("Submission error:", error);
  }

  setLoading(false);
};



  return (
    <>
      <Header />

      {/* Banner */}
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
        <div className="relative z-10 text-[clamp(2rem,4vw,5rem)] font-light text-center">
          Contact Us
        </div>
      </div>

      {/* Form Section */}
      <div className="min-h-screen bg-white text-black px-6 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">

        {/* Contact details */}
        <div>
          <h1 className="text-4xl font-light mb-6">Get in Touch</h1>
          <p className="text-gray-600 mb-10">
            We’d love to hear from you. Whether you have a question, a project idea, or just want to say hello — drop us a message.
          </p>

          <ul className="space-y-4 mb-10">
            {contactDetails.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-4 p-5 border border-gray-200 rounded-lg hover:border-black transition"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-gray-500">{label}</span>
                    <span className="block text-lg break-words">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500 mb-4">Follow us</p>
          <ul className="flex flex-wrap gap-3">
            {socialLinks.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 mb-2">
              Phone Number
            </label>

            <div
              style={{
                width: "100%",
                border: "1px solid #000000",
                borderRadius: "0.5rem",
              }}
              className="focus-within:ring-1 focus-within:ring-black"
            >
              <PhoneInput
                country="nz"
                preferredCountries={["nz", "us", "gb", "ga"]}
                enableSearch
                value={form.phone}
                onChange={(phone) =>
                  setForm({ ...form, phone: phone ? `+${phone.replace(/^\+/, "")}` : "" })
                }
                inputStyle={{
                  width: "100%",
                  padding: "12px 16px 12px 40px",
                  border: "none",
                  borderRadius: "0.5rem",
                  outline: "none",
                  fontSize: "16px",
                  height: "auto",
                }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "transparent",
                }}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="mt-6 text-center text-green-600 font-medium">
              ✅ Thank you! We’ll get back to you soon.
            </div>
          )}

        </form>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[30rem] mx-auto">
        {customIcon && (
          <MapContainer
            center={[-41.2865, 174.7762]}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-41.2865, 174.7762]} icon={customIcon}>
              <Popup>📍 Brand Alchemy HQ — Wellington, New Zealand</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>

      <Footer />
    </>
  );
}
