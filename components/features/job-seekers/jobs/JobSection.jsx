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

// "use client"

// import { useState } from "react"
// import JobFilters from "./JobFilter"
// import JobList from "./JobList"
// import { jobs } from "@/data/job-seekers/jobs"

// export default function JobsPage() {
//   const [filters, setFilters] = useState({
//     search: "",
//     category: "All Categories",
//     type: "All Types",
//     sort: "Default",
//   })

//   // 🔥 Filter Logic
//   const filteredJobs = jobs
//     .filter(job => {
//       const matchSearch =
//         filters.search === "" ||
//         job.title.toLowerCase().includes(filters.search.toLowerCase())

//       const matchCategory =
//         filters.category === "All Categories" ||
//         job.type === filters.category

//       const matchType =
//         filters.type === "All Types" ||
//         job.location === filters.type

//       return matchSearch && matchCategory && matchType
//     })
//     .sort((a, b) => {
//       if (filters.sort === "Salary (High → Low)") {
//         return b.salary - a.salary
//       }
//       if (filters.sort === "Salary (Low → High)") {
//         return a.salary - b.salary
//       }
//       if (filters.sort === "Titel(A-Z)") {
//         return a.title.localeCompare(b.title)
//       }
//       if (filters.sort === "Titel(Z-A)") {
//         return b.title.localeCompare(a.title)
//       }
//       return 0
//     })

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-6">
//       <h2 className="text-2xl font-bold text-hd-navy mb-2">
//         Opportunities
//       </h2>
//       <p className="text-gray-500 mb-4">
//         Find a meaningful job to match your skills, aspirations and values
//       </p>

//       <div className="flex flex-col lg:flex-row gap-8">
//         <JobFilters filters={filters} setFilters={setFilters} />
//         <JobList jobs={filteredJobs} />
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

  const [mobileOpen, setMobileOpen] = useState(false)

  const filteredJobs = jobs
    .filter((job) => {
      const matchSearch =
        filters.search === "" ||
        job.title.toLowerCase().includes(filters.search.toLowerCase())

      const matchCategory =
        filters.category === "All Categories" || job.type === filters.category

      const matchType =
        filters.type === "All Types" || job.location === filters.type

      return matchSearch && matchCategory && matchType
    })
    .sort((a, b) => {
      if (filters.sort === "Salary (High → Low)") return b.salary - a.salary
      if (filters.sort === "Salary (Low → High)") return a.salary - b.salary
      if (filters.sort === "Titel(A-Z)") return a.title.localeCompare(b.title)
      if (filters.sort === "Titel(Z-A)") return b.title.localeCompare(a.title)
      return 0
    })

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-hd-navy mb-2">Opportunities</h2>
      <p className="text-gray-500 mb-4">
        Find a meaningful job to match your skills, aspirations and values
      </p>

      {/* ✅ Mobile (<md): Filters bar + dropdown */}
      <div className="md:hidden mb-10">
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="w-full flex items-center justify-center gap-2 btn-bg hover:bg-red-600 text-white font-semibold py-3 rounded-xl shadow"
          aria-expanded={mobileOpen}
        >
          {/* funnel icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 5h18l-7 8v5l-4 2v-7L3 5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>

          <span>Filters &amp; Search</span>

          {/* chevron up/down */}
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 15l6-6 6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {mobileOpen && (
          <div className="mt-3">
            <JobFilters
              filters={filters}
              setFilters={setFilters}
              onDone={() => setMobileOpen(false)} // Apply দিলে auto close (চাইলে এটা বাদ দিতে পারেন)
            />
          </div>
        )}
      </div>

      {/* ✅ md এবং lg: আগের মতো layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* desktop/tablet filters (mobile এ hidden) */}
        <JobFilters
          filters={filters}
          setFilters={setFilters}
          containerClassName="hidden md:block"
        />

        <JobList jobs={filteredJobs} />
      </div>
    </section>
  )
}



