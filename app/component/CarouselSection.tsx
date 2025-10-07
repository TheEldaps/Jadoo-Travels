import CarouselImage from "./CarouselImage";
import CarouselImage1 from "../../public/CarouselImage1.png";
import CarouselImage2 from "../../public/CarouselImage2.png";
import CarouselImage3 from "../../public/CarouselImage3.png";
import CarouselImage4 from "../../public/CarouselImage4.png";
import CarouselImage5 from "../../public/CarouselImage5.png";

export default function CarouselSection() {
  return (
    <section>
      <div className="flex justify-evenly items-center my-[100px] border-y-1">
        <CarouselImage img={CarouselImage1} />
        <CarouselImage img={CarouselImage2} />
        <CarouselImage img={CarouselImage3} />
        <CarouselImage img={CarouselImage4} />
        <CarouselImage img={CarouselImage5} />
      </div>
    </section>
  );
}
