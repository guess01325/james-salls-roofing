import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Sarah M.",
    quote:
      "James and his crew did an incredible job on our new roof. Punctual, professional, and very thorough.",
  },
  {
    name: "Daniel T.",
    quote:
      "We had our deck remodeled and it looks amazing. Highly recommend James Salls for any home improvements!",
  },
  {
    name: "Emily R.",
    quote:
      "The team was honest, fast, and affordable. We’ll be calling James again for our bathroom renovation.",
  },
];

function TestimonialsSection() {
  return (
    <div className="relative bg-gray-900 text-white py-20 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              quote={testimonial.quote}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
