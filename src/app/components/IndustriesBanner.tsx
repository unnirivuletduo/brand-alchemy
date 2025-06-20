import { motion } from "framer-motion";


const title =
    "User-Engaging ECommerce Website to Boost Turtle Wax's Car Care Services";

  const words = title.split(" ");


export default function IndustriesBanner() {
  return (
    <div
      className="relative h-[500px] md:h-screen w-full bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/industry-banner.jpg')", // replace with your image path
      }}
    >
      {/* Overlay (optional for darkening) */}
      <div className="absolute w-full inset-0 bg-black" style={{opacity:.5}} />

      {/* Main Content */}
      <div className="relative ba-container">
        <h1 className="text-4xl md:text-6xl font-light pt-10 mx-auto leading-tight">
          {words.map((word, index) => (
          <span key={index} className="overflow-hidden inline-block">
            <motion.span
              className="inline-block"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: index * 0,
                ease: "easeOut",
              }}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
    </h1>
  
      </div>

      {/* Industry Text at bottom left */}
      <div className="absolute bottom-10 w-full   left-0 text-2xl">
        <div className="ba-container">
        <p className="text-white  ">Industry</p>
        <p className="text-white text-lg ">Automobile</p>
        </div>
      </div>
    </div>
  );
}
