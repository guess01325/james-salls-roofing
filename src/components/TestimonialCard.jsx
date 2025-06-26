import React from "react";

function TestimonialCard({ quote, name }) {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-2xl shadow-lg backdrop-blur-sm">
      <p className="text-lg italic mb-4">"{quote}"</p>
      <p className="text-sm font-semibold">{name}</p>
    </div>
  );
}

export default TestimonialCard;
