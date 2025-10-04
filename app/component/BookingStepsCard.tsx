import { StaticImageData } from "next/image";
import Image from "next/image";

export default function BookingStepsCard({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: StaticImageData;
}) {
  return (
    <li>
      <Image src={img} width="50" height="50" alt="Icon for booking steps" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
}
