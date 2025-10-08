import Image from "next/image";
import BookingImage from "../../public/BookingImage.png";
import BookingStepsCard from "./BookingStepsCard";
import BookingStep1 from "../../public/BookingStep1.png";
import BookingStep2 from "../../public/BookingStep2.png";
import BookingStep3 from "../../public/BookingStep3.png";

export default function BookingSection() {
  return (
    <section className="flex max-w-[1200px] justify-between px-[50px] mb-[50px] text-[#5E6282]">
      <section className=" flex flex-col justify-center">
        <h3 className="font-[poppins] font-medium mb-[10px] text-[#5E6282]">
          Easy and Fast
        </h3>
        <h2 className="font-[volkhov] text-4xl text-[#14183E] font-bold mb-[40px]">
          Book Your Next Trip <br />
          In 3 Easy steps
        </h2>
        <ul>
          <BookingStepsCard
            img={BookingStep1}
            title="Choose Destination"
            description="Lorem lorem lorem lorem lorem lorem ipsum ipsum ipsum"
          />

          <BookingStepsCard
            img={BookingStep2}
            title="Make Payment"
            description="Lorem lorem lorem lorem lorem lorem ipsum ipsum ipsum"
          />

          <BookingStepsCard
            img={BookingStep3}
            title="Reach Airport on Selected Date"
            description="Lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
        </ul>
      </section>
      <section className=" max-h-[500px] ">
        <Image
          src={BookingImage}
          width="655"
          height="789"
          alt="Booking Section Image"
          className="block max-w-[550px] h-[500px]  object-cover"
        />
      </section>
    </section>
  );
}
