import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-6 px-6 py-4 border-b" style={{ borderColor: "var(--color-border)" }}>
      <Link href="/" className="font-semibold" style={{ color: "var(--color-primary)" }}>
        Turnkey Kitchens
      </Link>
      <Link href="/kitchens" className="hover:opacity-70">Kitchens</Link>
      <Link href="/dashboard" className="hover:opacity-70">Dashboard</Link>
      <Link href="/about" className="hover:opacity-70">About</Link>
    </nav>
  );
}