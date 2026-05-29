import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-400 p-8 text-white shadow-lg">
        <h1 className="text-4xl font-bold">Welcome back 👋</h1>

        <p className="mt-2 text-lg text-white/80">
          Let's find and apply to your next opportunity.
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Jobs Found
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">284</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Applications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">96</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Interviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">14</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-emerald-500">
              23%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CONTENT GRID */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="rounded-lg border p-3">
              Senior Frontend Developer
            </div>

            <div className="rounded-lg border p-3">
              Full Stack Engineer
            </div>

            <div className="rounded-lg border p-3">
              React Developer
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-muted-foreground">
              Your profile currently matches 82% of remote software engineering jobs.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}