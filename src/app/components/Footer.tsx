
import Link from 'next/link';
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
const ThreadsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.91 8.13 6.84 9.5.5.09.68-.22.68-.48v-1.68c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.5 2.3 1.07 2.86.82.09-.65.35-1.07.63-1.32-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.55 9.55 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.72c0 .27.18.59.69.49A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
  </svg>
);
const XIcon = () => (
 <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#99a1af"
    className="bi bi-twitter-x"
    viewBox="0 0 16 16"
    height="16"
    width="16"
  >
    <path
      d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
      strokeWidth="1"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 ba-footer">
      <div className="ba-container">

        {/* Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm mb-16">
          <div>
            <h3 className="font-light text-2xl mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Industries</Link></li> 
              <li><Link href="#">Works</Link></li>
              <li><Link href="#">Blogs</Link></li>
               <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-light text-2xl mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">Branding</Link></li>
              <li><Link href="#">Marketing</Link></li>
              <li><Link href="#">Ads</Link></li>
              <li><Link href="#">Website</Link></li>
              <li><Link href="#">Print</Link></li>
              <li><Link href="#">Video Commercial</Link></li>
              <li><Link href="#">Software Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-light text-2xl mb-4">Other</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#">Partnership</Link></li>
              <li><Link href="#">Awards and Recognitions</Link></li>
              <li><Link href="#">Insights</Link></li>
              <li><Link href="#">Resource Augmentation</Link></li>
              <li><Link href="#">Testimonials</Link></li>
              <li><Link href="#">Our Clients</Link></li>
              <li><Link href="#">Sitemap</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="font-light text-2xl mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>General Enquiry : +91 480 2733 111</li>
              {/*<li>Sales Enquiry : +91 480 2733 555</li>*/}
              <li>Email : <Link href="mailto:rohith@brandalchemy.co.nz">rohith@brandalchemy.co.nz</Link> </li>
              {/*<li>HR Enquiry : +91 480 2733 999</li>*/}
              {/*<li>Whatsapp ( Sales ) : +91 8606 483 399</li>*/}
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">Brand Alchemy © 2025 All rights reserved</div>
          {/* Social Icons */}
          <div className="flex justify-center gap-6 text-m text-white mb-4 md:mb-0">
          <Link className="text-gray-400 cursor-pointer" href="http://www.linkedin.com/company/brandalchemynz"><FaLinkedin  /></Link>
          <Link className="text-gray-400 cursor-pointer" href="https://www.youtube.com/@brandalchemy_nz"><FaYoutube /></Link>
          <Link className="text-gray-400 cursor-pointer" href="https://www.instagram.com/brand.alchemy.nz/"><FaInstagram /></Link>
          <Link className="text-gray-400 cursor-pointer" href="https://www.facebook.com/brandalchemy.nz"><FaFacebook /></Link>
          <Link className="text-gray-400 cursor-pointer" href="https://nz.pinterest.com/brandalchemy_nz"><FaPinterest /></Link>
          <Link className="text-gray-400 cursor-pointer" href="https://www.threads.com/@brand.alchemy.nz"><ThreadsIcon /></Link>
          <Link className="text-gray-400 cursor-pointer" href="https://x.com/brandalchemynz"><XIcon /></Link>
          <Link className="text-gray-400 cursor-pointer" href="https://www.tiktok.com/@brand.alchemy.nz"><SiTiktok /></Link>
        </div>
          <div className="flex gap-4">
            <Link href="#">Privacy Policy</Link>
            <span>|</span>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>

        
      </div>
      
    </footer>
  );
}
