"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Briefcase, Sparkles, Settings } from "lucide-react";

const items = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Jobs", href: "/dashboard/jobs", icon: Briefcase },
  { name: "AI Apply", href: "/dashboard/ai", icon: Sparkles },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-background p-4">
      <div className="mb-8 text-xl font-bold text-emerald-500">
        Quick Apply
      </div>

      <nav className="flex flex-col gap-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted transition"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}