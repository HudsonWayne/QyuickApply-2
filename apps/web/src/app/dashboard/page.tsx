export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 p-8 text-white">
        <h1 className="text-4xl font-bold">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-lg text-blue-100">
          Let's find and apply to your next opportunity.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-slate-400">
            Jobs Found
          </h3>

          <p className="mt-3 text-4xl font-bold text-white">
            284
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-slate-400">
            Applications
          </h3>

          <p className="mt-3 text-4xl font-bold text-white">
            96
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-slate-400">
            Interviews
          </h3>

          <p className="mt-3 text-4xl font-bold text-white">
            14
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-slate-400">
            Success Rate
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-400">
            23%
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
          <h2 className="mb-4 text-xl font-bold text-white">
            Recent Applications
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl bg-slate-800 p-4 text-slate-200">
              Senior Frontend Developer
            </div>

            <div className="rounded-xl bg-slate-800 p-4 text-slate-200">
              Full Stack Engineer
            </div>

            <div className="rounded-xl bg-slate-800 p-4 text-slate-200">
              React Developer
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-xl font-bold text-white">
            AI Insights
          </h2>

          <p className="text-slate-400">
            Your profile currently matches 82% of remote
            software engineering jobs.
          </p>
        </div>
      </div>
    </div>
  );
}