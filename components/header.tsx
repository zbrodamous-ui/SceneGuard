import { Icon } from "@/components/icons";

export function Header({ section = "Dashboard" }: { section?: string }) {
  return (
    <header className="flex h-[76px] items-center justify-between border-b border-white/[0.06] px-5 sm:px-8">
      <div className="flex items-center gap-3 lg:hidden">
        <div className="grid size-8 place-items-center rounded-lg bg-indigo-500"><div className="size-3.5 rotate-45 rounded-[3px] border-2 border-white" /></div>
        <span className="text-sm font-semibold">SceneGuard</span>
      </div>
      <p className="hidden text-xs text-slate-500 lg:block">Ridgeview Roleplay / <span className="text-slate-300">{section}</span></p>
      <div className="flex items-center gap-2 sm:gap-4">
        <button type="button" aria-label="Notifications" className="relative grid size-9 place-items-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white">
          <Icon name="bell" className="size-[18px]" />
          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-indigo-400 ring-2 ring-[#080b10]" />
        </button>
        <div className="h-5 w-px bg-white/[0.08]" />
        <button type="button" className="flex items-center gap-2.5 rounded-lg p-1.5 text-left transition hover:bg-white/5">
          <div className="grid size-8 place-items-center rounded-lg bg-slate-800 text-[11px] font-semibold text-slate-200 ring-1 ring-white/10">AM</div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-slate-200">Alex Morgan</p>
            <p className="text-[10px] text-slate-600">Owner</p>
          </div>
        </button>
      </div>
    </header>
  );
}
