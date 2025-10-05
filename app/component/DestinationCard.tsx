import Image, { StaticImageData } from "next/image";
import NavigationIcon from "../../public/Navigation.png";

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
    <section className="rounded-3xl border-1 ">
      <Image
        src={img}
        height=""
        width=""
        alt="Destination pictures"
        className="h-[]"
      />
      <div className="font-[poppins] border-1">
        <div className="flex justify-between px-[10px]">
          <div>{location}</div>
          <div>{price}</div>
        </div>
        <div>
          <Image
            src={NavigationIcon}
            width="18"
            height="18"
            alt="Trip lenght icon"
            className="inline mr-2"
          />
          {triplength}
        </div>
      </div>
    </section>
  );
}
