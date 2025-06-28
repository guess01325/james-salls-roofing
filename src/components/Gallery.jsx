import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

function Gallery() {
 const categories = {
  Roofing: ["/assets/gallery/roofs/roof1.webp", "/assets/gallery/roofs/roof2.webp"],
  Remodeling: ["/assets/gallery/remodels/remodel1.webp", "/assets/gallery/remodels/remodel2.webp"],
  Decks: ["/assets/gallery/decks/deck1.webp", "/assets/gallery/decks/deck2.webp"],
};

  return (
    <div className="px-4 py-10 space-y-16">
      {Object.entries(categories).map(([category, webpImages]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div key={category}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {webpImages.map((webpSrc, idx) => {
                const baseName = webpSrc.replace(".webp", "");
                const jpgSrc = `${baseName}.jpg`;
                return (
                  <motion.picture key={idx}>
                    <source srcSet={webpSrc} type="image/webp" />
                    <img
                      src={jpgSrc}
                      alt={`${category} project ${idx + 1}`}
                      loading="lazy"
                      width={2048}
                      height={1365}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 object-cover w-full h-auto"
                    />
                  </motion.picture>
                );
              })}
            </div>
          </div>
        </motion.div>
      ))}

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Let James Salls Roofing & Remodeling bring your vision to life.
        </p>
        <CTAButton
          text="Request a Free Qoute"
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition"
        >
          Request a Free Quote
        </CTAButton>
      </div>
    </div>
  );
}

export default Gallery;
