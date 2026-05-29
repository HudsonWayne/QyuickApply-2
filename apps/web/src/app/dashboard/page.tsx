export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl bg-emerald-600 p-8 text-white">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-white/80">
          Track your job applications and AI activity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-xl border p-6">
          <p className="text-muted-foreground">Jobs Found</p>
          <h2 className="text-3xl font-bold">284</h2>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-muted-foreground">Applications</p>
          <h2 className="text-3xl font-bold">96</h2>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-muted-foreground">Interviews</p>
          <h2 className="text-3xl font-bold">14</h2>
        </div>

        <div className="rounded-xl border p-6">
          <p className="text-muted-foreground">Success Rate</p>
          <h2 className="text-3xl font-bold text-emerald-500">
            23%
          </h2>
        </div>
      </div>
    </div>
  );
}