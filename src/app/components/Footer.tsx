
import Link from 'next/link';
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
const ThreadsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 512 512"
    className="threadsIcon"
  >
    <path d="M105 0h302c57.75 0 105 47.25 105 105v302c0 57.75-47.25 105-105 105H105C47.25 512 0 464.75 0 407V105C0 47.25 47.25 0 105 0z" />
    <path
      fill="#fff"
      fillRule="nonzero"
      d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z"
    />
  </svg>
);
const XIcon = () => (
 <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#99a1af"
    className="bi bi-twitter-x"
    viewBox="0 0 13 13"
    height="13"
    width="13"
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
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Industries</Link></li>
              <li><Link href="#">About Us</Link></li>
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
              <li>General Enquiry : <Link href="tel:+64 20 446 6444">+64 20 446 6444</Link></li>
              <li>Email : <Link href="mailto:rohith@brandalchemy.co.nz">rohith@brandalchemy.co.nz</Link> </li>
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
