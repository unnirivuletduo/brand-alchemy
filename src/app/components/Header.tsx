'use client';
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      setScrolled(currentScroll > 50); // Add background if scrolled more than 50px

      if (currentScroll <= 0) {
        setVisible(true);
      } else if (currentScroll > lastScroll) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`ba-header w-full fixed py-8 left-0 z-999 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-10' : 'bg-transparent'
      }`}
      style={{
        top: visible ? '0' : '-150px',
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
      }}
    >
      <div className="ba-container flex items-center justify-between">
        <Link href="/" className="logo-ba">
          <Image 
            src="/logo.png"
            alt="Brand Alchemy Logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex items-center gap-10">
          <nav>
            <ul className="flex items-center">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services/">Services</Link></li>
              <li><Link href="#">Industries</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Blogs</Link></li>
              
              <li><Link href="#">Careers</Link></li>
              
              <li><Link href="#">Contact</Link></li>
            </ul>
          </nav>
          <button
            className="flex flex-col justify-between w-8 h-6 cursor-pointer group ba-menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className={`h-1 bg-white rounded transition-all duration-300 w-full ${open ? 'rotate-45 translate-y-3' : ''}`}
            />
            <span
              className={`h-1 bg-white rounded transition-all duration-300 w-full ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-1 bg-white rounded transition-all duration-300 w-full ${open ? '-rotate-45 -translate-y-3' : ''}`}
            />
          </button>
        </div>
      </div>

      {/*<AnimatePresence>*/}
      {open && (
        <div className="fixed h-screen left-0 top-0 w-screen bg-black text-white shadow-lg py-10 overflow-y-auto">
          <button
            className="flex flex-col justify-between w-8 h-6 cursor-pointer group ba-menu-btn absolute top-10 right-10"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className={`h-1 bg-white rounded transition-all duration-300 w-full ${open ? 'rotate-45 translate-y-3' : ''}`}
            />
            <span
              className={`h-1 bg-white rounded transition-all duration-300 w-full ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-1 bg-white rounded transition-all duration-300 w-full ${open ? '-rotate-45 -translate-y-3' : ''}`}
            />
          </button>

          <div className="ba-container pt-20 mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
            {/* All your column content remains unchanged */}
            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
              <li><Link href="#">Branding</Link></li>
              <li><Link href="#">Marketing</Link></li>
              <li><Link href="#">Ads</Link></li>
              <li><Link href="#">Website</Link></li>
              <li><Link href="#">Print</Link></li>
              <li><Link href="#">Video Commercial</Link></li>
              <li><Link href="#">Software Development</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#">Beauty</Link></li>
                <li><Link href="#">Healthcare</Link></li>
                <li><Link href="#">Fashion</Link></li>
                <li><Link href="#">Electronics</Link></li>
                <li><Link href="#">Retail</Link></li>
                <li><Link href="#">Real Estate</Link></li>
                <li><Link href="#">Construction</Link></li>
                <li><Link href="#">Manufacturing</Link></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="#">E-commerce Development</Link></li>
                <li><Link href="#">Custom Web Apps</Link></li>
                <li><Link href="#">Mobile Apps</Link></li>
                <li><Link href="#">UI/UX Design</Link></li>
                <li><Link href="#">Digital Marketing</Link></li>
                <li><Link href="#">Cloud Solutions</Link></li>
                <li><Link href="#">SEO Optimization</Link></li>
                <li><Link href="#">Consulting</Link></li>
              </ul>
            </div>

            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/">Home</Link></li>
              <li><Link href="/services/">Services</Link></li>
              <li><Link href="#">Industries</Link></li>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Blogs</Link></li>
              
              <li><Link href="#">Careers</Link></li>
              
              <li><Link href="#">Contact</Link></li>
              </ul>
            </div>

            {/* Column 6 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Other</h3>
              <ul className="space-y-2 text-gray-300"> 
                <li><Link href="#">Partnership</Link></li>
                <li><Link href="#">Awards and Recognitions</Link></li>
                <li><Link href="#">Insights</Link></li>
                <li><Link href="#">Blogs</Link></li>
                <li><Link href="#">Resource Augmentation</Link></li>
                <li><Link href="#">Sitemap</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-300">
                <li>General Enquiry : <Link href="tel:+64 20 446 6444">+64 20 446 6444</Link></li>
                <li>Email: <Link href="mailto:rohith@brandalchemy.co.nz">rohith@brandalchemy.co.nz</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/*</AnimatePresence>*/}
    </header>
  );
}
