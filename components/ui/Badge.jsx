export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-lg px-3 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  )
}
