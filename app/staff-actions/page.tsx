import { Header } from "@/components/header";
import { Icon } from "@/components/icons";
import { Sidebar } from "@/components/sidebar";

const staffActions = [
  { id: "ACT-1042", type: "Warning", staff: "Jamie M.", initials: "JM", player: "Noah Carter", reason: "Fail roleplay during an active scene", timestamp: "Today, 8:42 PM", status: "Active" },
  { id: "ACT-1041", type: "Temporary ban", staff: "Sam K.", initials: "SK", player: "Maya Brooks", reason: "Repeated combat logging", timestamp: "Today, 7:18 PM", status: "Active" },
  { id: "ACT-1040", type: "Note", staff: "Taylor R.", initials: "TR", player: "Eli Bennett", reason: "Verbal coaching following player report", timestamp: "Today, 5:36 PM", status: "Resolved" },
  { id: "ACT-1039", type: "Kick", staff: "Jordan P.", initials: "JP", player: "Avery Collins", reason: "Disruptive voice chat behavior", timestamp: "Yesterday, 11:04 PM", status: "Resolved" },
  { id: "ACT-1038", type: "Permanent ban", staff: "Jamie M.", initials: "JM", player: "Logan Reed", reason: "Ban evasion and staff harassment", timestamp: "Yesterday, 8:27 PM", status: "Under appeal" },
  { id: "ACT-1037", type: "Warning", staff: "Morgan L.", initials: "ML", player: "Riley Foster", reason: "Metagaming in a public scene", timestamp: "Sep 6, 4:15 PM", status: "Expired" },
];

const typeStyles: Record<string, string> = {
  Warning: "bg-amber-400/10 text-amber-300 ring-amber-400/20",
  "Temporary ban": "bg-orange-400/10 text-orange-300 ring-orange-400/20",
  Note: "bg-sky-400/10 text-sky-300 ring-sky-400/20",
  Kick: "bg-violet-400/10 text-violet-300 ring-violet-400/20",
  "Permanent ban": "bg-rose-400/10 text-rose-300 ring-rose-400/20",
};

const statusStyles: Record<string, string> = {
  Active: "text-emerald-300",
  Resolved: "text-slate-400",
  "Under appeal": "text-amber-300",
  Expired: "text-slate-500",
};

export default function StaffActionsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <Header section="Staff Actions" />
        <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400">Moderation</p>
              <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-[28px]">Staff actions</h1>
              <p className="mt-2 max-w-xl text-sm text-slate-500">Review moderation activity and keep a clear record of every staff decision.</p>
            </div>
            <button type="button" className="w-fit rounded-lg bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(79,70,229,0.2)] transition hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Log staff action</button>
          </div>

          <section className="mt-8 overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d1118]/80" aria-labelledby="action-log-title">
            <div className="border-b border-white/[0.06] p-4 sm:p-5">
              <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                <div>
                  <h2 id="action-log-title" className="text-sm font-semibold text-slate-200">Action log</h2>
                  <p className="mt-1 text-[11px] text-slate-600">Showing 6 placeholder records</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <label className="relative block sm:w-72">
                    <span className="sr-only">Search staff actions</span>
                    <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-600" />
                    <input type="search" placeholder="Search player, staff, or reason" className="h-10 w-full rounded-lg border border-white/[0.08] bg-black/15 pl-9 pr-3 text-xs text-slate-200 outline-none placeholder:text-slate-600 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/10" />
                  </label>
                  <button type="button" className="flex h-10 items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3.5 text-xs font-medium text-slate-400 transition hover:border-white/[0.14] hover:text-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                    <Icon name="filter" className="size-4" /> Filters <span className="rounded bg-indigo-400/10 px-1.5 py-0.5 text-[9px] text-indigo-300">All</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[960px] border-collapse text-left">
                <caption className="sr-only">Recent staff moderation actions</caption>
                <thead>
                  <tr className="border-b border-white/[0.06] text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
                    <th scope="col" className="px-5 py-3.5">Action</th>
                    <th scope="col" className="px-4 py-3.5">Staff member</th>
                    <th scope="col" className="px-4 py-3.5">Player</th>
                    <th scope="col" className="px-4 py-3.5">Reason</th>
                    <th scope="col" className="px-4 py-3.5">Timestamp</th>
                    <th scope="col" className="px-4 py-3.5">Status</th>
                    <th scope="col" className="w-12 px-4 py-3.5"><span className="sr-only">Options</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.05]">
                  {staffActions.map((action) => (
                    <tr key={action.id} className="group transition-colors hover:bg-white/[0.018]">
                      <td className="px-5 py-4"><span className={`inline-flex rounded-md px-2 py-1 text-[10px] font-medium ring-1 ring-inset ${typeStyles[action.type]}`}>{action.type}</span><p className="mt-1.5 text-[9px] text-slate-700">#{action.id}</p></td>
                      <td className="px-4 py-4"><div className="flex items-center gap-2.5"><span className="grid size-7 place-items-center rounded-full bg-indigo-500/15 text-[9px] font-semibold text-indigo-300 ring-1 ring-inset ring-indigo-400/10">{action.initials}</span><span className="text-xs font-medium text-slate-300">{action.staff}</span></div></td>
                      <td className="px-4 py-4 text-xs text-slate-400">{action.player}</td>
                      <td className="max-w-xs px-4 py-4 text-xs leading-5 text-slate-500">{action.reason}</td>
                      <td className="whitespace-nowrap px-4 py-4 text-[11px] text-slate-600"><time>{action.timestamp}</time></td>
                      <td className={`whitespace-nowrap px-4 py-4 text-[11px] font-medium ${statusStyles[action.status]}`}><span className="mr-2 inline-block size-1.5 rounded-full bg-current" />{action.status}</td>
                      <td className="px-4 py-4"><button type="button" aria-label={`Options for ${action.id}`} className="grid size-8 place-items-center rounded-lg text-slate-600 transition hover:bg-white/5 hover:text-slate-300 focus-visible:outline-2 focus-visible:outline-indigo-400"><Icon name="more" className="size-4" /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3.5 text-[10px] text-slate-600"><p>Showing 1–6 of 6 actions</p><div className="flex gap-2"><button type="button" disabled className="rounded-md border border-white/[0.06] px-2.5 py-1.5 opacity-40">Previous</button><button type="button" disabled className="rounded-md border border-white/[0.06] px-2.5 py-1.5 opacity-40">Next</button></div></div>
          </section>
        </main>
      </div>
    </div>
  );
}
