import { motion } from "framer-motion";

const CTAButton = ({ text = "Get a Free Quote", link = "/contact", className = "" }) => {
  return (
    <motion.a
      href={link}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition-colors ${className}`}
    >
      {text}
    </motion.a>
  );
};

export default CTAButton;