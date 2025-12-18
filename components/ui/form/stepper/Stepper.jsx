export default function Stepper({ steps, current }) {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-center gap-6">
        {steps.map((s, idx) => {
          const isActive = current === s.id
          const isDone = current > s.id

          return (
            <div key={s.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold",
                    isActive ? "bg-[#DD4B4B] text-white" : "",
                    isDone ? "bg-[#DD4B4B] text-white" : "",
                    !isActive && !isDone ? "bg-slate-300 text-slate-700" : "",
                  ].join(" ")}
                >
                  {s.id}
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs font-semibold text-[#002147]">{s.title}</p>
                </div>
              </div>

              {/* connector */}
              {idx !== steps.length - 1 ? (
                <div className="mx-4 h-[3px] w-16 rounded-full bg-slate-200" />
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}
