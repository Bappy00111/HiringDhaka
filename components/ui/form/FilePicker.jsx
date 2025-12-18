"use client"

export default function FilePicker({
  accept,
  value,
  onChange,
  invalid = false,
  helperText = "",
}) {
  return (
    <div>
      <div
        className={[
          "flex items-center gap-3 rounded-lg border px-3 py-2.5",
          invalid ? "border-red-400 ring-1 ring-red-200" : "border-slate-300",
        ].join(" ")}
      >
        <label className="inline-flex">
          <span className="inline-flex items-center justify-center rounded-lg bg-[#002147] px-4 py-2 text-sm font-semibold text-white cursor-pointer hover:bg-[#001a3a]">
            Choose File
          </span>
          <input
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => onChange?.(e.target.files?.[0] || null)}
          />
        </label>

        <span className="text-sm text-slate-500 truncate">
          {value?.name || "No file chosen"}
        </span>
      </div>

      {helperText ? (
        <p className="mt-2 text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  )
}
