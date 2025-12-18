import IconMapper from "@/components/ui/IconMapper";

export default function ServiceCard({ icon, title, description, items }) {
  return (
    <div className="bg-white shadow-md rounded-xl border border-white p-7 hover:shadow-xl transition">

      {/* Icon */}
      <div className="bg-[#0A2342] text-white w-16 h-16 flex items-center justify-center rounded-lg mb-6">
        <IconMapper name={icon} size={28} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-[#0A2342] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6">{description}</p>

      {/* List Items */}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="btn-text text-xl lg:text-3xl mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
