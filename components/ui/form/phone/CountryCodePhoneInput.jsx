"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { getCountries, getCountryCallingCode } from "react-phone-number-input"
import en from "react-phone-number-input/locale/en.json"

export default function CountryCodePhoneInput({
  valueIso = "BD",
  valueCode = "+880",
  phone = "",
  onSelectCountry,
  onChangePhone,
  placeholder = "1812-345678",
  withSearch = true,
}) {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState("")
  const wrapRef = useRef(null)

  useEffect(() => {
    const onDown = (e) => {
      if (!wrapRef.current) return
      if (!wrapRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [])

  const countries = useMemo(() => {
    return getCountries()
      .map((iso) => ({
        iso,
        name: en[iso] || iso,
        code: `+${getCountryCallingCode(iso)}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [])

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!withSearch || !s) return countries
    return countries.filter((c) => {
      return (
        c.name.toLowerCase().includes(s) ||
        c.code.includes(s) ||
        c.iso.toLowerCase().includes(s)
      )
    })
  }, [q, countries, withSearch])

  return (
    <div ref={wrapRef} className="relative">
      {/* input wrapper */}
      <div
        className="flex w-full overflow-hidden rounded-lg border border-slate-300 bg-white focus-within:ring-1 focus-within:border-black"
        onMouseDown={() => setOpen(true)}
      >
        {/* prefix */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 bg-slate-100 px-3 text-sm font-medium text-slate-800"
        >
          <span>{valueCode}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 15l6-6 6 6" : "M6 9l6 6 6-6"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <input
          value={phone}
          onChange={(e) => onChangePhone?.(e.target.value.replace(/[^\d]/g, ""))}
          placeholder={placeholder}
          className="w-full px-4 py-3 text-sm outline-none"
          inputMode="numeric"
          autoComplete="tel"
          onFocus={() => setOpen(true)}
        />
      </div>

      {/* popup */}
      {open && (
        <div className="absolute left-0 right-0 mt-2 rounded-xl border border-slate-200 bg-white shadow-lg z-50">
          {withSearch && (
            <div className="p-2 border-b border-slate-100">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search country or code..."
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-1 focus:border-black"
              />
            </div>
          )}

          <ul className="max-h-72 overflow-auto py-1">
            {filtered.map((c) => (
              <li key={c.iso}>
                <button
                  type="button"
                  className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-slate-50 ${
                    c.iso === valueIso ? "bg-slate-50" : ""
                  }`}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    onSelectCountry?.(c.iso, c.code)
                    setOpen(false)
                    setQ("")
                  }}
                >
                  <span className="text-sm text-slate-900">{c.name}</span>
                  <span className="text-sm text-slate-500">{c.code}</span>
                </button>
              </li>
            ))}

            {filtered.length === 0 && (
              <li className="px-3 py-3 text-sm text-slate-500">
                No country found.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
