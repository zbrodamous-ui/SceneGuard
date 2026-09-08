"use client";

import { useMemo, useState } from "react";

import { Icon } from "@/components/icons";

type CaseType = "Report" | "Appeal";
type CasePriority = "High" | "Medium" | "Low";
type CaseStatus = "Open" | "Investigating" | "Awaiting player" | "Under review" | "Resolved";

type CommunityCase = {
  id: string;
  type: CaseType;
  player: string;
  submitted: string;
  submittedDateTime: string;
  priority: CasePriority;
  assigned: string;
  initials: string;
  status: CaseStatus;
};

const cases: CommunityCase[] = [
  { id: "RPT-2054", type: "Report", player: "Noah Carter", submitted: "Today, 9:14 PM", submittedDateTime: "2026-09-08T21:14:00Z", priority: "High", assigned: "Jamie M.", initials: "JM", status: "Investigating" },
  { id: "APL-0431", type: "Appeal", player: "Maya Brooks", submitted: "Today, 7:46 PM", submittedDateTime: "2026-09-08T19:46:00Z", priority: "Medium", assigned: "Taylor R.", initials: "TR", status: "Under review" },
  { id: "RPT-2053", type: "Report", player: "Eli Bennett", submitted: "Today, 6:22 PM", submittedDateTime: "2026-09-08T18:22:00Z", priority: "Low", assigned: "Unassigned", initials: "—", status: "Open" },
  { id: "RPT-2052", type: "Report", player: "Avery Collins", submitted: "Today, 2:08 PM", submittedDateTime: "2026-09-08T14:08:00Z", priority: "High", assigned: "Sam K.", initials: "SK", status: "Awaiting player" },
  { id: "APL-0430", type: "Appeal", player: "Logan Reed", submitted: "Yesterday, 10:35 PM", submittedDateTime: "2026-09-07T22:35:00Z", priority: "High", assigned: "Jamie M.", initials: "JM", status: "Under review" },
  { id: "APL-0429", type: "Appeal", player: "Riley Foster", submitted: "Sep 7, 4:17 PM", submittedDateTime: "2026-09-07T16:17:00Z", priority: "Low", assigned: "Morgan L.", initials: "ML", status: "Resolved" },
  { id: "RPT-2051", type: "Report", player: "Casey Ward", submitted: "Sep 7, 11:42 AM", submittedDateTime: "2026-09-07T11:42:00Z", priority: "Medium", assigned: "Jordan P.", initials: "JP", status: "Resolved" },
];

const typeStyles: Record<CaseType, string> = {
  Report: "bg-sky-400/10 text-sky-300 ring-sky-400/20",
  Appeal: "bg-violet-400/10 text-violet-300 ring-violet-400/20",
};

const priorityStyles: Record<CasePriority, string> = {
  High: "text-rose-300",
  Medium: "text-amber-300",
  Low: "text-slate-400",
};

const statusStyles: Record<CaseStatus, string> = {
  Open: "text-sky-300",
  Investigating: "text-indigo-300",
  "Awaiting player": "text-amber-300",
  "Under review": "text-violet-300",
  Resolved: "text-emerald-300",
};

export function ReportsCaseList() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  const visibleCases = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return cases.filter((item) => {
      const matchesQuery = !normalizedQuery || [item.id, item.player, item.assigned].some((field) => field.toLowerCase().includes(normalizedQuery));
      return matchesQuery && (type === "All" || item.type === type) && (status === "All" || item.status === status);
    });
  }, [query, status, type]);

  const hasFilters = Boolean(query || type !== "All" || status !== "All");

  function clearFilters() {
    setQuery("");
    setType("All");
    setStatus("All");
  }

  return (
    <section className="mt-4 overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d1118]/80" aria-labelledby="case-queue-title">
      <div className="border-b border-white/[0.06] p-4 sm:p-5">
        <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
          <div>
            <h2 id="case-queue-title" className="text-sm font-semibold text-slate-200">Case queue</h2>
            <p className="mt-1 text-[11px] text-slate-600" aria-live="polite">Showing {visibleCases.length} of {cases.length} placeholder cases</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 xl:flex">
            <label className="relative block sm:col-span-2 xl:w-64">
              <span className="sr-only">Search cases</span>
              <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-600" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search ID, player, or staff" className="h-10 w-full rounded-lg border border-white/[0.08] bg-black/15 pl-9 pr-3 text-xs text-slate-200 outline-none placeholder:text-slate-600 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/10" />
            </label>
            <label>
              <span className="sr-only">Filter by case type</span>
              <select value={type} onChange={(event) => setType(event.target.value)} className="h-10 w-full rounded-lg border border-white/[0.08] bg-[#0b0e14] px-3 text-xs text-slate-400 outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/10 xl:w-32">
                <option>All</option><option>Report</option><option>Appeal</option>
              </select>
            </label>
            <label>
              <span className="sr-only">Filter by case status</span>
              <select value={status} onChange={(event) => setStatus(event.target.value)} className="h-10 w-full rounded-lg border border-white/[0.08] bg-[#0b0e14] px-3 text-xs text-slate-400 outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/10 xl:w-40">
                <option>All</option><option>Open</option><option>Investigating</option><option>Awaiting player</option><option>Under review</option><option>Resolved</option>
              </select>
            </label>
            {hasFilters && <button type="button" onClick={clearFilters} className="rounded-lg px-3 text-xs font-medium text-indigo-400 hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-indigo-400">Clear</button>}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] border-collapse text-left">
          <caption className="sr-only">Player reports and appeals awaiting community staff action</caption>
          <thead>
            <tr className="border-b border-white/[0.06] text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600">
              <th scope="col" className="px-5 py-3.5">Case ID</th><th scope="col" className="px-4 py-3.5">Type</th><th scope="col" className="px-4 py-3.5">Player</th><th scope="col" className="px-4 py-3.5">Submitted</th><th scope="col" className="px-4 py-3.5">Priority</th><th scope="col" className="px-4 py-3.5">Assigned staff</th><th scope="col" className="px-4 py-3.5">Status</th><th scope="col" className="w-12 px-4 py-3.5"><span className="sr-only">Options</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.05]">
            {visibleCases.map((item) => (
              <tr key={item.id} className="transition-colors hover:bg-white/[0.018]">
                <th scope="row" className="px-5 py-4 text-xs font-medium text-indigo-300">#{item.id}</th>
                <td className="px-4 py-4"><span aria-label={`Case type: ${item.type}`} className={`inline-flex rounded-md px-2 py-1 text-[10px] font-semibold ring-1 ring-inset ${typeStyles[item.type]}`}>{item.type}</span></td>
                <td className="px-4 py-4 text-xs font-medium text-slate-300">{item.player}</td>
                <td className="whitespace-nowrap px-4 py-4 text-[11px] text-slate-600"><time dateTime={item.submittedDateTime}>{item.submitted}</time></td>
                <td className={`px-4 py-4 text-[11px] font-medium ${priorityStyles[item.priority]}`}><span className="mr-2 inline-block size-1.5 rounded-full bg-current" />{item.priority}</td>
                <td className="px-4 py-4"><div className="flex items-center gap-2.5"><span className="grid size-7 place-items-center rounded-full bg-indigo-500/15 text-[9px] font-semibold text-indigo-300 ring-1 ring-inset ring-indigo-400/10">{item.initials}</span><span className="text-xs text-slate-400">{item.assigned}</span></div></td>
                <td className={`whitespace-nowrap px-4 py-4 text-[11px] font-medium ${statusStyles[item.status]}`}><span className="mr-2 inline-block size-1.5 rounded-full bg-current" />{item.status}</td>
                <td className="px-4 py-4"><button type="button" aria-label={`Options for case ${item.id}`} className="grid size-8 place-items-center rounded-lg text-slate-600 transition hover:bg-white/5 hover:text-slate-300 focus-visible:outline-2 focus-visible:outline-indigo-400"><Icon name="more" className="size-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {visibleCases.length === 0 && <div className="px-5 py-14 text-center"><p className="text-sm font-medium text-slate-300">No matching cases</p><p className="mt-1 text-xs text-slate-600">Try changing your search or filters.</p><button type="button" onClick={clearFilters} className="mt-4 text-xs font-medium text-indigo-400 hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-indigo-400">Clear all filters</button></div>}
      </div>
      <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3.5 text-[10px] text-slate-600"><p>Showing {visibleCases.length} cases</p><div className="flex gap-2"><button type="button" disabled className="rounded-md border border-white/[0.06] px-2.5 py-1.5 opacity-40">Previous</button><button type="button" disabled className="rounded-md border border-white/[0.06] px-2.5 py-1.5 opacity-40">Next</button></div></div>
    </section>
  );
}
