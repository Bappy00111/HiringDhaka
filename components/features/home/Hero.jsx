// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import Marquee from "react-fast-marquee";
// import hero from  '../../../public/home-image/asset 1.jpeg'

// const companies = [
//   { name: "Playense", tag: "Gaming" },
//   { name: "Wind.app", tag: "Fintech" },
//   { name: "Techora", tag: "Technology" },
//   { name: "Learners Heaven", tag: "Education" },
//   { name: "Leading NBFI", tag: "Finance" },
//   { name: "UAE E-commerce", tag: "E-commerce" },
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white pb-12 sm:pb-16 lg:pb-20">
//       <div className=" relative lg:py-4">
//         <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
//           {/* Text */}
//           <div className="order-2 space-y-4 text-center lg:order-1 lg:w-1/2 lg:text-left sm:space-y-6">
//             <h1 className="text-3xl font-bold leading-tight text-slate-900 drop-shadow-lg sm:text-4xl md:text-5xl">
//               <span className="block">Great Teams</span>
//               <span className="block">
//                 Don&apos;t <span className="btn-text">Happen</span>
//               </span>
//               <span className="block">
//                 by <span className="btn-text">Chance</span>
//               </span>
//             </h1>

//             <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-[#DD4B4B] lg:mx-0 sm:mb-4 sm:w-16" />

//             <p className="mx-auto max-w-lg px-4 text-base text-slate-900/80 drop-shadow lg:mx-0 lg:px-0 sm:text-lg">
//               We help you find the right people—skilled, trusted, and ready to
//               make an impact. Skip the chaos. Start hiring with clarity,
//               confidence, and results that matter.
//             </p>

//             <div className="flex flex-col gap-3 px-4 pt-3 sm:flex-row sm:gap-4 sm:pt-4 lg:px-0">
//               <Link
//                 href="/build-your-team"
//                 className="group flex items-center justify-center rounded-md btn-bg px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-slate-900 hover:text-white sm:px-8"
//               >
//                 Hire Top Talent
//                 <svg
//                   className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </Link>

//               <Link
//                 href="/job-seekers"
//                 className="rounded-md border-2 border-slate-900 px-6 py-3 font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white sm:px-8"
//               >
//                 Apply Now
//               </Link>
//             </div>
//           </div>

//           {/* Image/Card */}
//           <div className="order-1 relative mt-8 px-4 lg:order-2 lg:mt-0 lg:w-1/2 lg:px-0">
//             <div className="relative rounded-2xl bg-white p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] sm:p-6">
//               <Image
//                 alt="Professional team meeting"
//                 className="h-auto w-full rounded-xl"
//                 src={hero}
//                 width={1500}
//                 height={1000}
//                 priority
//               />

//               <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-3 shadow-lg sm:-bottom-6 sm:-right-6 sm:p-4">
//                 <div className="flex items-center gap-2">
//                   <div className="flex -space-x-1 sm:-space-x-2">
//                     {[1, 2, 3].map((n) => (
//                       <div
//                         key={n}
//                         className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white sm:h-8 sm:w-8"
//                       >
//                         {n}
//                       </div>
//                     ))}
//                   </div>
//                   <span className="text-xs text-gray-500 sm:text-sm">
//                     200+ hired
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Companies (React Marquee) */}
//         <div className="mt-10 sm:mt-12 ">
//           <div className="mb-6 text-center sm:mb-8">
//             <p className="mb-2 text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
//               Trusted by Leading Companies
//             </p>
//             <div className="mx-auto h-0.5 w-12 bg-[#DD4B4B] sm:w-16" />
//           </div>

//           <div className="relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white/50 py-3 shadow-lg backdrop-blur-sm sm:py-4">
//             {/* fade edges */}
//             <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-white/80 to-transparent sm:w-20" />
//             <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-white/80 to-transparent sm:w-20" />

//             <Marquee speed={40} pauseOnHover gradient={false} className="py-2">
//               {companies.map((c) => (
//                 <div key={c.name} className="group mx-8 cursor-pointer text-center">
//                   <div className="transform text-lg font-bold text-slate-900 transition duration-300 group-hover:scale-110 group-hover:text-rose-500 sm:text-xl lg:text-2xl">
//                     {c.name}
//                   </div>
//                   <div className="mt-1 text-xs text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">
//                     {c.tag}
//                   </div>
//                 </div>
//               ))}
//             </Marquee>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import hero from "../../../public/home-image/asset 1.jpeg";

const companies = [
  { name: "Playense", tag: "Gaming" },
  { name: "Wind.app", tag: "Fintech" },
  { name: "Techora", tag: "Technology" },
  { name: "Learners Heaven", tag: "Education" },
  { name: "Leading NBFI", tag: "Finance" },
  { name: "UAE E-commerce", tag: "E-commerce" },
];

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 3000, // slow animation (3s)
      once: true,
      offset: 0,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  return (
    <section
      className="app-container relative overflow-hidden bg-white pb-12 sm:pb-16 lg:pb-20"
      data-aos="fade-up"
      data-aos-duration="3000"
      data-aos-easing="ease-out-cubic"
    >
      <div className="relative lg:py-4">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {/* Text */}
          <div className="order-2 space-y-4 text-center lg:order-1 lg:w-1/2 lg:text-left sm:space-y-6">
            <h1 className="text-3xl font-bold leading-tight text-slate-900 drop-shadow-lg sm:text-4xl md:text-5xl">
              <span className="block">Great Teams</span>
              <span className="block">
                Don&apos;t <span className="btn-text">Happen</span>
              </span>
              <span className="block">
                by <span className="btn-text">Chance</span>
              </span>
            </h1>

            <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-[#DD4B4B] lg:mx-0 sm:mb-4 sm:w-16" />

            <p className="mx-auto max-w-lg px-4 text-base text-slate-900/80 drop-shadow lg:mx-0 lg:px-0 sm:text-lg">
              We help you find the right people—skilled, trusted, and ready to
              make an impact. Skip the chaos. Start hiring with clarity,
              confidence, and results that matter.
            </p>

            <div className="flex flex-col gap-3 px-4 pt-3 sm:flex-row sm:gap-4 sm:pt-4 lg:px-0">
              <Link
                href="/build-your-team"
                className="group flex items-center justify-center rounded-md btn-bg px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-slate-900 hover:text-white sm:px-8"
              >
                Hire Top Talent
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <Link
                href="/job-seekers"
                className="rounded-md border-2 border-slate-900 px-6 py-3 font-bold text-slate-900 transition-all hover:bg-slate-900 hover:text-white sm:px-8"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Image/Card */}
          <div className="order-1 relative mt-8 px-4 lg:order-2 lg:mt-0 lg:w-1/2 lg:px-0">
            <div className="relative rounded-2xl bg-white p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] sm:p-6">
              <Image
                alt="Professional team meeting"
                className="h-auto w-full rounded-xl"
                src={hero}
                width={1500}
                height={1000}
                priority
              />

              <div className="absolute -bottom-4 -right-4 rounded-xl bg-white p-3 shadow-lg sm:-bottom-6 sm:-right-6 sm:p-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1 sm:-space-x-2">
                    {[1, 2, 3].map((n) => (
                      <div
                        key={n}
                        className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white sm:h-8 sm:w-8"
                      >
                        {n}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 sm:text-sm">
                    200+ hired
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Companies */}
        <div className="mt-10 sm:mt-12">
          <div className="mb-6 text-center sm:mb-8">
            <p className="mb-2 text-xs uppercase tracking-wider text-gray-500 sm:text-sm">
              Trusted by Leading Companies
            </p>
            <div className="mx-auto h-0.5 w-12 bg-[#DD4B4B] sm:w-16" />
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white/50 py-3 shadow-lg backdrop-blur-sm sm:py-4">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-white/80 to-transparent sm:w-20" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-white/80 to-transparent sm:w-20" />

            <Marquee speed={40} pauseOnHover gradient={false} className="py-2">
              {companies.map((c) => (
                <div key={c.name} className="group mx-8 cursor-pointer text-center">
                  <div className="transform text-lg font-bold text-slate-900 transition duration-300 group-hover:scale-110 group-hover:text-rose-500 sm:text-xl lg:text-2xl">
                    {c.name}
                  </div>
                  <div className="mt-1 text-xs text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">
                    {c.tag}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}


