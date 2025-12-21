import Hero from '@/components/features/home/Hero'
import RecruitmentProcessSection from '@/components/features/home/recruitment-process/RecruitmentProcessSection'
import FeaturesSection from '@/components/features/home/sections/FeaturesSection'
import TestimonialsSection from '@/components/features/home/testimonials/TestimonialsSection'


export default function Home() {
  return (
    <div className="">
      <Hero />
      <FeaturesSection />
      <RecruitmentProcessSection />
      <TestimonialsSection />
    </div>
  )
}
