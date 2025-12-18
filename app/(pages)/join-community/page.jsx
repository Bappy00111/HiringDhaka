import JoinTalentNetworkForm from "@/components/features/talent-network/JoinTalentNetworkForm"


export const metadata = {
  title: "Join the Hiring Dhaka Talent Network",
}

export default function TalentNetworkPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-xl bg-white shadow-[0_10px_35px_rgba(15,23,42,0.10)] p-6 sm:p-10">
          <JoinTalentNetworkForm />
        </div>
      </div>
    </main>
  )
}
