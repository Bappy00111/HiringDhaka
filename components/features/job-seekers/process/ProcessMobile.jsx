const steps = [
  {
    step: 1,
    title: "Application",
    description: "Click the Apply Now button and complete the application form.",
  },
  {
    step: 2,
    title: "Screening",
    description: "Our team will carefully review your profile and qualifications.",
  },
  {
    step: 3,
    title: "Interview",
    description: "Discuss your experience and skills with our hiring team.",
  },
  {
    step: 4,
    title: "Offer",
    description: "Receive and review your official job offer.",
  },
  {
    step: 5,
    title: "Onboarding",
    description: "Join the team and start your new journey.",
  },
];

export default function ProcessMobile() {
  return (
    <div className="block sm:hidden space-y-4">
      {steps.map((item) => (
        <div
          key={item.step}
          className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-hd-navy rounded-full text-white text-lg font-bold flex items-center justify-center">
              {item.step}
            </div>
            <h3 className="text-lg font-bold text-hd-navy">
              {item.title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
