'use client';

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

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
  const [customIcon, setCustomIcon] = useState<import("leaflet").Icon | null>(null);

  // Load Leaflet icon only on client
  useEffect(() => {
    const loadLeafletIcon = async () => {
      const L = await import("leaflet");

      const icon = new L.Icon({
        iconUrl: "/leaflet/marker-icon.png",   // ✅ served from public/
        shadowUrl: "/leaflet/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      setCustomIcon(icon);
    };

    loadLeafletIcon();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
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
        <div className="relative z-10 text-[clamp(2rem,4vw,5rem)] font-light text-center flex flex-wrap justify-center">
          Contact Us
        </div>
      </div>

      {/* Form */}
      <div className="min-h-screen bg-white text-black px-6 lg:px-20 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-light mb-6">Get in Touch</h1>
          <p className="text-gray-600 mb-12">
            We’d love to hear from you. Whether you have a question, a project idea, or just want to say hello — drop us a message below.
          </p>
        </div>

        {submitted ? (
          <div className="text-center text-green-600 text-xl font-medium">
            ✅ Thank you! We’ll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div>
              <label className="block text-left text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-left text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Map */}
      <div className="w-full h-[30rem] mx-auto">
        {customIcon && (
          <MapContainer
            center={[-41.2865, 174.7762]} // Wellington, New Zealand
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
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
