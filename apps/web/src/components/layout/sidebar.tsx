"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Briefcase,
  Sparkles,
  Settings,
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Jobs",
    href: "/dashboard/jobs",
    icon: Briefcase,
  },
  {
    name: "AI Apply",
    href: "/dashboard/ai",
    icon: Sparkles,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-950">
      {/* Logo */}
      <div className="border-b border-zinc-800 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/20">
            <Sparkles className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              Quick Apply
            </h1>

            <p className="text-xs text-zinc-500">
              AI Job Automation
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2 p-4">
        {items.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  !isActive && "group-hover:scale-110"
                )}
              />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Card */}
      <div className="p-4">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <Sparkles className="h-5 w-5 text-emerald-400" />
          </div>

          <h3 className="font-semibold text-white">
            AI Auto Apply
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            Let AI automatically apply to matching jobs while
            you focus on interviews.
          </p>

          <button className="mt-4 w-full rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-400">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
}