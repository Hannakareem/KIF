import Image from "next/image";

const items = [
  { id: 1, src: "/images/visitors.png", value: "15,000+", label: "Visitors" },
  { id: 2, src: "/images/startups.png", value: "500+", label: "Startups" },
  { id: 3, src: "/images/speakers.png", value: "200+", label: "Speakers" },
  { id: 4, src: "/images/communities.png", value: "50+", label: "Communities" },
  { id: 5, src: "/images/product.png", value: "100+", label: "Product Showcases" },
];

export default function Stats() {
  return (
    <section className="px-10 pt-8">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">
          <Image
            src="/images/stats/visitors.png"
            alt="Visitors"
            width={70}
            height={70}
          />

          <div>
            <h3 className="text-xl">15,000+</h3>
            <p className="text-l">Visitors</p>
          </div>
        </div>

        <div className="h-16 w-px bg-gray-600" />

        <div className="flex items-center gap-4">
          <Image
            src="/images/stats/startups.png"
            alt="Startups"
            width={70}
            height={70}
          />

          <div>
            <h3 className="text-xl">500+</h3>
            <p className="text-l">Startups</p>
          </div>
        </div>

        <div className="h-16 w-px bg-gray-600" />

        <div className="flex items-center gap-4">
          <Image
            src="/images/stats/speakers.png"
            alt="Speakers"
            width={70}
            height={70}
          />

          <div>
            <h3 className="text-xl">200+</h3>
            <p className="text-l">Speakers</p>
          </div>
        </div>

        <div className="h-16 w-px bg-gray-600" />

        <div className="flex items-center gap-4">
          <Image
            src="/images/stats/communities.png"
            alt="Communities"
            width={70}
            height={70}
          />

          <div>
            <h3 className="text-xl">50+</h3>
            <p className="text-l">Communities</p>
          </div>
        </div>

        <div className="h-16 w-px bg-gray-600" />

        <div className="flex items-center gap-4">
          <Image
            src="/images/stats/product.png"
            alt="Showcases"
            width={70}
            height={70}
          />

          <div>
            <h3 className="text-xl">100+</h3>
            <p className="text-l">Product Showcases</p>
          </div>
        </div>
      </div>
    </section>
  );
}
