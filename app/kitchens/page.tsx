"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getKitchens } from "@/lib/api";
import type { Kitchen } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";

export default function KitchensPage() {
  const [kitchens, setKitchens] = useState<Kitchen[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    try {
      setLoading(true);
      setError("");
      const data = await getKitchens();
      setKitchens(data);
    } catch {
      setError("We couldn't load kitchen data right now.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <main className="p-8">Loading kitchens...</main>;
  }

  if (error) {
    return (
      <main className="p-8">
        <p>{error}</p>
        <button onClick={load} className="mt-2 underline">
          Try again
        </button>
      </main>
    );
  }

  if (kitchens.length === 0) {
    return <main className="p-8">No kitchens to show yet.</main>;
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Kitchens</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kitchens.map((k) => (
          <Link
            key={k.id}
            href={`/kitchens/${k.id}`}
            className="block border rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">{k.name}</h2>
              <StatusBadge status={k.status} />
            </div>
            <p className="text-sm text-zinc-500">{k.cuisine}</p>
            <p className="text-sm mt-2">
              Occupancy: {k.occupancyPct}% · Revenue today: $
              {k.revenueToday}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}