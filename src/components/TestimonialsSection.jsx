import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Catherine L.",
    quote:
      "Thursday we had our roof redone and I want to give 💯 to my neighbor's company! From the quote to the finished job James was professional and friendly. Wonderful Job and even better service.",
  },
  {
 
  name: "Otto’s Barber On Bank.",
  quote: "Who’s got a pretty new green lid? \nWE DO!!!! 💚💛💚💛",
},

  {
    name: "William N.",
    quote:
      "James Salls Roofing &Remodeling The best in the business Highly Recommended.",
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
