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
    <section className=" rounded-3xl  relative min-h-[500px] min-w-[300px] shadow-2xl">
      <Image
        src={img}
        height={200}
        width={200}
        alt="Destination pictures"
        className="object-cover w-full h-full rounded-3xl"
      />

      <div className="font-[poppins] text-[#5E6282] w-[100%] bg-white px-[10px] py-[10px] pb-[20px] absolute bottom-0 rounded-b-3xl">
        <div className="flex justify-between text-[1.1rem] px-[10px] py-[10px]  mb-[10px] font-medium">
          <div className="">{location}</div>
          <div>{price}</div>
        </div>
        <div className="text-[1rem]  px-[10px]">
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
