// "use client"

// import Button from "@/components/ui/Button"

// export default function JobFilters() {
//   return (
//     <aside className="lg:w-1/4 w-full lg:sticky lg:top-28 bg-white rounded-xl shadow p-4 h-fit">
//       <form className="flex flex-col gap-4">
//         <div>
//           <label className="block text-sm font-semibold text-hd-navy mb-2">
//             Search Jobs
//           </label>
//           <input
//             placeholder="Search jobs..."
//             className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-hd-navy"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-hd-navy mb-2">
//             Category
//           </label>
//           <select className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm">
//             <option>All Categories</option>
//             <option>Full-Time</option>
//             <option>Contractual</option>
//             <option>Part-Time</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-hd-navy mb-2">
//             Type
//           </label>
//           <select className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm">
//             <option>All Types</option>
//             <option>Remote</option>
//             <option>Hybrid</option>
//             <option>On-Site</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-semibold text-hd-navy mb-2">
//             Sort By
//           </label>
//           <select className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm">
//             <option>Default</option>
//             <option>Salary (High → Low)</option>
//             <option>Salary (Low → High)</option>
//             <option>Titel(A-Z)</option>
//             <option>Titel(Z-A)</option>
//           </select>
//         </div>

//         <div className="flex gap-2">
//           <Button variant="primary" className="w-full">
//             Apply Filters
//           </Button>

//           <Button variant="secondary"  className="w-full">
//             Reset
//           </Button>
//         </div>
//       </form>
//     </aside>
//   )
// }


// "use client"

// import { useState } from "react"
// import Button from "@/components/ui/Button"

// export default function JobFilters({ filters, setFilters }) {
//   // 🔹 local state (UI same থাকবে)
//   const [localFilters, setLocalFilters] = useState(filters)

//   const handleApply = (e) => {
//     e.preventDefault()
//     setFilters(localFilters)
//   }

//   const handleReset = () => {
//     const resetFilters = {
//       search: "",
//       category: "All Categories",
//       type: "All Types",
//       sort: "Default",
//     }

//     setLocalFilters(resetFilters)
//     setFilters(resetFilters)
//   }

//   return (
//     <aside className="lg:w-1/4 w-full lg:sticky lg:top-28 bg-white rounded-xl shadow p-4 h-fit">
//       <form className="flex flex-col gap-4" onSubmit={handleApply}>
//         {/* Search */}
//         <div>
//           <label className="block text-sm font-semibold text-hd-navy mb-2">
//             Search Jobs
//           </label>
//           <input
//             placeholder="Search jobs..."
//             value={localFilters.search}
//             onChange={(e) =>
//               setLocalFilters({ ...localFilters, search: e.target.value })
//             }
//             className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-hd-navy"
//           />
//         </div>

//         {/* Category */}
//         <div>
//           <label className="block text-sm font-semibold text-hd-navy mb-2">
//             Category
//           </label>
//           <select
//             value={localFilters.category}
//             onChange={(e) =>
//               setLocalFilters({ ...localFilters, category: e.target.value })
//             }
//             className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
//           >
//             <option>All Categories</option>
//             <option>Full-Time</option>
//             <option>Contractual</option>
//             <option>Part-Time</option>
//           </select>
//         </div>

//         {/* Type */}
//         <div>
//           <label className="block text-sm font-semibold text-hd-navy mb-2">
//             Type
//           </label>
//           <select
//             value={localFilters.type}
//             onChange={(e) =>
//               setLocalFilters({ ...localFilters, type: e.target.value })
//             }
//             className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
//           >
//             <option>All Types</option>
//             <option>Remote</option>
//             <option>Hybrid</option>
//             <option>On-Site</option>
//           </select>
//         </div>

//         {/* Sort */}
//         <div>
//           <label className="block text-sm font-semibold text-hd-navy mb-2">
//             Sort By
//           </label>
//           <select
//             value={localFilters.sort}
//             onChange={(e) =>
//               setLocalFilters({ ...localFilters, sort: e.target.value })
//             }
//             className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
//           >
//             <option>Default</option>
//             <option>Salary (High → Low)</option>
//             <option>Salary (Low → High)</option>
//             <option>Titel(A-Z)</option>
//             <option>Titel(Z-A)</option>
//           </select>
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-2">
//           <Button variant="primary" className="w-full" type="submit">
//             Apply Filters
//           </Button>

//           <Button
//             variant="secondary"
//             className="w-full"
//             type="button"
//             onClick={handleReset}
//           >
//             Reset
//           </Button>
//         </div>
//       </form>
//     </aside>
//   )
// }

"use client"

import { useEffect, useState } from "react"
import Button from "@/components/ui/Button"

export default function JobFilters({
  filters,
  setFilters,
  onDone,
  containerClassName = "",
}) {
  const [localFilters, setLocalFilters] = useState(filters)

  useEffect(() => {
    setLocalFilters(filters)
  }, [filters])

  const handleApply = (e) => {
    e.preventDefault()
    setFilters(localFilters)
    onDone?.()
  }

  const handleReset = () => {
    const resetFilters = {
      search: "",
      category: "All Categories",
      type: "All Types",
      sort: "Default",
    }
    setLocalFilters(resetFilters)
    setFilters(resetFilters)
  }

  return (
    <aside
      className={`lg:w-1/4 w-full lg:sticky lg:top-28 bg-white rounded-xl shadow p-4 h-fit ${containerClassName}`}
    >
      <form className="flex flex-col gap-4" onSubmit={handleApply}>
        {/* Search */}
        <div>
          <label className="block text-sm font-semibold text-hd-navy mb-2">
            Search Jobs
          </label>
          <input
            placeholder="Search jobs..."
            value={localFilters.search}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, search: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-hd-navy"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-hd-navy mb-2">
            Category
          </label>
          <select
            value={localFilters.category}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, category: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
          >
            <option>All Categories</option>
            <option>Full-Time</option>
            <option>Contractual</option>
            <option>Part-Time</option>
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-semibold text-hd-navy mb-2">
            Type
          </label>
          <select
            value={localFilters.type}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, type: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
          >
            <option>All Types</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>On-Site</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-sm font-semibold text-hd-navy mb-2">
            Sort By
          </label>
          <select
            value={localFilters.sort}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, sort: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm"
          >
            <option>Default</option>
            <option>Salary (High → Low)</option>
            <option>Salary (Low → High)</option>
            <option>Titel(A-Z)</option>
            <option>Titel(Z-A)</option>
          </select>
        </div>

        <div className="flex gap-2">
          <Button variant="primary" className="w-full" type="submit">
            Apply Filters
          </Button>

          <Button
            variant="secondary"
            className="w-full"
            type="button"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </form>
    </aside>
  )
}



