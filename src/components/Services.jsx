import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import RoofingIcon from "@mui/icons-material/Roofing";
import DeckIcon from "@mui/icons-material/Deck";

function Services() {
  const services = [
    {
      title: "Roofing",
      description: "Shingle, metal, and flat roofing done with precision and durability.",
      icon: <RoofingIcon fontSize="inherit" className="text-blue-600" />,
    },
    {
      title: "Remodeling",
      description: "Interior and exterior remodeling to transform your home.",
      icon: "🏡",
    },
    {
      title: "Gutter Work",
      description: "Installation and repair of gutters and drainage systems.",
      icon: "💧",
    },
    {
      title: "Decks & Additions",
      description: "Custom decks, porches, and home additions built to last.",
      icon: <DeckIcon fontSize="inherit" className="text-blue-600" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Our Roofing & Remodeling Services
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">
                {typeof service.icon === "string" ? (
                  service.icon
                ) : (
                  <span className="inline-block">{service.icon}</span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">
            Need expert help with your next project?
          </h3>
          <p className="text-gray-600">
            Get a free estimate today and see why homeowners trust us.
          </p>
          <CTAButton
            text="Request a Free Estimate"
            href="/contact"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;