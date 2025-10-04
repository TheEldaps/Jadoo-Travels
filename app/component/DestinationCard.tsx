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
    <section>
      <Image src={img} height="457" width="314" alt="Destination pictures" />
      <div>
        <div>{location}</div>
        <div>{price}</div>
        <div>
          <Image
            src={NavigationIcon}
            width="18"
            height="18"
            alt="Trip lenght icon"
          />
          {triplength}
        </div>
      </div>
    </section>
  );
}
