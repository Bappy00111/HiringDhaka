import JobFilterSidebar from "./JobFilterSidebar";
import JobList from "./JobList";

export default function JobLayout() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-hd-navy">Opportunities</h2>
      <p className="text-gray-500 mb-6">
        Find a meaningful job to match your skills and aspirations
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        <JobFilterSidebar />
        <JobList />
      </div>
    </section>
  );
}
