import Image, { StaticImageData } from "next/image";

export default function CarouselImage({ img }: { img: StaticImageData }) {
  return (
    <div className="min-w-[200px] flex-shrink-0 flex justify-center">
      <Image
        src={img}
        width={145}
        height={55}
        alt="Carousel images"
        className="w-[140px] object-contain"
      />
    </div>
  );
}


