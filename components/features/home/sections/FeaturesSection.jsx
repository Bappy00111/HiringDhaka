// src/components/sections/FeaturesSection.jsx

import { FEATURES_DATA } from "@/data/features/features.data";
import { FEATURES_STATS } from "@/data/features/stats.data";
import SectionHeader from "./SectionHeader";
import FeatureCard from "./FeatureCard";
import StatsGrid from "./StatsGrid";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 lg:py-24  w-full  bg-[#002147]"
    >
      <div className=" px-4 sm:px-6 lg:px-8 ">

        {/* Header */}
        <SectionHeader />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Stats */}
        <StatsGrid />
      </div>
    </section>
  );
}
