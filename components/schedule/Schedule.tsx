"use client";

import { useMemo, useState } from "react";
import Container from "../layout/Container";
import PageHeader from "../layout/PageHeader";
import type { Slot } from "../../lib/types";
import Card from "../ui/Card";

function DayColumn({ title, slots }: { title: string; slots: Slot[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {slots.map((s) => (
          <div key={s.time} className="flex items-start gap-4">
            <div className="w-28 text-sm text-zinc-400">{s.time}</div>
            <div className="flex-1">
              <Card className="p-4">
                <div className="font-medium text-white">{s.title}</div>
                {s.speakers && <div className="text-sm text-zinc-400 mt-1">{s.speakers}</div>}
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Schedule({ friday, saturday }: { friday?: Slot[]; saturday?: Slot[] }) {
  const f = friday ?? [];
  const s = saturday ?? [];
  const [day, setDay] = useState<"all" | "friday" | "saturday">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list: Slot[] = [];
    if (day === "all" || day === "friday") list = list.concat(f);
    if (day === "all" || day === "saturday") list = list.concat(s);
    if (!q) return list;
    return list.filter((item) => (item.title + " " + (item.speakers || "")).toLowerCase().includes(q));
  }, [f, s, day, query]);

  return (
    <section className="py-16">
      <Container>
        <PageHeader title="Schedule" subtitle="Two-day overview — main stages, sessions and highlights. Full schedule available on the events page." />

        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={() => setDay("all")} className={`btn ${day === "all" ? "btn--primary" : "btn--outline"}`}>All</button>
          <button onClick={() => setDay("friday")} className={`btn ${day === "friday" ? "btn--primary" : "btn--outline"}`}>Friday</button>
          <button onClick={() => setDay("saturday")} className={`btn ${day === "saturday" ? "btn--primary" : "btn--outline"}`}>Saturday</button>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search sessions or speakers..." className="ml-4 input" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {day === "all" || day === "friday" ? <DayColumn title="Friday — Day 1" slots={f} /> : null}
          {day === "all" || day === "saturday" ? <DayColumn title="Saturday — Day 2" slots={s} /> : null}
        </div>

        {query && (
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Search results</h3>
            <div className="space-y-4">
              {filtered.map((item) => (
                <div key={item.time + item.title} className="flex items-start gap-4">
                  <div className="w-28 text-sm text-zinc-400">{item.time}</div>
                  <div className="flex-1">
                    <Card className="p-4">
                      <div className="font-medium text-white">{item.title}</div>
                      {item.speakers && <div className="text-sm text-zinc-400 mt-1">{item.speakers}</div>}
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
