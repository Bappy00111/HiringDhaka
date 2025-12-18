export default function Field({ label, required, error, children, className = "" }) {
  return (
    <div className={className}>
      <label className="block text-sm lg:text-base font-semibold text-[#002147] pb-1">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>

      {children}

      {error ? (
        <p className="mt-2 text-xs font-medium text-red-600">{error}</p>
      ) : null}
    </div>
  )
}
