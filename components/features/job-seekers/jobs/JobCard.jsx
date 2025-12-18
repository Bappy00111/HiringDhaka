// import Badge from "@/components/ui/Badge"
// import Button from "@/components/ui/Button"
// import { FaSearch } from "react-icons/fa"
// import { HiOutlineBuildingOffice } from "react-icons/hi2"
// import { IoCodeSlashOutline } from "react-icons/io5"

// export default function JobCard({ job }) {
//   const { title, type, location, salary, period, skills } = job

//   return (
//     <div
//       className="
//         group
//         flex flex-col lg:flex-row
//         gap-6 rounded-2xl
//         border border-gray-200
//         bg-white p-5 sm:p-6 shadow-sm
//         hover:bg-[#fffaf5]
//         hover:border-[#ee8484]
//         hover:border-b-4
//         transition-all
//       "
//     >
//       {/* LEFT */}
//       <div className="flex gap-4 flex-1">
//         {/* Icon */}
//         <div
//           className="
//             flex h-12 w-12 sm:h-14 sm:w-14
//             items-center justify-center
//             rounded-xl bg-slate-800 text-white shadow
//             transition-all duration-300
//             group-hover:scale-110
//           "
//         >
//           <HiOutlineBuildingOffice className="text-[22px]" />
//         </div>

//         {/* Content */}
//         <div className="flex-1">
//           {/* Title */}
//           <h3
//             className="
//               text-lg sm:text-xl font-bold text-title mb-2
//               transition-colors duration-300
//               group-hover:text-[#DD4B4B]
//             "
//           >
//             {title}
//           </h3>

//           {/* Badges */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             <Badge className="bg-blue-100 text-blue-700 border border-blue-200">
//               {type}
//             </Badge>
//             <Badge className="bg-green-100 text-green-700 border border-green-200">
//               {location}
//             </Badge>
//           </div>

//           {/* Location */}
//           <div className="flex items-start gap-3 mb-4">
//             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
//               <FaSearch className="text-[14px]" />
//             </div>
//             <div>
//               <p className="text-xs font-semibold text-gray-500 uppercase">
//                 Location
//               </p>
//               <p className="text-sm font-medium text-gray-800">
//                 {location}
//               </p>
//             </div>
//           </div>

//           {/* Skills */}
//           <div className="flex items-start gap-3">
//             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
//               <IoCodeSlashOutline className="text-[16px]" />
//             </div>

//             <div className="flex-1">
//               <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
//                 Skills / Tech Stack
//               </p>

//               <div className="flex flex-wrap gap-2">
//                 {skills.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="
//                       rounded-lg bg-gray-100
//                       px-3 py-1 text-xs
//                       text-gray-700 border border-gray-200
//                     "
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div
//         className="
//           flex flex-row lg:flex-col
//           items-center lg:items-end
//           justify-between gap-4
//           lg:min-w-[180px]
//         "
//       >
//         {/* Salary */}
//         <div className="text-left lg:text-right bg-[#fff2e9] lg:bg-transparent p-3 lg:p-0 rounded-xl w-full lg:w-auto">
//           <p className="text-2xl lg:text-3xl font-bold text-red-500">
//             {salary}
//           </p>
//           <p className="text-sm text-gray-500">{period}</p>
//         </div>

//         {/* Button */}
//         <Button
//           variant="vewprimary"
//           className="
//             w-full lg:w-auto
//             px-6 py-3
//             transition-transform duration-300
//             hover:-translate-y-1
//           "
//         >
//           View Details →
//         </Button>
//       </div>
//     </div>
//   )
// }


import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import { FaSearch } from "react-icons/fa"
import { HiOutlineBuildingOffice } from "react-icons/hi2"
import { IoCodeSlashOutline } from "react-icons/io5"

export default function JobCard({ job }) {
  const { title, type, location, salary, period, skills } = job

  return (
    <div
      className="
       group
         flex flex-col lg:flex-row
         gap-6 rounded-2xl
        border border-gray-200
        bg-white p-5 sm:p-6 shadow-sm
         hover:bg-[#fffaf5]
         hover:border-[#ee8484]
         hover:border-b-4
         transition-all
      "
    >
      {/* ===== Mobile Layout ===== */}
      <div className="block md:hidden">
        {/* Header */}
        <div className="flex gap-4 mb-4">
          <div className="
          flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-white
          ">
            <HiOutlineBuildingOffice className="text-[22px]" />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 leading-snug">
              {title}
            </h3>

            <div className="flex gap-2 mt-2">
              <Badge className="bg-blue-100 text-blue-700">{type}</Badge>
              <Badge className="bg-green-100 text-green-700">{location}</Badge>
            </div>
          </div>
        </div>

        {/* Salary */}
        <div className="bg-[#fff6ec] rounded-xl py-4 text-center mb-5">
          <p className="text-2xl font-bold text-red-500">{salary}</p>
          <p className="text-sm text-gray-500">{period}</p>
        </div>

        {/* Location */}
        <div className="flex gap-3 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
            <FaSearch className="text-[14px]" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Location
            </p>
            <p className="text-sm font-medium text-gray-800">{location}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="flex gap-3 mb-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
            <IoCodeSlashOutline className="text-[16px]" />
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
              Skills / Tech Stack
            </p>

            <div className="flex flex-row flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="
                    w-auto
                    rounded-lg bg-gray-100
                    px-2 py-1
                    text-xs text-gray-700
                    border border-gray-200
                  "
                >
                  {skill}
                </div>
              ))}
            </div>

          </div>
        </div>

        <Button variant="vewprimary" className="w-full py-3">
          View Details →
        </Button>
      </div>

      {/* ===== Desktop / md+ Layout ===== */}
      <div className="hidden md:flex gap-6">
        {/* LEFT */}
        <div className="flex gap-4 flex-1">
          <div className="
           flex h-12 w-12 sm:h-14 sm:w-14
             items-center justify-center
             rounded-xl bg-slate-800 text-white shadow
            transition-all duration-300
             group-hover:scale-110
          ">
            <HiOutlineBuildingOffice className="text-[24px]" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-title mb-2 group-hover:text-[#DD4B4B]">
              {title}
            </h3>

            <div className="flex gap-2 mb-4">
              <Badge className="bg-blue-100 text-blue-700">{type}</Badge>
              <Badge className="bg-green-100 text-green-700">{location}</Badge>
            </div>

            <div className="flex gap-3 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                <FaSearch className="text-[14px]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">
                  Location
                </p>
                <p className="text-sm font-medium text-gray-800">{location}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600 ">
                <IoCodeSlashOutline className="text-[16px]" />
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Skills / Tech Stack
                </p>
                <div className="flex flex-wrap  gap-1">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-gray-100 px-3 py-0.5 text-xs text-gray-700 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-end justify-between min-w-[180px]">
          <div className="text-right">
            <p className="text-3xl font-bold text-red-500">{salary}</p>
            <p className="text-sm text-gray-500">{period}</p>
          </div>

          <Button variant="vewprimary" className="
            w-full lg:w-auto
//             px-6 py-3
//             transition-transform duration-300
//             hover:-translate-y-1
          ">
            View Details →
          </Button>
        </div>
      </div>
    </div>
  )
}
