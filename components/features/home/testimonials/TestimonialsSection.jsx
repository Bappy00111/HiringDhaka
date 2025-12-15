// src/components/features/testimonials/TestimonialsSection.jsx
"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaUsers } from "react-icons/fa";
import { TESTIMONIALS } from "@/data/testimonials/testimonials.data";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );

  const nextSlide = () =>
    setCurrent((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-[#002147] w-full"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-12 sm:mb-16 text-center">
          What Our Clients Say
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Left */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/10 rounded-full p-3 border border-white/20 text-white hover:bg-hd-red transition z-10"
          >
            <FaChevronLeft />
          </button>

          <TestimonialCard testimonial={TESTIMONIALS[current]} />

          {/* Right */}
          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/10 rounded-full p-3 border border-white/20 text-white hover:bg-hd-red transition z-10"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="flex sm:hidden justify-center mt-6 gap-4">
          <button
            onClick={prevSlide}
            className="bg-white/10 rounded-full p-3 text-white hover:bg-hd-red"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/10 rounded-full p-3 text-white hover:bg-hd-red"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 sm:mt-12 gap-3">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 transition-all ${
                current === index
                  ? "bg-[#DD4B4B] border-[#DD4B4B]"
                  : "bg-white/30 border-white"
              }`}
            />
          ))}
        </div>

        {/* Client Count */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-flex items-center bg-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
            <FaUsers className="text-white mr-2 sm:mr-3" />
            <span className="text-white font-medium text-sm sm:text-base">
              Trusted by 20+ companies across the world
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
