import { EventsExplorer } from "@/components/events-explorer";
import { Header } from "@/components/header";
import { Icon, type IconName } from "@/components/icons";
import { Sidebar } from "@/components/sidebar";

const summaryCards: { label: string; value: string; note: string; icon: IconName; accent: string }[] = [
  { label: "Upcoming events", value: "6", note: "Across the next 30 days", icon: "events", accent: "bg-indigo-400/10 text-indigo-300" },
  { label: "Expected players", value: "342", note: "Total confirmed attendance", icon: "staff", accent: "bg-cyan-400/10 text-cyan-300" },
  { label: "Nearly full", value: "2", note: "Events above 80% capacity", icon: "filter", accent: "bg-amber-400/10 text-amber-300" },
  { label: "Completed", value: "14", note: "Community events this month", icon: "server", accent: "bg-emerald-400/10 text-emerald-300" },
];

export default function EventsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Header section="Events" />
        <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">Community calendar</p>
              <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-[28px]">Events</h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-500">Plan community moments, coordinate hosts, and keep attendance in view.</p>
            </div>
            <button type="button" className="w-fit rounded-lg bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(79,70,229,0.2)] transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Create event</button>
          </div>

          <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Event summary">
            {summaryCards.map((card) => (
              <article key={card.label} className="rounded-xl border border-white/[0.07] bg-[#0d1118]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <div className="flex items-start justify-between">
                  <div><p className="text-xs font-medium text-slate-500">{card.label}</p><p className="mt-2 text-[26px] font-semibold tracking-tight text-slate-100">{card.value}</p></div>
                  <div className={`grid size-9 place-items-center rounded-lg ${card.accent}`}><Icon name={card.icon} className="size-[17px]" /></div>
                </div>
                <p className="mt-4 border-t border-white/[0.05] pt-3 text-[11px] text-slate-600">{card.note}</p>
              </article>
            ))}
          </section>

          <EventsExplorer />
        </main>
      </div>
    </div>
  );
}
