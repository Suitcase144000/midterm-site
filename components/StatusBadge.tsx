type Status = "leased" | "available" | "pending";

export default function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    leased: "bg-green-100 text-green-800",
    available: "bg-zinc-100 text-zinc-600",
    pending: "bg-yellow-100 text-yellow-800",
  };

  return (
    <span className={`text-xs font-medium px-2 py-1 rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}