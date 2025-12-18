// "use client"

// import { useMemo, useState } from "react"

// const REQUIRED_FIELDS = ["companyName", "fullName", "designation", "email", "phone"]

// export default function BuildYourTeamForm() {
//   const [form, setForm] = useState({
//     companyName: "",
//     fullName: "",
//     designation: "",
//     email: "",
//     countryCode: "+880",
//     phone: "",
//     message: "",
//   })

//   const [errors, setErrors] = useState({})

//   const countries = useMemo(
//     () => [
//       { code: "+880", label: "🇧🇩 +880" },
//       { code: "+91", label: "🇮🇳 +91" },
//       { code: "+1", label: "🇺🇸 +1" },
//       { code: "+44", label: "🇬🇧 +44" },
//     ],
//     []
//   )

//   const onChange = (key) => (e) => {
//     setForm((p) => ({ ...p, [key]: e.target.value }))
//     setErrors((p) => ({ ...p, [key]: "" }))
//   }

//   const validate = () => {
//     const nextErrors = {}

//     REQUIRED_FIELDS.forEach((k) => {
//       if (!String(form[k] ?? "").trim()) nextErrors[k] = "This field is required."
//     })

//     // basic email check
//     if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
//       nextErrors.email = "Please enter a valid email."
//     }

//     // basic phone check (digits only)
//     if (form.phone && !/^[0-9]{6,15}$/.test(form.phone)) {
//       nextErrors.phone = "Please enter a valid phone number."
//     }

//     setErrors(nextErrors)
//     return Object.keys(nextErrors).length === 0
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!validate()) return

//     // ✅ এখানে আপনি API call / server action দিতে পারবেন
//     console.log("Submitted:", form)
//     alert("Form submitted (demo).")
//   }

//   return (
//     <section>
//       {/* Header */}
//       <div className="text-center">
//         <h1 className="text-3xl sm:text-[30px] font-bold text-slate-900 tracking-tight">
//           Build Your Team
//         </h1>

//         <p className="mt-2 text-sm sm:text-base text-[#002147cc]0">
//           Share Your Requirements
//         </p>

//         <div className="mx-auto mt-3 h-1 w-20 rounded-full btn-bg" />

//         <p className="mt-6 text-slate-600 leading-relaxed">
//           Fill up the form, share your requirements,
//           <br className="hidden sm:block" />
//           and we will get in touch soon.
//         </p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="mt-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
//           {/* Company Name */}
//           <Field
//             label="Company Name"
//             required
//             error={errors.companyName}
//           >
//             <Input
//               value={form.companyName}
//               onChange={onChange("companyName")}
//               placeholder=""
//               autoComplete="organization"
//             />
//           </Field>

//           {/* Full Name */}
//           <Field
//             label="Full Name"
//             required
//             error={errors.fullName}
//           >
//             <Input
//               value={form.fullName}
//               onChange={onChange("fullName")}
//               placeholder=""
//               autoComplete="name"
//             />
//           </Field>

//           {/* Designation */}
//           <Field
//             label="Designation"
//             required
//             error={errors.designation}
//           >
//             <Input
//               value={form.designation}
//               onChange={onChange("designation")}
//               placeholder=""
//               autoComplete="organization-title"
//             />
//           </Field>

//           {/* Email */}
//           <Field
//             label="Email Address"
//             required
//             error={errors.email}
//           >
//             <Input
//               value={form.email}
//               onChange={onChange("email")}
//               placeholder=""
//               autoComplete="email"
//               inputMode="email"
//             />
//           </Field>

//           {/* Phone (left column on md) */}
//           <div className="md:col-span-1">
//             <Field label="Phone Number" required error={errors.phone}>
//               <div className="flex w-full overflow-hidden rounded-lg border border-slate-300 bg-white focus-within:ring-1  focus:border-black">
//                 <div className="flex items-center gap-2 bg-slate-100 px-3">
//                   <select
//                     value={form.countryCode}
//                     onChange={onChange("countryCode")}
//                     className="bg-transparent text-sm font-medium text-slate-800 outline-none"
//                     aria-label="Country code"
//                   >
//                     {countries.map((c) => (
//                       <option key={c.code} value={c.code}>
//                         {c.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <input
//                   value={form.phone}
//                   onChange={onChange("phone")}
//                   placeholder="1812-345678"
//                   className="w-full px-4 py-3 text-sm outline-none"
//                   inputMode="numeric"
//                   autoComplete="tel"
//                 />
//               </div>
//             </Field>
//           </div>

//           {/* empty right column (to match screenshot spacing on md) */}
//           <div className="hidden md:block" />

//           {/* Message */}
//           <div className="md:col-span-2">
//             <Field label="Message (Optional)" error={errors.message}>
//               <textarea
//                 value={form.message}
//                 onChange={onChange("message")}
//                 placeholder="Message (Optional)"
//                 rows={4}
//                 className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus-within:ring-1  focus:border-black"
//               />
//             </Field>
//           </div>

//           {/* Submit */}
//           <div className="md:col-span-2 pt-2">
//             <button
//               type="submit"
//               className="w-full rounded-lg font-bold bg-[#002147] py-4 text-white  shadow hover:bg-[#DD4B4B] active:scale-[0.99] transition cursor-pointer"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </section>
//   )
// }

// /* ---------- Small UI helpers ---------- */

// function Field({ label, required, error, children }) {
//   return (
//     <div>
//       <label className="block text-sm lg:text-base font-semibold text-[#002147] pb-1">
//         {label} {required ? <span className="text-red-500">*</span> : null}
//       </label>

//       {children}

//       {error ? (
//         <p className="mt-2 text-xs font-medium text-red-600">{error}</p>
//       ) : null}
//     </div>
//   )
// }

// function Input(props) {
//   return (
//     <input
//       {...props}
//       className={
//         "w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:border-black focus:ring-slate-900/20"
//       }
//     />
//   )
// }



"use client"

import { useState } from "react"
import Field from "@/components/ui/form/Field"
import TextInput from "@/components/ui/form/TextInput"
import CountryCodePhoneInput from "@/components/ui/form/phone/CountryCodePhoneInput"


const REQUIRED_FIELDS = ["companyName", "fullName", "designation", "email", "phone"]

export default function BuildYourTeamForm() {
  const [form, setForm] = useState({
    companyName: "",
    fullName: "",
    designation: "",
    email: "",
    countryIso: "BD",
    countryCode: "+880",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const onChange = (key) => (e) => {
    setForm((p) => ({ ...p, [key]: e.target.value }))
    setErrors((p) => ({ ...p, [key]: "" }))
  }

  const validate = () => {
    const nextErrors = {}

    REQUIRED_FIELDS.forEach((k) => {
      if (!String(form[k] ?? "").trim()) nextErrors[k] = "This field is required."
    })

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email."
    }

    if (form.phone && !/^[0-9]{6,15}$/.test(form.phone)) {
      nextErrors.phone = "Please enter a valid phone number."
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const fullPhone = `${form.countryCode}${form.phone}`
    console.log("Submitted:", { ...form, fullPhone })
    alert("Form submitted (demo).")
  }

  return (
    <section>
      <div className="text-center">
        <h1 className="text-3xl sm:text-[30px] font-bold text-slate-900 tracking-tight">
          Build Your Team
        </h1>

        <p className="mt-2 text-sm sm:text-base text-[#002147cc]">
          Share Your Requirements
        </p>

        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#DD4B4B]" />

        <p className="mt-6 text-slate-600 leading-relaxed">
          Fill up the form, share your requirements,
          <br className="hidden sm:block" />
          and we will get in touch soon.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field label="Company Name" required error={errors.companyName}>
            <TextInput value={form.companyName} onChange={onChange("companyName")} autoComplete="organization" />
          </Field>

          <Field label="Full Name" required error={errors.fullName}>
            <TextInput value={form.fullName} onChange={onChange("fullName")} autoComplete="name" />
          </Field>

          <Field label="Designation" required error={errors.designation}>
            <TextInput value={form.designation} onChange={onChange("designation")} autoComplete="organization-title" />
          </Field>

          <Field label="Email Address" required error={errors.email}>
            <TextInput value={form.email} onChange={onChange("email")} autoComplete="email" inputMode="email" />
          </Field>

          <div className="md:col-span-1">
            <Field label="Phone Number" required error={errors.phone}>
              <CountryCodePhoneInput
                valueIso={form.countryIso}
                valueCode={form.countryCode}
                phone={form.phone}
                onSelectCountry={(iso, code) => setForm((p) => ({ ...p, countryIso: iso, countryCode: code }))}
                onChangePhone={(val) => setForm((p) => ({ ...p, phone: val }))}
                withSearch={true}
              />
            </Field>
          </div>

          <div className="hidden md:block" />

          <div className="md:col-span-2">
            <Field label="Message (Optional)" error={errors.message}>
              <textarea
                value={form.message}
                onChange={onChange("message")}
                placeholder="Message (Optional)"
                rows={4}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus-within:ring-1 focus:border-black"
              />
            </Field>
          </div>

          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              className="w-full rounded-lg font-bold bg-[#002147] py-4 text-white shadow hover:bg-[#DD4B4B] active:scale-[0.99] transition cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}


