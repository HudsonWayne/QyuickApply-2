// apps/web/src/app/dashboard/layout.tsx

import type { ReactNode } from "react";
import Link from "next/link";

const navItems = [
  { name: "Overview", href: "/dashboard" },
  { name: "Jobs", href: "/dashboard/jobs" },
  { name: "Applications", href: "/dashboard/applications" },
  { name: "Resume", href: "/dashboard/resume" },
  { name: "AI Assistant", href: "/dashboard/ai" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-white">
        <div className="border-b p-6">
          <h1 className="text-xl font-bold">Quick Apply</h1>
          <p className="text-sm text-gray-500">
            AI Job Application Platform
          </p>
        </div>

        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
}