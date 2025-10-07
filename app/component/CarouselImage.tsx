import Image, { StaticImageData } from "next/image";

export default function CouroselImage({ img }: { img: StaticImageData }) {
  return (
    <Image
      src={img}
      width="50"
      height="50"
      alt="Carousel images"
      className="w-[100px] h-[50px] "
    />
  );
}
