export default function Highlights({ items }: { items: { id: number; title: string; subtitle: string; icon?: string }[] }) {
  const list = items ?? [];

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Why Attend KIF?</h2>
          <p className="mt-2 text-zinc-400 max-w-2xl mx-auto">Discover, learn, network and celebrate innovation across multiple tracks and experiences.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {list.map((item) => (
            <div key={item.id} className="bg-zinc-900 rounded-2xl p-6 flex gap-4 items-start">
              <div className="badge--primary text-lg font-bold">
                {item.icon ?? item.title.slice(0, 1)}
              </div>

              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-zinc-400 mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
