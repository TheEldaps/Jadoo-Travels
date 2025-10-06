import CarouselImage from "./CouroselImage";
import CarouselImage1 from "../../public/CarouselImage1.png";
import CarouselImage2 from "../../public/CarouselImage2.png";
import CarouselImage3 from "../../public/CarouselImage3.png";

export default function CarouselSection() {
  return (
    <section>
      <div className="flex justify-evenly items-center">
        <CarouselImage img={CarouselImage1} />
        <CarouselImage img={CarouselImage2} />
        <CarouselImage img={CarouselImage3} />
      </div>
    </section>
  );
}
