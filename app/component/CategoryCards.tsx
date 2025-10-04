import Image from "next/image";
import { StaticImageData } from "next/image";

export default function CategoryCards({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <li>
      <Image src={image} width="100" height="100" alt="Service image" />
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
}
