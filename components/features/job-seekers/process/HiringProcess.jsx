import HiringTimeline from "./HiringTimeline";

export default function HiringProcess() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-hd-navy text-center">
        Our Hiring Process
      </h2>

      <HiringTimeline />
    </section>
  );
}
