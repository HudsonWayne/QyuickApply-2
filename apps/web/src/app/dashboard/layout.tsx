import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main area */}
        <div className="flex flex-1 flex-col">
          <Topbar />

          <main className="flex-1 p-6 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}