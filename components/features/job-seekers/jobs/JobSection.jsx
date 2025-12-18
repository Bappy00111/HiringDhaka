// import JobFilters from "./JobFilter";
// import JobList from "./JobList";


// export default function JobsPage() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-6">
//       <h2 className="text-2xl font-bold text-hd-navy mb-2">
//         Opportunities
//       </h2>
//       <p className="text-gray-500 mb-4">
//         Find a meaningful job to match your skills, aspirations and values
//       </p>

//       <div className="flex flex-col lg:flex-row gap-8">
//         <JobFilters />
//         <JobList />
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import JobFilters from "./JobFilter"
import JobList from "./JobList"
import { jobs } from "@/data/job-seekers/jobs"

export default function JobsPage() {
  const [filters, setFilters] = useState({
    search: "",
    category: "All Categories",
    type: "All Types",
    sort: "Default",
  })

  // 🔥 Filter Logic
  const filteredJobs = jobs
    .filter(job => {
      const matchSearch =
        filters.search === "" ||
        job.title.toLowerCase().includes(filters.search.toLowerCase())

      const matchCategory =
        filters.category === "All Categories" ||
        job.type === filters.category

      const matchType =
        filters.type === "All Types" ||
        job.location === filters.type

      return matchSearch && matchCategory && matchType
    })
    .sort((a, b) => {
      if (filters.sort === "Salary (High → Low)") {
        return b.salary - a.salary
      }
      if (filters.sort === "Salary (Low → High)") {
        return a.salary - b.salary
      }
      if (filters.sort === "Titel(A-Z)") {
        return a.title.localeCompare(b.title)
      }
      if (filters.sort === "Titel(Z-A)") {
        return b.title.localeCompare(a.title)
      }
      return 0
    })

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-hd-navy mb-2">
        Opportunities
      </h2>
      <p className="text-gray-500 mb-4">
        Find a meaningful job to match your skills, aspirations and values
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        <JobFilters filters={filters} setFilters={setFilters} />
        <JobList jobs={filteredJobs} />
      </div>
    </section>
  )
}

