export default function Button({
  children,
  variant = "primary", // primary | secondary
  className = "",
  ...props
}) {
  const base =
    "p-2 rounded-lg font-semibold transition"

  const variants = {
    primary: "bg-[#002147] text-white hover:bg-slate-800",
    secondary: "bg-gray-100 text-[#002147] hover:bg-slate-800 hover:text-white",
    vewprimary:"bg-[#002147] text-white hover:bg-[#DD4B4B] hover:text-white"
  }

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${className} cursor-pointer`}
    >
      {children}
    </button>
  )
}
