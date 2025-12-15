// components/features/features-section/StatsGrid.jsx

import IconMapper from "@/components/ui/IconMapper";
import { FEATURES_STATS } from "@/data/features/stats.data";


export default function StatsGrid() {
  return (
    <div className="mt-12 sm:mt-16 bg-white rounded-2xl overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-gray-300 md:divide-y-0 md:divide-x divide-hd-navy/10">
        {FEATURES_STATS.map((stat) => (
          <div key={stat.id} className="p-6 sm:p-8 text-center">
            <div className="inline-block p-3 sm:p-4 rounded-full bg-gray-200 text-hd-navy mb-3 sm:mb-4">
              <IconMapper
                name={stat.icon}
                className="text-2xl sm:text-3xl text-[#002147]"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-hd-navy mb-2 text-[#002147]">
              {stat.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
