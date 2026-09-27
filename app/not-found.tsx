import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="mb-8 text-gray-600">
        The kitchen you&apos;re looking for doesn&apos;t exist — or it moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded-md font-medium"
      >
        Back to home →
      </Link>
    </div>
  );
}