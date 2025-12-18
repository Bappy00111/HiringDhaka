"use client"

// import { useMemo, useState } from "react"

// import Field from "@/components/ui/form/Field"
// import TextInput from "@/components/ui/form/TextInput"
// import FilePicker from "@/components/ui/form/FilePicker"
// import Stepper from "@/components/ui/form/stepper/Stepper"
// import CountryCodePhoneInput from "@/components/ui/form/phone/CountryCodePhoneInput"

// export default function JoinTalentNetworkForm() {
//   const steps = useMemo(
//     () => [
//       { id: 1, title: "Personal Info" },
//       { id: 2, title: "Experience" },
//       { id: 3, title: "Preferences" },
//     ],
//     []
//   )

//   const [step, setStep] = useState(1)

//   const [form, setForm] = useState({
//     // Step 1
//     fullName: "",
//     email: "",
//     countryIso: "BD",
//     countryCode: "+880",
//     phone: "", // ✅ digits only (আপনার CountryCodePhoneInput যেভাবে দেয়)
//     resume: null,
//     linkedin: "",
//     portfolio: "",

//     // Step 2
//     currentRole: "",
//     yearsExp: "",
//     skills: "",

//     // Step 3
//     jobType: "Full-Time",
//     workMode: "On-Site",
//     expectedSalary: "",
//   })

//   const [errors, setErrors] = useState({})

//   const set = (key, value) => {
//     setForm((p) => ({ ...p, [key]: value }))
//     setErrors((p) => ({ ...p, [key]: "" }))
//   }

//   const validateStep1 = () => {
//     const e = {}

//     if (!form.fullName.trim()) e.fullName = "Full name is required."
//     if (!form.email.trim()) e.email = "Email is required."
//     if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email."

//     // ✅ Phone validation (BuildYourTeamForm এর মতো)
//     if (!String(form.phone).trim()) e.phone = "Phone is required."
//     if (form.phone && !/^[0-9]{6,15}$/.test(form.phone)) {
//       e.phone = "Please enter a valid phone number."
//     }

//     if (!form.resume) e.resume = "Resume is required."

//     if (form.resume) {
//       const isPdf =
//         form.resume.type === "application/pdf" ||
//         form.resume.name.toLowerCase().endsWith(".pdf")
//       const max3mb = form.resume.size <= 3 * 1024 * 1024
//       if (!isPdf) e.resume = "Only PDF is allowed."
//       if (!max3mb) e.resume = "Max file size is 3MB."
//     }

//     setErrors(e)
//     return Object.keys(e).length === 0
//   }

//   const validateStep2 = () => {
//     const e = {}
//     if (!form.currentRole.trim()) e.currentRole = "Current role is required."
//     if (!String(form.yearsExp).trim()) e.yearsExp = "Years of experience is required."
//     setErrors(e)
//     return Object.keys(e).length === 0
//   }

//   const validateStep3 = () => {
//     const e = {}
//     setErrors(e)
//     return true
//   }

//   const next = () => {
//     const ok =
//       step === 1 ? validateStep1() : step === 2 ? validateStep2() : validateStep3()

//     if (!ok) return
//     setStep((s) => Math.min(3, s + 1))
//   }

//   const back = () => setStep((s) => Math.max(1, s - 1))

//   const onSubmit = (e) => {
//     e.preventDefault()
//     if (!validateStep3()) return

//     // ✅ full phone example: +8801812345678
//     const fullPhone = `${form.countryCode}${form.phone}`

//     console.log("Submit:", { ...form, fullPhone })
//     alert("Submitted (demo).")
//   }

//   return (
//     <section>
//       {/* Title */}
//       <div className="text-center">
//         <h1 className="text-3xl  font-bold text-[#002147] tracking-tight">
//           Join the Hiring Dhaka Talent Network
//         </h1>
//         <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#DD4B4B]" />
//       </div>

//       {/* Info box */}
//       <div className="mt-8 rounded-2xl bg-slate-50 px-6 py-5 text-center">
//         <h2 className="text-lg lg:text-[20px] font-semibold text-[#002147]">
//           Didn&apos;t find a suitable opportunity?
//         </h2>
//         <p className="mt-2 text-slate-600 text-sm leading-relaxed">
//           You&apos;re welcome to share your profile and resume with us.
//           <br className="hidden sm:block" />
//           Our team will review your information and reach out when a relevant opportunity becomes available.
//         </p>
//       </div>

//       {/* Stepper */}
//       <Stepper steps={steps} current={step} />

//       <form onSubmit={onSubmit} className="mt-10">
//         {step === 1 && (
//           <>
//             <h3 className="text-lg font-bold text-[#002147] mb-6">
//               Personal Information
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Field
//                 label="Full Name (as per your National ID):"
//                 required
//                 error={errors.fullName}
//               >
//                 <TextInput
//                   value={form.fullName}
//                   onChange={(e) => set("fullName", e.target.value)}
//                   invalid={!!errors.fullName}
//                 />
//               </Field>

//               <Field label="Email Address:" required error={errors.email}>
//                 <TextInput
//                   value={form.email}
//                   onChange={(e) => set("email", e.target.value)}
//                   inputMode="email"
//                   autoComplete="email"
//                   invalid={!!errors.email}
//                 />
//               </Field>

//               {/* ✅ UPDATED phone input (same as BuildYourTeamForm) */}
//               <Field label="Phone Number:" required error={errors.phone}>
//                 <CountryCodePhoneInput
//                   valueIso={form.countryIso}
//                   valueCode={form.countryCode}
//                   phone={form.phone}
//                   onSelectCountry={(iso, code) => {
//                     setForm((p) => ({ ...p, countryIso: iso, countryCode: code }))
//                     setErrors((p) => ({ ...p, phone: "" }))
//                   }}
//                   onChangePhone={(val) => {
//                     setForm((p) => ({ ...p, phone: val }))
//                     setErrors((p) => ({ ...p, phone: "" }))
//                   }}
//                   withSearch={true}
//                 />
//               </Field>

//               <Field
//                 label="Upload Your Resume (PDF only, max 3MB):"
//                 required
//                 error={errors.resume}
//               >
//                 <FilePicker
//                   accept="application/pdf,.pdf"
//                   value={form.resume}
//                   onChange={(file) => set("resume", file)}
//                   invalid={!!errors.resume}
//                 />
//               </Field>

//               <Field label="LinkedIn Profile URL:">
//                 <TextInput
//                   value={form.linkedin}
//                   onChange={(e) => set("linkedin", e.target.value)}
//                   placeholder=""
//                 />
//               </Field>

//               <Field label="Portfolio, Personal Website, or GitHub:">
//                 <TextInput
//                   value={form.portfolio}
//                   onChange={(e) => set("portfolio", e.target.value)}
//                   placeholder=""
//                 />
//               </Field>

//               <div className="md:col-span-2 flex justify-end pt-2">
//                 <button
//                   type="button"
//                   onClick={next}
//                   className="rounded-lg bg-[#DD4B4B] px-8 py-3 text-white font-bold shadow hover:bg-[#c83f3f]"
//                 >
//                   Next Step
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <h3 className="text-lg font-bold text-[#002147] mb-6">
//               Experience
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Field label="Current Role:" required error={errors.currentRole}>
//                 <TextInput
//                   value={form.currentRole}
//                   onChange={(e) => set("currentRole", e.target.value)}
//                   invalid={!!errors.currentRole}
//                 />
//               </Field>

//               <Field label="Years of Experience:" required error={errors.yearsExp}>
//                 <TextInput
//                   value={form.yearsExp}
//                   onChange={(e) => set("yearsExp", e.target.value)}
//                   inputMode="numeric"
//                   invalid={!!errors.yearsExp}
//                 />
//               </Field>

//               <Field label="Key Skills (comma separated):" className="md:col-span-2">
//                 <TextInput
//                   value={form.skills}
//                   onChange={(e) => set("skills", e.target.value)}
//                   placeholder="React, Next.js, Node.js..."
//                 />
//               </Field>

//               <div className="md:col-span-2 flex justify-between pt-2">
//                 <button
//                   type="button"
//                   onClick={back}
//                   className="rounded-lg border border-slate-300 px-8 py-3 font-bold text-slate-700 hover:bg-slate-50"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="button"
//                   onClick={next}
//                   className="rounded-lg bg-[#DD4B4B] px-8 py-3 text-white font-bold shadow hover:bg-[#c83f3f]"
//                 >
//                   Next Step
//                 </button>
//               </div>
//             </div>
//           </>
//         )}

//         {step === 3 && (
//           <>
//             <h3 className="text-lg font-bold text-[#002147] mb-6">
//               Preferences
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Field label="Job Type:">
//                 <select
//                   value={form.jobType}
//                   onChange={(e) => set("jobType", e.target.value)}
//                   className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-black focus:ring-2 focus:ring-slate-900/20"
//                 >
//                   <option>Full-Time</option>
//                   <option>Part-Time</option>
//                   <option>Contract</option>
//                   <option>Internship</option>
//                 </select>
//               </Field>

//               <Field label="Work Mode:">
//                 <select
//                   value={form.workMode}
//                   onChange={(e) => set("workMode", e.target.value)}
//                   className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-black focus:ring-2 focus:ring-slate-900/20"
//                 >
//                   <option>On-Site</option>
//                   <option>Hybrid</option>
//                   <option>Remote</option>
//                 </select>
//               </Field>

//               <Field label="Expected Salary (Optional):" className="md:col-span-2">
//                 <TextInput
//                   value={form.expectedSalary}
//                   onChange={(e) => set("expectedSalary", e.target.value)}
//                   placeholder="e.g. 80,000 BDT"
//                 />
//               </Field>

//               <div className="md:col-span-2 flex justify-between pt-2">
//                 <button
//                   type="button"
//                   onClick={back}
//                   className="rounded-lg border border-slate-300 px-8 py-3 font-bold text-slate-700 hover:bg-slate-50"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="submit"
//                   className="rounded-lg bg-[#002147] px-8 py-3 text-white font-bold shadow hover:bg-[#001a3a]"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </form>
//     </section>
//   )
// }


"use client"

import { useMemo, useState } from "react"

import Field from "@/components/ui/form/Field"
import TextInput from "@/components/ui/form/TextInput"
import FilePicker from "@/components/ui/form/FilePicker"
import Stepper from "@/components/ui/form/stepper/Stepper"
import CountryCodePhoneInput from "@/components/ui/form/phone/CountryCodePhoneInput"

export default function JoinTalentNetworkForm() {
  const steps = useMemo(
    () => [
      { id: 1, title: "Personal Info" },
      { id: 2, title: "Experience" },
      { id: 3, title: "Preferences" },
    ],
    []
  )

  const [step, setStep] = useState(1)

  const [form, setForm] = useState({
    // Step 1
    fullName: "",
    email: "",
    countryIso: "BD",
    countryCode: "+880",
    phone: "",
    resume: null,
    linkedin: "",
    portfolio: "",

    // Step 2
    currentRole: "",
    yearsExp: "",
    skills: "",

    // Step 3
    jobType: "Full-Time",
    workMode: "On-Site",
    expectedSalary: "",
  })

  const [errors, setErrors] = useState({})

  const set = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }))
    setErrors((p) => ({ ...p, [key]: "" }))
  }

  const validateStep1 = () => {
    const e = {}

    if (!form.fullName.trim()) e.fullName = "Full name is required."
    if (!form.email.trim()) e.email = "Email is required."
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email."

    if (!String(form.phone).trim()) e.phone = "Phone is required."
    if (form.phone && !/^[0-9]{6,15}$/.test(form.phone)) {
      e.phone = "Please enter a valid phone number."
    }

    if (!form.resume) e.resume = "Resume is required."

    if (form.resume) {
      const isPdf =
        form.resume.type === "application/pdf" ||
        form.resume.name.toLowerCase().endsWith(".pdf")
      const max3mb = form.resume.size <= 3 * 1024 * 1024
      if (!isPdf) e.resume = "Only PDF is allowed."
      if (!max3mb) e.resume = "Max file size is 3MB."
    }

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    const e = {}
    if (!form.currentRole.trim()) e.currentRole = "Current role is required."
    if (!String(form.yearsExp).trim()) e.yearsExp = "Years of experience is required."
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep3 = () => {
    setErrors({})
    return true
  }

  const next = () => {
    const ok =
      step === 1 ? validateStep1() : step === 2 ? validateStep2() : validateStep3()
    if (!ok) return
    setStep((s) => Math.min(3, s + 1))
    window?.scrollTo?.({ top: 0, behavior: "smooth" })
  }

  const back = () => {
    setStep((s) => Math.max(1, s - 1))
    window?.scrollTo?.({ top: 0, behavior: "smooth" })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validateStep3()) return

    const fullPhone = `${form.countryCode}${form.phone}`
    console.log("Submit:", { ...form, fullPhone })
    alert("Submitted (demo).")
  }

  return (
    <section className="w-full">
      {/* Title */}
      <div className="text-center px-1">
        <h1 className="text-3xl  font-bold text-[#002147] tracking-tight">
          Join the Hiring Dhaka Talent Network
        </h1>
        <div className="mx-auto mt-3 h-1 w-16 sm:w-20 rounded-full bg-[#DD4B4B]" />
      </div>

      {/* Info box */}
      <div className="mt-6 sm:mt-8 rounded-2xl bg-slate-50 text-center
                      px-4 sm:px-6 lg:px-10 py-5 sm:py-7">
        <h2 className="font-semibold text-[#002147]
                       text-base sm:text-lg lg:text-[20px]">
          Didn&apos;t find a suitable opportunity?
        </h2>
        <p className="mt-2 text-slate-600 leading-relaxed
                      text-xs sm:text-sm lg:text-[15px]">
          You&apos;re welcome to share your profile and resume with us.
          <br className="hidden sm:block" />
          Our team will review your information and reach out when a relevant opportunity becomes available.
        </p>
      </div>

      {/* Stepper (mobile friendly) */}
      <div className="mt-6 sm:mt-6 -mx-2 px-2 overflow-x-auto">
        <div className="min-w-[460px] sm:min-w-0">
          <Stepper steps={steps} current={step} />
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-6 sm:mt-10">
        {/* ---------------- Step 1 ---------------- */}
        {step === 1 && (
          <>
            <h3 className="text-[#002147] font-bold mb-4 sm:mb-6
                           text-base sm:text-lg">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Field
                label="Full Name (as per your National ID):"
                required
                error={errors.fullName}
              >
                <TextInput
                  value={form.fullName}
                  onChange={(e) => set("fullName", e.target.value)}
                  invalid={!!errors.fullName}
                />
              </Field>

              <Field label="Email Address:" required error={errors.email}>
                <TextInput
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  inputMode="email"
                  autoComplete="email"
                  invalid={!!errors.email}
                />
              </Field>

              <Field label="Phone Number:" required error={errors.phone}>
                <CountryCodePhoneInput
                  valueIso={form.countryIso}
                  valueCode={form.countryCode}
                  phone={form.phone}
                  onSelectCountry={(iso, code) => {
                    setForm((p) => ({ ...p, countryIso: iso, countryCode: code }))
                    setErrors((p) => ({ ...p, phone: "" }))
                  }}
                  onChangePhone={(val) => {
                    setForm((p) => ({ ...p, phone: val }))
                    setErrors((p) => ({ ...p, phone: "" }))
                  }}
                  withSearch={true}
                />
              </Field>

              <Field
                label="Upload Your Resume (PDF only, max 3MB):"
                required
                error={errors.resume}
              >
                <FilePicker
                  accept="application/pdf,.pdf"
                  value={form.resume}
                  onChange={(file) => set("resume", file)}
                  invalid={!!errors.resume}
                />
              </Field>

              <Field label="LinkedIn Profile URL:">
                <TextInput
                  value={form.linkedin}
                  onChange={(e) => set("linkedin", e.target.value)}
                />
              </Field>

              <Field label="Portfolio, Personal Website, or GitHub:">
                <TextInput
                  value={form.portfolio}
                  onChange={(e) => set("portfolio", e.target.value)}
                />
              </Field>

              {/* Buttons */}
              <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row gap-3 sm:justify-end">
                <button
                  type="button"
                  onClick={next}
                  className="w-full sm:w-auto rounded-lg bg-[#DD4B4B] px-8 py-3
                             text-white font-bold shadow hover:bg-[#c83f3f]"
                >
                  Next Step
                </button>
              </div>
            </div>
          </>
        )}

        {/* ---------------- Step 2 ---------------- */}
        {step === 2 && (
          <>
            <h3 className="text-[#002147] font-bold mb-4 sm:mb-6
                           text-base sm:text-lg">
              Experience
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Field label="Current Role:" required error={errors.currentRole}>
                <TextInput
                  value={form.currentRole}
                  onChange={(e) => set("currentRole", e.target.value)}
                  invalid={!!errors.currentRole}
                />
              </Field>

              <Field label="Years of Experience:" required error={errors.yearsExp}>
                <TextInput
                  value={form.yearsExp}
                  onChange={(e) => set("yearsExp", e.target.value)}
                  inputMode="numeric"
                  invalid={!!errors.yearsExp}
                />
              </Field>

              <Field label="Key Skills (comma separated):" className="md:col-span-2">
                <TextInput
                  value={form.skills}
                  onChange={(e) => set("skills", e.target.value)}
                  placeholder="React, Next.js, Node.js..."
                />
              </Field>

              {/* Buttons */}
              <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <button
                  type="button"
                  onClick={back}
                  className="w-full sm:w-auto rounded-lg border border-slate-300 px-8 py-3
                             font-bold text-slate-700 hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="w-full sm:w-auto rounded-lg bg-[#DD4B4B] px-8 py-3
                             text-white font-bold shadow hover:bg-[#c83f3f]"
                >
                  Next Step
                </button>
              </div>
            </div>
          </>
        )}

        {/* ---------------- Step 3 ---------------- */}
        {step === 3 && (
          <>
            <h3 className="text-[#002147] font-bold mb-4 sm:mb-6
                           text-base sm:text-lg">
              Preferences
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Field label="Job Type:">
                <select
                  value={form.jobType}
                  onChange={(e) => set("jobType", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none
                             focus:border-black focus:ring-2 focus:ring-slate-900/20"
                >
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </Field>

              <Field label="Work Mode:">
                <select
                  value={form.workMode}
                  onChange={(e) => set("workMode", e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none
                             focus:border-black focus:ring-2 focus:ring-slate-900/20"
                >
                  <option>On-Site</option>
                  <option>Hybrid</option>
                  <option>Remote</option>
                </select>
              </Field>

              <Field label="Expected Salary (Optional):" className="md:col-span-2">
                <TextInput
                  value={form.expectedSalary}
                  onChange={(e) => set("expectedSalary", e.target.value)}
                  placeholder="e.g. 80,000 BDT"
                />
              </Field>

              {/* Buttons */}
              <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <button
                  type="button"
                  onClick={back}
                  className="w-full sm:w-auto rounded-lg border border-slate-300 px-8 py-3
                             font-bold text-slate-700 hover:bg-slate-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-lg bg-[#002147] px-8 py-3
                             text-white font-bold shadow hover:bg-[#001a3a]"
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </section>
  )
}
