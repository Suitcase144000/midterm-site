import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">Turnkey Kitchens</h1>
      <p className="text-xl text-gray-600 mb-8">
        Your kitchen. Zero build-out. Cooking by Tuesday.
      </p>

      <p className="mb-4">
        Cloud kitchens changed the game back in the mid-2010s — brands
        realized they didn&apos;t need a dining room, just a kitchen and a
        delivery app. Then the pandemic turned that idea into the industry
        standard.
      </p>

      <p className="mb-4">
        We took it further. Think Reading Terminal Market in Philadelphia,
        but for delivery brands: walk into a fully-equipped stall instead of
        a construction site. Space, equipment, POS, delivery integrations —
        all live before you sign.
      </p>

      <p className="mb-8">
        No permits to chase. No contractor ghosting you. No six-month lease
        fight. Just turn the burner on.
      </p>

      <div className="flex gap-4">
        <Link
          href="/kitchens"
          className="px-6 py-3 bg-black text-white rounded-md font-medium"
        >
          Browse available kitchens →
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 border border-black rounded-md font-medium"
        >
          See how it works →
        </Link>
      </div>
    </div>
  );
}