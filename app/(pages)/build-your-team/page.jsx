import BuildYourTeamForm from "@/components/features/build-your-team/BuildYourTeamForm"


export const metadata = {
  title: "Build Your Team",
}

export default function BuildYourTeamPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-xl bg-white shadow-[0_10px_35px_rgba(15,23,42,0.10)] p-6 sm:p-10">
          <BuildYourTeamForm />
        </div>
      </div>
    </main>
  )
}
