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
    <li className=" rounded-4xl px-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 max-w-[300px] ">
      <Image
        src={image}
        width="100"
        height="100"
        alt="Service image"
        className="mx-auto w-[80px] h-[70px] my-[15px]"
      />
      <h4 className="text-center  font-[poppins] text-[#1E1D4C] font-semibold mb-[20px]">
        {title}
      </h4>
      <p className="  text-center text-[#5E6282] font-[poppins] px-[5px] py-[5px]">
        {description}
      </p>
    </li>
  );
}
