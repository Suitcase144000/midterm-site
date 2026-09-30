"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getKitchens } from "@/lib/api";
import type { Kitchen } from "@/lib/types";
import StatusBadge from "@/components/StatusBadge";

export default function KitchenDetailPage() {
  const params = useParams<{ id: string }>();
  const [kitchen, setKitchen] = useState<Kitchen | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError("");
        const kitchens = await getKitchens();
        const found = kitchens.find((k) => k.id === params.id) ?? null;
        setKitchen(found);
      } catch {
        setError("We couldn't load kitchen data right now.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [params.id]);

  if (loading) {
    return <main className="p-8">Loading kitchen...</main>;
  }

  if (error) {
    return <main className="p-8">{error}</main>;
  }

  if (!kitchen) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-2">Kitchen not found</h1>
        <p className="mb-4">
          The kitchen you&apos;re looking for doesn&apos;t exist — or it moved.
        </p>
        <Link href="/kitchens" className="underline">
          Back to kitchens
        </Link>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{kitchen.name}</h1>
      <p>
        {kitchen.cuisine} · {kitchen.sqft} sqft
      </p>
<p className="flex items-center gap-2">
  Status: <StatusBadge status={kitchen.status} />
</p>
      <p>Monthly rate: ${kitchen.monthlyRate}</p>
      <p>Delivery: {kitchen.deliveryPlatforms.join(", ") || "None yet"}</p>
    </main>
  );
}