"use client";

import { useMemo, useState } from "react";

import { Icon } from "@/components/icons";

type EventType = "Roleplay" | "Training" | "Community" | "Staff";
type EventStatus = "Open" | "Nearly full" | "Invite only";

type CommunityEvent = {
  title: string;
  type: EventType;
  day: number;
  dateLabel: string;
  dateTime: string;
  host: string;
  initials: string;
  attending: number;
  capacity: number;
  status: EventStatus;
};

const events: CommunityEvent[] = [
  { title: "City Hall Open Forum", type: "Community", day: 10, dateLabel: "Thu, Sep 10 · 7:00 PM", dateTime: "2026-09-10T19:00:00Z", host: "Jamie M.", initials: "JM", attending: 48, capacity: 80, status: "Open" },
  { title: "Highway Patrol Academy", type: "Training", day: 12, dateLabel: "Sat, Sep 12 · 5:30 PM", dateTime: "2026-09-12T17:30:00Z", host: "Sam K.", initials: "SK", attending: 22, capacity: 25, status: "Nearly full" },
  { title: "Harbor Night Market", type: "Roleplay", day: 18, dateLabel: "Fri, Sep 18 · 8:00 PM", dateTime: "2026-09-18T20:00:00Z", host: "Taylor R.", initials: "TR", attending: 96, capacity: 120, status: "Open" },
  { title: "Moderator Scenario Review", type: "Staff", day: 21, dateLabel: "Mon, Sep 21 · 6:00 PM", dateTime: "2026-09-21T18:00:00Z", host: "Morgan L.", initials: "ML", attending: 16, capacity: 20, status: "Invite only" },
  { title: "County Rally Championship", type: "Roleplay", day: 25, dateLabel: "Fri, Sep 25 · 9:00 PM", dateTime: "2026-09-25T21:00:00Z", host: "Jordan P.", initials: "JP", attending: 110, capacity: 125, status: "Nearly full" },
  { title: "New Player Welcome Night", type: "Community", day: 29, dateLabel: "Tue, Sep 29 · 7:30 PM", dateTime: "2026-09-29T19:30:00Z", host: "Avery C.", initials: "AC", attending: 50, capacity: 90, status: "Open" },
];

const typeStyles: Record<EventType, string> = {
  Roleplay: "bg-violet-400/10 text-violet-300 ring-violet-400/20",
  Training: "bg-sky-400/10 text-sky-300 ring-sky-400/20",
  Community: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/20",
  Staff: "bg-amber-400/10 text-amber-300 ring-amber-400/20",
};

const typeDotStyles: Record<EventType, string> = {
  Roleplay: "bg-violet-400",
  Training: "bg-sky-400",
  Community: "bg-emerald-400",
  Staff: "bg-amber-400",
};

const statusStyles: Record<EventStatus, string> = {
  Open: "text-emerald-300",
  "Nearly full": "text-amber-300",
  "Invite only": "text-slate-400",
};

const calendarWeeks: (number | null)[][] = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, null, null, null, null],
];

export function EventsExplorer() {
  const [query, setQuery] = useState("");
  const [eventType, setEventType] = useState("All types");

  const visibleEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return events.filter((event) => (!normalizedQuery || [event.title, event.host, event.type].some((value) => value.toLowerCase().includes(normalizedQuery))) && (eventType === "All types" || event.type === eventType));
  }, [eventType, query]);

  const eventsByDay = useMemo(() => new Map(visibleEvents.map((event) => [event.day, event])), [visibleEvents]);

  return (
    <section className="mt-4" aria-labelledby="upcoming-events-title">
      <div className="mb-4 flex flex-col justify-between gap-4 rounded-xl border border-white/[0.07] bg-[#0d1118]/80 p-4 sm:flex-row sm:items-center sm:p-5">
        <div><h2 id="upcoming-events-title" className="text-sm font-semibold text-slate-200">Upcoming events</h2><p className="mt-1 text-[11px] text-slate-600" aria-live="polite">Showing {visibleEvents.length} of {events.length} events</p></div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <label className="relative block sm:w-64">
            <span className="sr-only">Search events</span>
            <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-600" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search title, host, or type" className="h-10 w-full rounded-lg border border-white/[0.08] bg-black/15 pl-9 pr-3 text-xs text-slate-200 outline-none placeholder:text-slate-600 focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/10" />
          </label>
          <label>
            <span className="sr-only">Filter by event type</span>
            <select value={eventType} onChange={(event) => setEventType(event.target.value)} className="h-10 w-full rounded-lg border border-white/[0.08] bg-[#0b0e14] px-3 text-xs text-slate-400 outline-none focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/10 sm:w-36">
              <option>All types</option><option>Roleplay</option><option>Training</option><option>Community</option><option>Staff</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid items-start gap-4 xl:grid-cols-[1.25fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#0d1118]/80">
          {visibleEvents.length > 0 ? <ul className="divide-y divide-white/[0.05]" aria-label="Filtered upcoming events">
            {visibleEvents.map((event) => {
              const capacityPercent = Math.round((event.attending / event.capacity) * 100);
              return <li key={event.title} className="p-4 transition-colors hover:bg-white/[0.018] sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="grid size-12 shrink-0 place-items-center rounded-lg border border-white/[0.06] bg-black/15 text-center"><span className="text-[9px] font-semibold uppercase tracking-wider text-indigo-400">Sep</span><span className="-mt-1 text-lg font-semibold text-slate-200">{event.day}</span></div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2"><h3 className="text-sm font-semibold text-slate-200">{event.title}</h3><span aria-label={`Event type: ${event.type}`} className={`rounded-md px-2 py-1 text-[9px] font-semibold ring-1 ring-inset ${typeStyles[event.type]}`}>{event.type}</span></div>
                    <p className="mt-1.5 text-[11px] text-slate-600"><time dateTime={event.dateTime}>{event.dateLabel}</time></p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-slate-500"><span className="flex items-center gap-2"><span className="grid size-6 place-items-center rounded-full bg-indigo-500/15 text-[8px] font-semibold text-indigo-300">{event.initials}</span>Hosted by {event.host}</span><span>{event.attending} / {event.capacity} attending</span></div>
                  </div>
                  <div className="w-full shrink-0 sm:w-28">
                    <p className={`text-right text-[10px] font-medium ${statusStyles[event.status]}`}><span className="mr-1.5 inline-block size-1.5 rounded-full bg-current" />{event.status}</p>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]" aria-label={`${capacityPercent}% capacity`} role="img"><div className="h-full rounded-full bg-indigo-400" style={{ width: `${capacityPercent}%` }} /></div>
                  </div>
                </div>
              </li>;
            })}
          </ul> : <div className="px-5 py-16 text-center"><p className="text-sm font-medium text-slate-300">No matching events</p><p className="mt-1 text-xs text-slate-600">Try another search or event type.</p><button type="button" onClick={() => { setQuery(""); setEventType("All types"); }} className="mt-4 text-xs font-medium text-indigo-400 hover:text-indigo-300 focus-visible:outline-2 focus-visible:outline-indigo-400">Clear filters</button></div>}
        </div>

        <article className="rounded-xl border border-white/[0.07] bg-[#0d1118]/80 p-4 sm:p-5" aria-labelledby="calendar-title">
          <div className="flex items-center justify-between"><div><h2 id="calendar-title" className="text-sm font-semibold text-slate-200">September 2026</h2><p className="mt-1 text-[11px] text-slate-600">Community schedule</p></div><span className="rounded-md bg-indigo-400/10 px-2 py-1 text-[9px] font-medium text-indigo-300">{visibleEvents.length} events</span></div>
          <table className="mt-5 w-full table-fixed border-separate border-spacing-1 text-center">
            <caption className="sr-only">September 2026 event calendar</caption>
            <thead><tr>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <th key={day} scope="col" className="pb-2 text-[9px] font-semibold uppercase text-slate-600"><span className="sm:hidden">{day.slice(0, 1)}</span><span className="hidden sm:inline">{day}</span></th>)}</tr></thead>
            <tbody>{calendarWeeks.map((week, weekIndex) => <tr key={weekIndex}>{week.map((day, dayIndex) => {
              const event = day ? eventsByDay.get(day) : undefined;
              return <td key={`${weekIndex}-${dayIndex}`} className="h-12 align-top"><div className={`relative flex h-full min-h-10 flex-col items-center rounded-md pt-2 text-[11px] ${day === 8 ? "bg-indigo-500 text-white" : day ? "text-slate-400 hover:bg-white/[0.03]" : "text-transparent"}`}><span>{day ?? "—"}</span>{event && <span className={`mt-1 size-1.5 rounded-full ${day === 8 ? "bg-white" : typeDotStyles[event.type]}`}><span className="sr-only">{event.title}</span></span>}</div></td>;
            })}</tr>)}</tbody>
          </table>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.05] pt-4">{(["Roleplay", "Training", "Community", "Staff"] as EventType[]).map((type) => <span key={type} className="flex items-center gap-1.5 text-[9px] text-slate-500"><span className={`size-1.5 rounded-full ${typeDotStyles[type]}`} />{type}</span>)}</div>
        </article>
      </div>
    </section>
  );
}
