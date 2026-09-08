"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon, type IconName } from "@/components/icons";

const navigation: { label: string; icon: IconName; href: string }[] = [
  { label: "Dashboard", icon: "dashboard", href: "/" },
  { label: "Staff Actions", icon: "staff", href: "/staff-actions" },
  { label: "Reports & Appeals", icon: "reports", href: "#" },
  { label: "Events", icon: "events", href: "#" },
  { label: "Server Status", icon: "server", href: "#" },
  { label: "Settings", icon: "settings", href: "#" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-white/[0.06] bg-[#0b0e14]/90 px-4 py-6 lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-3">
        <div className="relative grid size-9 place-items-center rounded-xl bg-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.25)]">
          <div className="size-4 rotate-45 rounded-[4px] border-2 border-white" />
          <span className="absolute size-1.5 rounded-full bg-white" />
        </div>
        <div>
          <p className="text-[15px] font-semibold tracking-tight text-white">SceneGuard</p>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">Community Ops</p>
        </div>
      </div>

      <nav className="mt-10 space-y-1" aria-label="Primary navigation">
        {navigation.map((item) => {
          const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href === "#" ? item.label : item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-500/10 text-indigo-300"
                  : "text-slate-500 hover:bg-white/[0.04] hover:text-slate-200"
              }`}
            >
              <Icon name={item.icon} className="size-[18px]" />
              {item.label}
              {isActive && <span className="ml-auto size-1.5 rounded-full bg-indigo-400" />}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-indigo-400 to-violet-700 text-xs font-semibold text-white">RV</div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-slate-200">Ridgeview RP</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-slate-500"><span className="size-1.5 rounded-full bg-emerald-400" />All systems normal</p>
          </div>
          <Icon name="chevron" className="size-4 text-slate-600" />
        </div>
      </div>
    </aside>
  );
}
