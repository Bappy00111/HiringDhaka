// components/features/features-section/FeatureCard.jsx

import IconMapper from "@/components/ui/IconMapper";

export default function FeatureCard({ feature }) {
  const { title, description, icon, animationDelay } = feature;

  return (
    <div
      className="bg-white rounded-xl p-5 sm:p-6 shadow-lg transition-transform duration-300 hover:scale-105 border-2 border-hd-navy/10 animate-fadeIn"
      style={{ animationDelay }}
    >
      <div className="bg-hd-red/10 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto bg-[#efe9e9]">
        <IconMapper
           name={feature.icon}
          className="text-2xl sm:text-3xl text-[#dd4b4b]"
        />
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-hd-navy mb-2 text-center text-[#002147]">
        {title}
      </h3>

      <p className="text-gray-600 text-sm text-center">
        {description}
      </p>
    </div>
  );
}
