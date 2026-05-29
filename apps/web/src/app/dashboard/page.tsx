// apps/web/src/app/dashboard/page.tsx

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome to Quick Apply
      </h1>

      <p className="mt-2 text-gray-600">
        Your AI-powered job application assistant.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-semibold">Jobs Found</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-semibold">Applications</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <h2 className="font-semibold">Interviews</h2>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}