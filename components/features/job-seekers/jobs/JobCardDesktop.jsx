import Badge from "@/components/ui/Badge";
import SkillTag from "@/components/ui/SkillTag";


export default function JobCardDesktop({ job }) {
  return (
    <div className="hidden sm:block p-5">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{job.title}</h3>

          <div className="flex gap-2 mb-2">
            <Badge text={job.type} />
            <Badge text={job.location} variant="green" />
          </div>

          <div className="flex flex-wrap gap-1">
            {job.skills.map(skill => (
              <SkillTag key={skill} text={skill} />
            ))}
          </div>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-hd-red">{job.salary}</p>
          <button className="mt-3 bg-hd-navy text-white px-4 py-2 rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
