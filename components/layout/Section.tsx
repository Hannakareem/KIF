export default function Section({ children, className = "py-16" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`bg-[var(--color-bg)] text-[var(--color-foreground)] ${className}`}>
      {children}
    </section>
  );
}
