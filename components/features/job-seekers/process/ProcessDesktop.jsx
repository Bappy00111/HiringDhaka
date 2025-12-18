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

export default function ProcessDesktop() {
  return (
    <ol className="hidden sm:block relative border-l-4 border-hd-red ml-6">
      {steps.map((item) => (
        <li key={item.step} className="mb-10 ml-6 relative">
          <span className="absolute -left-11 flex items-center justify-center w-10 h-10 bg-hd-navy rounded-full text-white text-lg font-bold border-4 border-white">
            {item.step}
          </span>

          <h3 className="text-xl font-bold text-hd-navy mb-1">
            {item.title}
          </h3>
          <p className="text-gray-600 max-w-md">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
