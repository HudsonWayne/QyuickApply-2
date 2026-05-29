"use client";

import { Input } from "@/components/ui/input";
import { Bell, User } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="w-full max-w-md">
        <Input placeholder="Search jobs, companies..." />
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-muted">
          <Bell className="h-5 w-5" />
        </button>

        <button className="rounded-full p-2 hover:bg-muted">
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}