import Image, { StaticImageData } from "next/image";

export default function CouroselImage({ img }: { img: StaticImageData }) {
  return <Image src={img} width="" height="" alt="Carousel" />;
}
