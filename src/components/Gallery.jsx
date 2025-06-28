import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CTAButton from "./CTAButton";

function Gallery() {
  // Define full image paths, skipping deck10 and deck18
  const categories = {
    Roofing: Array.from(
      { length: 24 },
      (_, i) => `/assets/gallery/roofs/roof${i + 1}.webp`
    ),
    Remodeling: Array.from({ length: 25 }, (_, i) => i + 1)
      .filter((n) => n !== 6) // remove remodel6
      .map((n) => `/assets/gallery/remodels/remodel${n}.webp`),
    Decks: Array.from({ length: 33 }, (_, i) => i + 1)
      .filter((n) => n !== 10 && n !== 18) // remove deck10 and deck18
      .map((n) => `/assets/gallery/decks/deck${n}.webp`),
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
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {category}
            </h3>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000 }}
              loop
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              className="w-full max-w-5xl mx-auto"
            >
              {webpImages.map((webpSrc, idx) => {
                const baseName = webpSrc.replace(".webp", "");
                const jpgSrc = `${baseName}.jpg`;

                return (
                  <SwiperSlide key={idx}>
                    <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-md group">
                      <picture>
                        <source srcSet={webpSrc} type="image/webp" />
                        <img
                          src={jpgSrc}
                          alt={`${category} project ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
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
          text="Request a Free Quote"
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition"
        />
      </div>
    </div>
  );
}

export default Gallery;
