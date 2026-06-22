export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
