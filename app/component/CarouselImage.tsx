import Image, { StaticImageData } from "next/image";

export default function CauroselImage({ img }: { img: StaticImageData }) {
  return (
    <Image
      src={img}
      width="145"
      height="55"
      alt="Carousel images"
      className="w-[140px] h-[auto] border-1 "
    />
  );
}
