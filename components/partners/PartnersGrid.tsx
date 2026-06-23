import PartnersGrid from "../../components/partners/PartnersGrid";
import partners from "../../data/partners.json";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-foreground)]">
      <PartnersGrid logos={partners} />
    </main>
  );
}