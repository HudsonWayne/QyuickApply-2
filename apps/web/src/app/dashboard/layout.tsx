import type { ReactNode } from "react";
import Link from "next/link";
import {
  Briefcase,
  FileText,
  LayoutDashboard,
  Settings,
  Sparkles,
  User,
  Bell,
  Search,
} from "lucide-react";

const navItems = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Jobs",
    href: "/dashboard/jobs",
    icon: Briefcase,
  },
  {
    name: "Applications",
    href: "/dashboard/applications",
    icon: FileText,
  },
  {
    name: "AI Assistant",
    href: "/dashboard/ai",
    icon: Sparkles,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <aside className="w-72 border-r border-slate-800 bg-slate-900">
        <div className="border-b border-slate-800 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 font-bold text-white">
              QA
            </div>

            <div>
              <h1 className="font-bold text-white">
                Quick Apply
              </h1>

              <p className="text-sm text-slate-400">
                AI Job Automation
              </p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-72 border-t border-slate-800 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white">
              <User size={18} />
            </div>

            <div>
              <p className="text-sm font-medium text-white">
                Wayne
              </p>

              <p className="text-xs text-slate-400">
                Premium Plan
              </p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
          <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
            <Search size={18} className="text-slate-400" />
            <input
              placeholder="Search jobs..."
              className="bg-transparent text-sm text-white outline-none"
            />
          </div>

          <button className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-slate-300">
            <Bell size={18} />
          </button>
        </header>

        <main className="flex-1 bg-slate-950 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}