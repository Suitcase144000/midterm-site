import { Kitchen } from "./types";

// Tuesday: swap for Patrick's n8n URL — the only line that changes
const KITCHENS_URL = "/kitchens.json";

export async function getKitchens(): Promise<Kitchen[]> {
  const res = await fetch(KITCHENS_URL);
  if (!res.ok) throw new Error("The server said " + res.status + ".");
  const data = await res.json();
  return data.map((k: Kitchen) => ({ ...k, id: String(k.id) }));
}