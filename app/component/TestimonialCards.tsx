import avatar from "../../public/Avatar.png";
import Image from "next/image";

export default function TestimonialCards({
  text,
  name,
  location,
}: {
  text: string;
  name: string;
  location: string;
}) {
  return (
    <div className="flex  max-w-[450px] font-[poppins] ">
      <div className="flex-none w-14 h-14 rounded-full overflow-hidden ring-4 ring-white shadow-sm">
        <Image
          src={avatar}
          alt="avatar image for testimonial "
          width={56}
          height={56}
          className="block"
        />
      </div>

      <div className="flex-1 bg-white rounded-2xl px-[20px] py-[30px] shadow-lg">
        <p className="text-lg text-[0.95rem] text-gray-700 leading-relaxed">
          {text}
        </p>

        <div className="mt-4">
          <p className="font-semibold text-[#14183E] mb-[5px]">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
}
