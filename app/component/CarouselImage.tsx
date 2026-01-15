import Image, { StaticImageData } from "next/image";

export default function CauroselImage({ img }: { img: StaticImageData }) {
  return (
    <div className="min-w-[200px] flex justify-center">
      <Image
        src={img}
        width="145"
        height="55"
        alt="Carousel images"
        className="w-[140px] h-[auto] border-1 object-contain"
      />
    </div>
  );
}


