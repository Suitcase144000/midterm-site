"use client";                                              // NEW
import { useEffect, useState } from "react";                // NEW
import { getKitchens } from "@/lib/api";
import type { Kitchen } from "@/lib/types";                 // NEW
import StatusBadge from "@/components/StatusBadge";

export default function DashboardPage() {                   // CHANGED: no async
  const [kitchens, setKitchens] = useState<Kitchen[]>([]);  // NEW
  const [loading, setLoading] = useState(true);             // NEW: true, we haven't heard back
  const [error, setError] = useState("");                   // NEW

  async function load() {                                   // NEW
    setLoading(true);
    setError("");
    try {
      setKitchens(await getKitchens());
    } catch (err) {
      console.error(err);
      setError("We couldn't load kitchen data right now.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {                                         // NEW
    load();
  }, []);

  // NEW: the three non-success states, checked before anything renders
  if (loading) return <main className="p-4 sm:p-8"><p>Loading kitchen data…</p></main>;
  if (error)
    return (
      <main className="p-4 sm:p-8">
        <p className="mb-3">{error}</p>
        <button onClick={load} className="border rounded-lg px-4 py-2">Try again</button>
      </main>
    );
  if (kitchens.length === 0)
    return <main className="p-4 sm:p-8"><p>No kitchens to show yet.</p></main>;

  // UNCHANGED from here down — moved below the checks so we never divide by zero
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