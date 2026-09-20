import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/kitchens">Kitchens</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}