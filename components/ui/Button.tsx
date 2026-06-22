export default function Button({ children, className = "", onClick, href }: { children: React.ReactNode; className?: string; onClick?: () => void; href?: string }) {
  if (href) return <a href={href} className={`inline-flex items-center justify-center px-4 py-2 rounded-full bg-[var(--color-accent-2)] text-white ${className}`}>{children}</a>;
  return (
    <button onClick={onClick} className={`inline-flex items-center justify-center px-4 py-2 rounded-full bg-[var(--color-accent-2)] text-white ${className}`}>{children}</button>
  );
}
