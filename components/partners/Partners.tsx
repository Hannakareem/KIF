import Image from "next/image";
import Container from "../layout/Container";
import PageHeader from "../layout/PageHeader";
import type { PartnerLogo } from "../../lib/types";

export default function Partners({ logos }: { logos?: PartnerLogo[] }) {
  const partnerLogos = logos ?? [];

  return (
    <section className="py-16">
      <Container>
        <PageHeader title="Partners" subtitle="Trusted partners and collaborators who make KIF possible." />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {partnerLogos.map((src, i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-zinc-900 rounded-lg">
              <Image src={src} alt={`Partner ${i + 1}`} width={160} height={64} className="object-contain" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
