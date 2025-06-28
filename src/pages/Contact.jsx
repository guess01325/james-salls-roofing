import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";
import CTAButton from "../components/CTAButton";

function Contact() {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Contact Us | Free Roofing & Remodeling Quotes | James Salls</title>
        <meta
          name="description"
          content="Get in touch with James Salls Roofing for a free quote or consultation on your next project."
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Contact Us
      </h1>

      {/* Phone section above the form */}
      <p className="text-lg text-center text-gray-700 mb-6">
        Prefer to talk directly? Call us at{" "}
        <a href="tel:8602350361" className="text-blue-600 hover:underline">
          (860) 235-0361
        </a>
      </p>

      <ContactForm />
    </div>
  );
}

export default Contact;