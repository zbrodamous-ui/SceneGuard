import { Header } from "@/components/header";
import { Icon, type IconName } from "@/components/icons";
import { ReportsCaseList } from "@/components/reports-case-list";
import { Sidebar } from "@/components/sidebar";

const summaryCards: { label: string; value: string; note: string; icon: IconName; accent: string }[] = [
  { label: "Open cases", value: "18", note: "Across reports and appeals", icon: "reports", accent: "bg-indigo-400/10 text-indigo-300" },
  { label: "High priority", value: "5", note: "2 awaiting assignment", icon: "filter", accent: "bg-rose-400/10 text-rose-300" },
  { label: "Pending appeals", value: "7", note: "Oldest submitted 2 days ago", icon: "staff", accent: "bg-amber-400/10 text-amber-300" },
  { label: "Resolved this week", value: "24", note: "Average response: 3.2 hours", icon: "server", accent: "bg-emerald-400/10 text-emerald-300" },
];

export default function ReportsAppealsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Header section="Reports & Appeals" />
        <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">Case management</p>
              <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-[28px]">Reports &amp; appeals</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-500">Review player concerns, track appeals, and keep every case moving toward a clear resolution.</p>
            </div>
            <button type="button" className="w-fit rounded-lg bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(79,70,229,0.2)] transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Create case</button>
          </div>

          <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Case summary">
            {summaryCards.map((card) => (
              <article key={card.label} className="rounded-xl border border-white/[0.07] bg-[#0d1118]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500">{card.label}</p>
                    <p className="mt-2 text-[26px] font-semibold tracking-tight text-slate-100">{card.value}</p>
                  </div>
                  <div className={`grid size-9 place-items-center rounded-lg ${card.accent}`}><Icon name={card.icon} className="size-[17px]" /></div>
                </div>
                <p className="mt-4 border-t border-white/[0.05] pt-3 text-[11px] text-slate-600">{card.note}</p>
              </article>
            ))}
          </section>

          <ReportsCaseList />
        </main>
      </div>
    </div>
  );
}
