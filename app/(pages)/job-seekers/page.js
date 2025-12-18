import HeroSection from "@/components/features/job-seekers/hero/HeroSection";
import JobSection from "@/components/features/job-seekers/jobs/JobSection";
import HiringProcess from "@/components/features/job-seekers/process/HiringProcess";


export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <JobSection />
      <HiringProcess />
    </main>
  );
}
