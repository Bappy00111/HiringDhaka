// src/components/features/testimonials/TestimonialCard.jsx

import { FaStar, FaBuilding } from "react-icons/fa";

export default function TestimonialCard({ testimonial }) {
  const initial = testimonial.author.charAt(0);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 mx-4 sm:mx-8 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-hd-red/5 to-hd-navy/5 rounded-full translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16" />
      <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tr from-hd-navy/5 to-hd-red/5 rounded-full -translate-x-10 sm:-translate-x-12 translate-y-10 sm:translate-y-12" />

      {/* Stars */}
      <div className="flex justify-center mb-4 sm:mb-6 text-yellow-400">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Content */}
      <div className="text-center mb-6 sm:mb-8">
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed font-medium italic ">
          {testimonial.content}
        </p>
      </div>

      {/* Author */}
      <div className="text-center  border-t border-gray-100 pt-4 sm:pt-6">
        <div className="flex flex-col sm:flex-row items-center justify-center md:text-left mb-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-400 to-black rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
            <span className="text-white font-bold text-lg sm:text-xl">
              {initial}
            </span>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-hd-navy  title-text">
              {testimonial.author}
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              {testimonial.position}
            </p>
          </div>
        </div>


        {/* Company */}
        <div className="inline-flex items-center bg-gradient-to-r from-hd-navy/5 to-hd-red/5 rounded-full px-4 py-2 border border-hd-red/20 ">
          <FaBuilding className="text-hd-red mr-2" />
          <span className="text-hd-navy font-medium text-sm">
            {testimonial.company}
          </span>
        </div>
      </div>
    </div>
  );
}
