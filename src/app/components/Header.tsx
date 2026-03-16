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
              <li><Link href="/industry/">Industries</Link></li>
              <li className="hidden"><Link href="#">About Us</Link></li>
              <li><Link href="#">Blogs</Link></li>
              
              <li className="hidden"><Link href="#">Careers</Link></li>
              
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </nav>
          <button
            className="flex lg:hidden flex-col justify-between w-8 h-6 cursor-pointer group ba-menu-btn"
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
        <Link href="/" className="logo-ba ">
          <Image 
           className="pl-5"
            src="/logo.png"
            alt="Brand Alchemy Logo"
            width={100}
            height={100}
          />
        </Link>
          <button
            className="flex flex-col justify-between w-8 h-6 cursor-pointer group ba-menu-btn absolute top-13 right-10"
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

          <div className="ba-container pt-13 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {/* All your column content remains unchanged */}
            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-300">
              <li><Link href="/services/">Branding</Link></li>
              <li><Link href="/services/">Marketing</Link></li>
              <li><Link href="/services/">Ads</Link></li>
              <li><Link href="/services/">Website</Link></li>
              <li><Link href="/services/">Print</Link></li>
              <li><Link href="/services/">Video Commercial</Link></li>
              <li><Link href="/services/">Software Development</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Industries</h3>
              <ul className="space-y-3 text-gray-300">
              <li><a href="/industry/">Beauty</a></li>
              <li><a href="/industry/">Healthcare</a></li>
              <li><a href="/industry/">Fashion</a></li>
              <li><a href="/industry/">Electronics</a></li>
              <li><a href="/industry/">Retail</a></li>
              <li><a href="/industry/">Real Estate</a></li>
              <li><a href="/industry/">Construction</a></li>
              <li><a href="/industry/">Manufacturing</a></li>
              </ul>
            </div>

            {/* Column 5 */}
            <div className="hidden">
              <h3 className="text-xl font-semibold mb-6">Solutions</h3>
              <ul className="space-y-3 text-gray-300">
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
              <h3 className="text-xl font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-300">
               <li><Link href="/">Home</Link></li>
              <li><Link href="/services/">Services</Link></li>
              <li><Link href="/industry/">Industries</Link></li>
              <li className="hidden"><Link href="#">About Us</Link></li>
              <li className="hidden"><Link href="/blog/">Blogs</Link></li>
              
              <li className="hidden"><Link href="#">Careers</Link></li>
              
              <li><Link href="/contact/">Contact</Link></li>
              </ul>
            </div>

            {/* Column 6 */}
            <div className="hidden">
              <h3 className="text-xl font-semibold mb-6">Other</h3>
              <ul className="space-y-3 text-gray-300"> 
                <li><Link href="#">Partnership</Link></li>
                <li><Link href="#">Awards and Recognitions</Link></li>
                <li><Link href="#">Insights</Link></li>
                <li><Link href="#">Blogs</Link></li>
                <li><Link href="#">Resource Augmentation</Link></li>
                <li><Link href="#">Sitemap</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Connect</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="tel:+64 20 446 6444">+64 20 446 6444</Link></li>
                <li><Link href="mailto:rohith@brandalchemy.co.nz"><small>rohith@brandalchemy.co.nz</small></Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/*</AnimatePresence>*/}
    </header>
  );
}
