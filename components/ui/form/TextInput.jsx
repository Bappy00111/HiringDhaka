export default function TextInput({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:border-black focus:ring-slate-900/20 ${className}`}
    />
  )
}
