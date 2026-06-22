import Card from "../ui/Card";
import Container from "../layout/Container";
import PageHeader from "../layout/PageHeader";
import type { Speaker } from "../../lib/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Speakers({ speakersData }: { speakersData?: Speaker[] }) {
  const list = speakersData ?? [];

  return (
    <section className="py-16">
      <Container>
        <PageHeader title="Speakers" subtitle="Featured speakers from industry, government and the creative economy. More speakers will be announced soon." />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {list.map((s) => (
            <Card key={s.id} className="text-center">
              <div className="mx-auto w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xl font-bold">{initials(s.name)}</div>
              <div className="mt-4">
                <div className="font-semibold">{s.name}</div>
                {s.title && <div className="text-sm text-zinc-400 mt-1">{s.title}</div>}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
