import React from "react";
import { Helmet } from "react-helmet";
import CTAButton from "../components/CTAButton";

const About = () => {
  return (
    <div className="px-4 py-16 max-w-5xl mx-auto space-y-12">
      <Helmet>
        <title>About James Salls Roofing | Trusted Craftsmanship in MA</title>
        <meta
          name="description"
          content="Learn about our mission, values, and commitment to high-quality roofing and remodeling work."
        />
      </Helmet>

      {/* Headline + Mission */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About James Salls Roofing & Remodeling</h1>
        <h2 className="text-4xl font-bold">Reliable. Skilled. Local.</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At James Salls Roofing & Remodeling, we’ve built a reputation for quality craftsmanship,
          honest pricing, and personalized service throughout Connecticut and surrounding areas.
        </p>
      </div>

      {/* Background Story */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">Our Story</h3>
        <p className="text-gray-700 leading-relaxed">
          With over 20 years of hands-on experience, James and his team have helped homeowners with everything
          from full roof replacements to complete home remodels. What began as a small word-of-mouth business
          has grown into a trusted local name known for hard work, clear communication, and lasting results.
        </p>
      </div>

      {/* What Sets Us Apart */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Why Homeowners Choose Us</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          <li>Family-owned and operated</li>
          <li>Fully licensed and insured</li>
          <li>Specializing in both roofing and remodeling</li>
          <li>Customer-first approach with honest quotes</li>
        </ul>
      </div>

      {/* Optional Team Photo or Message */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center space-y-3">
        <p className="italic text-lg max-w-xl mx-auto">
          “Hi, I’m James – I started this company to bring integrity and transparency back to home improvement.”
        </p>
        <p className="font-semibold">— James Salls, Owner</p>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <CTAButton
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Get a Free Quote
        </CTAButton>
      </div>
    </div>
  );
};

export default About;