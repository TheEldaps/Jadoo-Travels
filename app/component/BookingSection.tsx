import Image from "next/image";
import BookingImage from "../../public/BookingImage.png";
import BookingStepsCard from "./BookingStepsCard";
import BookingStep1 from "../../public/BookingStep1.png";
import BookingStep2 from "../../public/BookingStep2.png";
import BookingStep3 from "../../public/BookingStep3.png";

export default function BookingSection() {
  return (
    <section>
      <section>
        <h4>Easy and Fast</h4>
        <h2>Book Your Next Trip In 3 Easy steps</h2>
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
      <section>
        <Image
          src={BookingImage}
          width="655"
          height="789"
          alt="Booking Section Image"
        />
      </section>
    </section>
  );
}
