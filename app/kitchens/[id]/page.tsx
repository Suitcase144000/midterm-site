import { getKitchens } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function KitchenDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const kitchens = await getKitchens();
  const kitchen = kitchens.find((k) => k.id === id);

  if (!kitchen) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">{kitchen.name}</h1>
      <p>{kitchen.cuisine} · {kitchen.sqft} sqft</p>
      <p>Status: {kitchen.status}</p>
      <p>Monthly rate: ${kitchen.monthlyRate}</p>
      <p>Delivery: {kitchen.deliveryPlatforms.join(", ") || "None yet"}</p>
    </main>
  );
}