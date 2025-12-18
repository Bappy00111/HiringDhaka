// import { jobs } from "@/data/job-seekers/jobs"
// import JobCard from "./JobCard"

// export default function JobList() {
//   return (
//     <div className="lg:w-3/4 w-full space-y-4">
//       {jobs?.map((job,i) => (
//         <JobCard key={i} job={job} />
//       ))}
//     </div>
//   )
// }

import { FaSearch } from "react-icons/fa"
import JobCard from "./JobCard"

export default function JobList({ jobs }) {
  if (!jobs.length) {
    return (
      <div className="
        lg:w-3/4 w-full
        flex flex-col items-center justify-center
        rounded-2xl bg-white shadow
        py-20 px-6 text-center
      ">
        {/* Icon */}
        <div className="
          mb-6 flex h-16 w-16 items-center justify-center
          rounded-full bg-gray-100 text-gray-400
        ">
          <FaSearch className="text-2xl" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          No jobs found
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 max-w-md">
          Try adjusting your search criteria or check back later
          for new opportunities.
        </p>
      </div>
    )
  }

  return (
    <div className="lg:w-3/4 w-full space-y-4">
      {jobs.map((job, i) => (
        <JobCard key={i} job={job} />
      ))}
    </div>
  )
}

