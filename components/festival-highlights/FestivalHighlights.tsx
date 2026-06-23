import DomeGallery from "./DomeGallery";
import Container from "../layout/Container";

const images = [
  "/images/highlights/1.png",
  "/images/highlights/2.png",
  "/images/highlights/3.png",
  "/images/highlights/4.png",
  "/images/highlights/5.png",
];

export default function FestivalHighlights() {
  return (
    <section className="bg-black text-white py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light">
            FESTIVAL HIGHLIGHTS
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Experience innovation, startups, technology and
            entrepreneurship through immersive showcases.
          </p>
        </div>

        <div className="h-[800px]">
          <DomeGallery
            images={images}
            grayscale={false}
            fit={0.65}
            minRadius={700}
            openedImageWidth="700px"
            openedImageHeight="450px"
            imageBorderRadius="24px"
            openedImageBorderRadius="24px"
          />
        </div>
      </Container>
    </section>
  );
}