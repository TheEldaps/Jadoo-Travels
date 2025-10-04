import Image, { StaticImageData } from "next/image";

export default function DestinationCard({
  img,
  location,
  price,
  triplength,
}: {
  img: StaticImageData;
  location: string;
  price: string;
  triplength: string;
}) {
  return (
    <section>
      <Image src={img} height="457" width="314" alt="Destination pictures" />
      <div>
        <div>{location}</div>
        <div>{price}</div>
        <div>{triplength}</div>
      </div>
    </section>
  );
}
