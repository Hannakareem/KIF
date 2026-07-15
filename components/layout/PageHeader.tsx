export default function PageHeader({
  title,
  subtitle,
  eyebrow,
  description,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <div className="text-center mb-8">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
      {description && <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}
