"use client";

import { useMemo, useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Container from "../layout/Container";
import PageHeader from "../layout/PageHeader";
import type { Program } from "../../lib/types";

export default function Programs({ items }: { items?: Program[] }) {
  const programs = items ?? [];
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return programs;
    return programs.filter((p) => (p.title + " " + p.desc).toLowerCase().includes(q));
  }, [programs, query]);

  return (
    <section className="py-16">
      <Container>
        <PageHeader title="Programs" subtitle="Explore curated programs across innovation, sustainability, makers, and creative economy—designed for founders, creators and learners." />

        <div className="max-w-2xl mx-auto mb-8">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search programs..." className="w-full bg-zinc-900 border border-zinc-800 rounded-full px-4 py-3 text-white focus:outline-none" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Card key={p.id}>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-zinc-300">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between">
                <a href="#" className="text-[var(--color-accent)] font-medium hover:underline">Learn more</a>
                <Button href="#" className="bg-[var(--color-accent-2)]">Apply / Register</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
