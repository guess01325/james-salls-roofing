import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

function Hero() {
  return (
    <div
      className="h-[90vh] bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/assets/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white max-w-2xl"
      >
        {/* Van Image */}
        <img
          src="/assets/van.jpg"
          alt="James Salls Remodeling Van"
          className="mx-auto w-full max-w-md mb-6 rounded shadow-lg"
        />

        {/* Text Content */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          James Salls Roofing & Remodeling
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Proudly serving with quality craftsmanship you can trust.
        </p>

        <CTAButton
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold"
        >
          Get a Free Estimate
        </CTAButton>
      </motion.div>
    </div>
  );
}

export default Hero;
