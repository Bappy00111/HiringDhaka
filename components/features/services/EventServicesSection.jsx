import ServiceCard from "@/components/ui/ServiceCard";
import { eventServices } from "@/data/services/eventServicesData";


export default function EventServicesSection() {
  return (
    <div className="grid lg:grid-cols-3 gap-8 ">
      {eventServices.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          items={service.items}
        />
      ))}
    </div>
  );
}
