// components/features/recruitment-process/ProcessStep.jsx

import IconMapper from "@/components/ui/IconMapper";

export default function ProcessStep({ step }) {
  const isLeft = step.direction === "left";

  return (
    <div
      className={`md:flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } animate-fadeIn`}
      style={{ animationDelay: step.delay, animationFillMode: "backwards" }}
    >
      {/* Content */}
      <div
        className={`md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pl-16"
          }`}
      >
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 border-2 border-gray-300">
          <h3 className="text-base sm:text-lg font-bold text-hd-navy mb-2 title-text">
            {step.title}
          </h3>
          <p className="text-gray-600 text-sm">{step.description}</p>
        </div>
      </div>

      {/* Icon */}
      {/* Icon */}
      <div className="flex justify-center my-6 md:my-0 relative z-10">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border-8 border-[#DD4B4B] shadow-lg">
          <IconMapper
            name={step.icon}
            className="h-6 w-6 text-hd-navy"
          />
          <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white text-hd-red flex items-center justify-center font-bold border-2 border-[#DD4B4B] btn-text">
            {step.id}
          </span>
        </div>
      </div>


      <div className="md:w-1/2" />
    </div>
  );
}
