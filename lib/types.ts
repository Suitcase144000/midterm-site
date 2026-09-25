// lib/types.ts
export type Kitchen = {
  id: string;
  name: string;
  cuisine: string;
  sqft: number;
  status: "leased" | "available" | "pending";
  monthlyRate: number;
  deliveryPlatforms: string[];
  occupancyPct: number;
  revenueToday: number;
};