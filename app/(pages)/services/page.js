import ContactSection from '@/components/features/services/ContactSection'
import EventServicesSection from '@/components/features/services/EventServicesSection'
import LeadershipOnDemand from '@/components/features/services/LeadershipOnDemand'
import ServicesSection from '@/components/features/services/ServicesSection'
import React from 'react'

export default function page() {
  return (
    <div className="app-container">
      <div className='md:bg-gray-100 py-10 md:py-20 md:mt-4 md:px-4 md:space-y-14'>
        <ServicesSection />
        <LeadershipOnDemand />
        <EventServicesSection />
      </div>
      <ContactSection />
    </div>
  )
}
