// components/features/recruitment-process/SectionHeader.jsx

export default function SectionHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
      <span className="text-hd-red font-medium text-sm sm:text-base btn-text">
        Recruitment Process
      </span>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-hd-navy mt-2 mb-3 sm:mb-4 title-text">
        Your path to hiring success
      </h2>

      <div className="w-12 sm:w-16 h-1  rounded-full mx-auto mb-3 sm:mb-4 btn-bg" />

      <p className="text-base sm:text-lg text-hd-navy/80 px-4 text-[#002147cc]">
        A simple, efficient process designed to meet industry needs with clarity
        and ease.
      </p>
    </div>
  );
}
