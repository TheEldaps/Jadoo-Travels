import CarouselImage from "./CarouselImage";
import CarouselImage1 from "../../public/CarouselImage1.png";
import CarouselImage2 from "../../public/CarouselImage2.png";
import CarouselImage3 from "../../public/CarouselImage3.png";
import CarouselImage4 from "../../public/CarouselImage4.png";
import CarouselImage5 from "../../public/CarouselImage5.png";

const images = [
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
];

export default function CarouselSection() {
  return (
    <section className="overflow-hidden">
      <div className="my-[100px] border-y py-[50px]">
        <div className="flex w-max animate-carousel gap-12">

          {images.map((img, i) => (
            <CarouselImage key={i} img={img} />
          ))}


          {images.map((img, i) => (
            <CarouselImage key={`dup-${i}`} img={img} />
          ))}
        </div>
      </div>
    </section>
  );
}
