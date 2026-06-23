import Image from "next/image";
import Container from "../layout/Container";
import PageHeader from "../layout/PageHeader";
import type { PartnerLogo } from "../../lib/types";

export default function Partners({ logos }: { logos?: PartnerLogo[] }) {
  const categories = [
    {
      title: "Government & Public Sector",
      logos: [
        "/partners/startupindia.png",
        "/partners/maker.png",
        "/partners/fablab.png",
        "/partners/ksid.png",
      ],
    },

    {
      title: "Industry Partners",
      logos: [
        "/partners/cii.png",
        "/partners/headstart.png",
        "/partners/tie.png",
        "/partners/stc.png",
        "/partners/ceies.png",
      ],
    },

    {
      title: "Ecosystem & Innovation Partners",
      logos: [
        "/partners/nsrcel.png",
        "/partners/kites.png",
        "/partners/yi.png",
        "/partners/xime.png",
        "/partners/kappo.png",
      ],
    },

    {
      title: "Community & Platform Partners",
      logos: [
        "/partners/thecue.png",
        "/partners/urbantrash.png",
        "/partners/im.png",
        "/partners/myop.png",
        "/partners/cafit.png",
        "/partners/pt.png",
      ],
    },

    {
      title: "Gift Partners",
      logos: [
        "/partners/fabus.png",
        "/partners/fn.png",
        "/partners/heal.png",
        "/partners/fulva.png",
        "/partners/bionest.png",
      ],
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <PageHeader
          title="Our Partners"
          subtitle="Trusted partners and collaborators who make KIF possible."
        />

        <div className="space-y-14">
          {categories.map((category, index) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="overflow-hidden">
                <div
                  className={`flex gap-6 ${
                    index % 2 === 0
                      ? "animate-marquee"
                      : "animate-marquee-reverse"
                  }`}
                >
                  {[...category.logos, ...category.logos].map((src, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 flex items-center justify-center p-5 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-orange-500 transition-all duration-300 min-w-[220px] h-[120px]"
                    >
                      <Image
                        src={src}
                        alt={`Partner ${i + 1}`}
                        width={160}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}