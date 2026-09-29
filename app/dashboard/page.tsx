import { getKitchens } from "@/lib/api";
import StatusBadge from "@/components/StatusBadge";

export default async function DashboardPage() {
  const kitchens = await getKitchens();

  const totalRevenue = kitchens.reduce((sum, k) => sum + k.revenueToday, 0);
  const avgOccupancy =
    kitchens.reduce((sum, k) => sum + k.occupancyPct, 0) / kitchens.length;

  return (
    <main className="p-4 sm:p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="border rounded-lg p-4 flex-1">
          <p className="text-sm text-zinc-500">Total revenue today</p>
          <p className="text-2xl font-semibold">${totalRevenue.toLocaleString()}</p>
        </div>
        <div className="border rounded-lg p-4 flex-1">
          <p className="text-sm text-zinc-500">Average occupancy</p>
          <p className="text-2xl font-semibold">{avgOccupancy.toFixed(0)}%</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {kitchens.map((k) => (
          <div
            key={k.id}
            className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <div>
              <p className="font-medium">{k.name}</p>
              <p className="text-sm text-zinc-500">{k.occupancyPct}% occupied</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="font-semibold">${k.revenueToday.toLocaleString()}</p>
              <StatusBadge status={k.status} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}