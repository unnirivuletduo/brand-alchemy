'use client';

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import dynamic from "next/dynamic";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
    setSubmitted(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let data: any = null;

      try {
        data = await res.json();
      } catch {
        console.error("Response is not valid JSON");
      }

      if (res.ok) {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        console.error("Server error:", data);
        alert(data?.message || "Something went wrong. Please try again.");
      }

    } catch (error) {
      console.error("Network error:", error);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
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
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-light mb-6">Get in Touch</h1>
          <p className="text-gray-600 mb-12">
            We’d love to hear from you. Whether you have a question, a project idea, or just want to say hello — drop us a message below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">

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
