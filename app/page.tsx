import { Header } from "@/components/header";
import { Icon, type IconName } from "@/components/icons";
import { Sidebar } from "@/components/sidebar";

const stats: { label: string; value: string; note: string; icon: IconName; accent: string }[] = [
  { label: "Open reports", value: "12", note: "3 require review", icon: "reports", accent: "text-amber-300 bg-amber-400/10" },
  { label: "Staff online", value: "8", note: "of 24 team members", icon: "staff", accent: "text-indigo-300 bg-indigo-400/10" },
  { label: "Upcoming events", value: "4", note: "Next on Friday", icon: "events", accent: "text-cyan-300 bg-cyan-400/10" },
  { label: "Server uptime", value: "99.9%", note: "Last 30 days", icon: "server", accent: "text-emerald-300 bg-emerald-400/10" },
];

const activity = [
  { initials: "JM", color: "bg-indigo-500", name: "Jamie M.", action: "resolved player report", target: "#RPT-2048", time: "8 min ago" },
  { initials: "SK", color: "bg-cyan-600", name: "Sam K.", action: "updated staff action", target: "#ACT-981", time: "26 min ago" },
  { initials: "TR", color: "bg-violet-600", name: "Taylor R.", action: "approved an appeal", target: "#APL-417", time: "1 hr ago" },
  { initials: "AL", color: "bg-slate-700", name: "Automated", action: "completed server health check", target: "All services", time: "2 hrs ago" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Header />
        <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">Overview</p>
              <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-[28px]">Good evening, Alex</h1>
              <p className="mt-2 text-sm text-slate-500">Here&apos;s what&apos;s happening in your community today.</p>
            </div>
            <button type="button" className="w-fit rounded-lg bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(79,70,229,0.2)] transition hover:bg-indigo-400">Create report</button>
          </div>

          <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-label="Community statistics">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-xl border border-white/[0.07] bg-[#0d1118]/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500">{stat.label}</p>
                    <p className="mt-2 text-[26px] font-semibold tracking-tight text-slate-100">{stat.value}</p>
                  </div>
                  <div className={`grid size-9 place-items-center rounded-lg ${stat.accent}`}><Icon name={stat.icon} className="size-[17px]" /></div>
                </div>
                <p className="mt-4 border-t border-white/[0.05] pt-3 text-[11px] text-slate-600">{stat.note}</p>
              </article>
            ))}
          </section>

          <section className="mt-4 grid gap-4 xl:grid-cols-[1.55fr_1fr]">
            <article className="rounded-xl border border-white/[0.07] bg-[#0d1118]/80">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div><h2 className="text-sm font-semibold text-slate-200">Recent activity</h2><p className="mt-1 text-[11px] text-slate-600">Latest actions across your community</p></div>
                <button type="button" className="text-[11px] font-medium text-indigo-400 transition hover:text-indigo-300">View all</button>
              </div>
              <div className="divide-y divide-white/[0.05] px-5">
                {activity.map((item) => (
                  <div key={`${item.name}-${item.target}`} className="flex items-center gap-3 py-4">
                    <div className={`grid size-8 shrink-0 place-items-center rounded-full ${item.color} text-[9px] font-semibold text-white`}>{item.initials}</div>
                    <p className="min-w-0 flex-1 truncate text-xs text-slate-500"><span className="font-medium text-slate-300">{item.name}</span> {item.action} <span className="text-indigo-400">{item.target}</span></p>
                    <time className="hidden shrink-0 text-[10px] text-slate-600 sm:block">{item.time}</time>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-xl border border-white/[0.07] bg-[#0d1118]/80 p-5">
              <div className="flex items-center justify-between">
                <div><h2 className="text-sm font-semibold text-slate-200">Server status</h2><p className="mt-1 text-[11px] text-slate-600">Live service health</p></div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-400/[0.08] px-2.5 py-1 text-[10px] font-medium text-emerald-400"><span className="size-1.5 rounded-full bg-emerald-400" />Operational</span>
              </div>
              <div className="mt-6 rounded-lg border border-white/[0.05] bg-black/10 p-4">
                <div className="flex items-end justify-between"><div><p className="text-[11px] text-slate-600">Players online</p><p className="mt-1 text-2xl font-semibold text-slate-100">164 <span className="text-xs font-normal text-slate-600">/ 250</span></p></div><p className="text-[10px] text-emerald-400">65.6% capacity</p></div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.05]"><div className="h-full w-[66%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" /></div>
              </div>
              <div className="mt-4 space-y-3">
                {["Game server", "Voice services", "Community API"].map((service) => <div key={service} className="flex items-center justify-between text-[11px]"><span className="text-slate-500">{service}</span><span className="flex items-center gap-2 text-slate-400"><span className="size-1.5 rounded-full bg-emerald-400" />Healthy</span></div>)}
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
