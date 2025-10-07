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
    <li className="flex mb-[40px] items-center">
      <Image
        src={img}
        width="50"
        height="50"
        alt="Icon for booking steps"
        className="mr-[15px] w-[45px] h-[45px]"
      />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  );
}
