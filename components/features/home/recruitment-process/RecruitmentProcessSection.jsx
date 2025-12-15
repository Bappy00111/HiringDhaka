// components/features/recruitment-process/RecruitmentProcessSection.jsx

import SectionHeader from "./SectionHeader";
import ProcessStep from "./ProcessStep";
import { RECRUITMENT_PROCESS_STEPS } from "@/data/recruitment-process/process.data";

export default function RecruitmentProcessSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />

        <div className="relative">

  {/* ✅ Vertical Line */}
  <div
    className="
      hidden md:block
      absolute
      left-1/2
      top-0
      bottom-0
      w-[3px]
      bg-[#DD4B4B]/40
      -translate-x-1/2
      rounded-full
      z-0
    "
  />

  {/* Steps */}
  <div className="relative space-y-8 sm:space-y-12 md:space-y-0 z-10">
    {RECRUITMENT_PROCESS_STEPS.map((step) => (
      <ProcessStep key={step.id} step={step} />
    ))}
  </div>

</div>


        {/* CTA */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="/build-your-team/"
            className="btn-bg hover:bg-[#002147] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg transition-colors shadow-xl font-bold text-base sm:text-lg tracking-wide"
          >
            Start Hiring Now
          </a>
        </div>
      </div>
    </section>
  );
}
