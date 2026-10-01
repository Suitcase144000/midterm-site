import { Kitchen } from "./types";


const KITCHENS_URL = "https://raw.githubusercontent.com/Suitcase144000/midterm-site/main/public/kitchens.json";
export async function getKitchens(): Promise<Kitchen[]> {
  const res = await fetch(KITCHENS_URL);
  if (!res.ok) throw new Error("The server said " + res.status + ".");
  const data = await res.json();
  return data.map((k: Kitchen) => ({ ...k, id: String(k.id) }));
}