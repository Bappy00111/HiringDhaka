export default function HiringTimeline() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <ol className="relative border-l-4 border-[#DD4B4B] ml-6 space-y-12">

        {/* Item 1 */}
        <li className="ml-10 relative">
          <span className="absolute -left-[4.25rem] top-0 w-12 h-12 bg-[#0B2545] text-white rounded-full flex items-center justify-center text-lg font-bold">
            1
          </span>
          <h3 className="text-xl font-bold text-[#0B2545] mb-1">
            Application
          </h3>
          <p className="text-gray-600">
            Click the <strong>Apply Now</strong> and complete the application form.
          </p>
        </li>

        {/* Item 2 */}
        <li className="ml-10 relative">
          <span className="absolute -left-[4.25rem] top-0 w-12 h-12 bg-[#0B2545] text-white rounded-full flex items-center justify-center text-lg font-bold">
            2
          </span>
          <h3 className="text-xl font-bold text-[#0B2545] mb-1">
            Screening
          </h3>
          <p className="text-gray-600">
            Our team will carefully review your profile and qualifications.
          </p>
        </li>

        {/* Item 3 */}
        <li className="ml-10 relative">
          <span className="absolute -left-[4.25rem] top-0 w-12 h-12 bg-[#0B2545] text-white rounded-full flex items-center justify-center text-lg font-bold">
            3
          </span>
          <h3 className="text-xl font-bold text-[#0B2545] mb-1">
            Interview
          </h3>
          <p className="text-gray-600">
            Engage in interviews with members of our team to discuss your experience and fit.
          </p>
        </li>

        {/* Item 4 */}
        <li className="ml-10 relative">
          <span className="absolute -left-[4.25rem] top-0 w-12 h-12 bg-[#0B2545] text-white rounded-full flex items-center justify-center text-lg font-bold">
            4
          </span>
          <h3 className="text-xl font-bold text-[#0B2545] mb-1">
            Offer
          </h3>
          <p className="text-gray-600">
            Receive and evaluate your official job offer.
          </p>
        </li>

        {/* Item 5 */}
        <li className="ml-10 relative">
          <span className="absolute -left-[4.25rem] top-0 w-12 h-12 bg-[#0B2545] text-white rounded-full flex items-center justify-center text-lg font-bold">
            5
          </span>
          <h3 className="text-xl font-bold text-[#0B2545] mb-1">
            Onboarding
          </h3>
          <p className="text-gray-600">
            Step into your new role with the team you've chosen.
          </p>
        </li>

      </ol>
    </section>
  );
}
