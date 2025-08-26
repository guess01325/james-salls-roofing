import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jy3dnij",
        "template_l94ke9q",
        form.current,
        "3PRdcSQolp0dgo-uQ"
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-white py-16 px-4" id="contact">
      <div className="max-w-3xl mx-auto">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <motion.button
  type="submit"   // <-- key difference
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition-colors"
>
  Send Message
</motion.button>
        </form>
        {sent && (
          <p className="text-green-600 mt-4 text-center">
            ✅ Your message has been sent!
          </p>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
