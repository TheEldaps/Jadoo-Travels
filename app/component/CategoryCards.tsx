import Image from "next/image";

export default function CategoryCards({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) {
  return (
    <li>
      <Image src={imageSrc} width="100" height="100" alt="Service image" />
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
}
