import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";
import CTAButton from "../components/CTAButton";

function Contact() {
  return (

    <div className="pt-20">
      <Helmet>
  <title>Contact Us | Free Roofing & Remodeling Quotes | James Salls</title>
  <meta name="description" content="Get in touch with James Salls Roofing for a free quote or consultation on your next project." />
</Helmet>
  <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
    Contact Us
  </h1>
      <ContactForm />
    </div>
  );
}

export default Contact;
