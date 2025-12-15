import Hero from '@/components/features/home/Hero'
import RecruitmentProcessSection from '@/components/features/home/recruitment-process/RecruitmentProcessSection'
import FeaturesSection from '@/components/features/home/sections/FeaturesSection'
import TestimonialsSection from '@/components/features/home/testimonials/TestimonialsSection'
import Footer from '@/components/layout/Footer/Footer'

export default function Home() {
  return (
    <div className="app-container">
      <Hero />
      <FeaturesSection />
      <RecruitmentProcessSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
