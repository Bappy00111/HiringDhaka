export default function JobFilterSidebar() {
  return (
    <aside className="lg:w-1/4 bg-white rounded-xl shadow p-4 h-fit sticky top-24">
      <form className="space-y-4">
        <Input label="Search Jobs" placeholder="Search jobs..." />
        <Select label="Category" options={["All", "Full-Time", "Part-Time"]} />
        <Select label="Type" options={["All", "Remote", "Hybrid", "On-Site"]} />

        <button className="w-full bg-hd-navy text-white py-2 rounded-lg font-semibold hover:bg-hd-red">
          Apply Filters
        </button>
      </form>
    </aside>
  );
}

/* --- Small UI helpers --- */

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <input
        {...props}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-hd-navy"
      />
    </div>
  );
}

function Select({ label, options }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <select className="w-full border rounded-lg px-3 py-2">
        {options.map((o: string) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
