import Badge from "@/components/ui/Badge";
import SkillTag from "@/components/ui/SkillTag";


export default function JobCardMobile({ job }) {
  return (
    <div className="sm:hidden p-4">
      <h3 className="font-bold text-lg mb-2">{job.title}</h3>

      <div className="flex gap-2 mb-3">
        <Badge text={job.type} />
        <Badge text={job.location} variant="green" />
      </div>

      <p className="text-hd-red font-bold mb-3">{job.salary}</p>

      <div className="flex flex-wrap gap-1 mb-4">
        {job.skills.map(skill => (
          <SkillTag key={skill} text={skill} />
        ))}
      </div>

      <button className="w-full bg-hd-navy text-white py-2 rounded-lg">
        View Details
      </button>
    </div>
  );
}
