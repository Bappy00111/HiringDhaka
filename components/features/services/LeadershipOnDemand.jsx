import { FaCrown } from "react-icons/fa";

export default function LeadershipOnDemand() {
  const roles = [
    { title: "CXO", subtitle: "Chief Executive" },
    { title: "CTO", subtitle: "Technology" },
    { title: "CFO", subtitle: "Financial" },
    { title: "CMO", subtitle: "Marketing" },
    { title: "COO", subtitle: "Operations" },
    { title: "CHRO", subtitle: "Human Resources" },
    { title: "CSO", subtitle: "Strategy" },
    { title: "CBO", subtitle: "Business" },
  ];

  return (
    <div className="bg-[#002147] rounded-2xl p-8 md:p-12 text-white mb-16 ">
      <div className="text-center max-w-4xl mx-auto">

        {/* ICON */}
        <div className="w-20 h-20 bg-hd-red rounded-2xl flex items-center justify-center mx-auto mb-6 btn-bg">
          <FaCrown className="text-3xl text-white" />
        </div>

        {/* TITLE */}
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Leadership On Demand
        </h3>

        {/* SUBTITLE */}
        <p className="text-xl text-white/90 mb-6">
          Unlock Elite C-Level Leadership — Only When You Need It!
        </p>

        {/* DESCRIPTION */}
        <p className="text-white/80 mb-10 max-w-3xl mx-auto">
          Why commit full-time when you can lead smart? From CTO to CFO, bring in top-tier executive power on-demand — flexible, cost-effective, and built for growth.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl p-4 border border-white/20"
            >
              <div className="font-bold text-lg">{role.title}</div>
              <div className="text-white/80 text-sm">{role.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
