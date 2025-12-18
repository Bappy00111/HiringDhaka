import { servicesData } from "@/data/services/servicesData";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-[#0A2342]">Our Services</h2>
        <div className="w-20 h-1 bg-red-500 mx-auto mt-3"></div>
        <p className="mt-4 text-gray-600 text-lg">
          Comprehensive solutions for all your business needs
        </p>
      </div>

      {/* ONLY mapping — no UI here! */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            items={service.items}
          />
        ))}
      </div>
    </section>
  );
}
