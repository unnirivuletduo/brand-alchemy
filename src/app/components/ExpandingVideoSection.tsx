
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ExpandingVideoSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className="w-full flex justify-center items-center">
      <motion.div
        ref={ref}
        animate={{
          width: inView ? "100%" : "80%",
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="aspect-video overflow-hidden"
      >
        <video
          src="/videos/webdevelopment.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
