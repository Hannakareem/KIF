import ProgramsList from "../../components/programs/ProgramsList";
import programs from "../../data/programs.json";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-foreground)]">
      <ProgramsList items={programs} />
    </main>
  );
}
