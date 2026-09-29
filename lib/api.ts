// lib/api.ts
import { Kitchen } from "./types";

const mockKitchens: Kitchen[] = [
  {
    id: "1",
    name: "Bahn Mi Bros",
    cuisine: "Vietnamese",
    sqft: 320,
    status: "leased",
    monthlyRate: 2400,
    deliveryPlatforms: ["grubhub", "ubereats"],
    occupancyPct: 92,
    revenueToday: 840,
  },
  {
    id: "2",
    name: "Unit 2",
    cuisine: "—",
    sqft: 280,
    status: "available",
    monthlyRate: 2100,
    deliveryPlatforms: [],
    occupancyPct: 0,
    revenueToday: 0,
  },
  // add 2-4 more so your directory/dashboard have something real to render
];

export async function getKitchens(): Promise<Kitchen[]> {
  return mockKitchens;
}