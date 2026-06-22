export default function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-zinc-900 rounded-2xl p-6 ${className}`}>{children}</div>
  );
}
