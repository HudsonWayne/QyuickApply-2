"use client";

import { Bell, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Topbar() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-8 backdrop-blur-xl">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Welcome back 👋
        </h1>

        <p className="text-sm text-zinc-400">
          Track jobs, applications and AI activity
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden lg:block">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

          <Input
            placeholder="Search jobs, companies..."
            className="
              w-80
              rounded-2xl
              border-zinc-800
              bg-zinc-900
              pl-11
              text-white
              placeholder:text-zinc-500
              focus:border-emerald-500
              focus:ring-emerald-500/20
            "
          />
        </div>

        {/* Notifications */}
        <button
          className="
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900
            text-zinc-400
            transition-all
            hover:border-emerald-500/40
            hover:text-white
          "
        >
          <Bell className="h-5 w-5" />

          <span
            className="
              absolute
              right-3
              top-3
              h-2
              w-2
              rounded-full
              bg-emerald-500
            "
          />
        </button>

        {/* User */}
        <button
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-zinc-800
            bg-zinc-900
            px-3
            py-2
            transition-all
            hover:border-zinc-700
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-emerald-400
              to-emerald-600
              font-semibold
              text-white
            "
          >
            W
          </div>

          <div className="hidden text-left md:block">
            <p className="text-sm font-medium text-white">
              Wayne
            </p>

            <p className="text-xs text-zinc-500">
              Pro Plan
            </p>
          </div>

          <ChevronDown className="h-4 w-4 text-zinc-500" />
        </button>
      </div>
    </header>
  );
}