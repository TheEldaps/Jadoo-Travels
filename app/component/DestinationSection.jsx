import React from "react";
import Image from "next/image";
import DestinationCard from "./DestinationCard";
import Destination1 from "../../public/Destination 1.png";
import Destination2 from "../../public/Destination 2.png";
import Destination3 from "../../public/Destination 3.png";
import DestinationDecore from "../../public/DestinationDecore.png";

export default function Destinations() {
  return (
    <section id='destination' className=" py-[70px] lg:px-[10%] ">
      <h3 className="font-[poppins] font-medium text-center mb-[20px] text-[#5E6282]">
        Top Selling
      </h3>
      <h2 className="font-[volkhov] text-4xl text-[#14183E] font-bold text-center mb-[50px]">
        Top Destinations{" "}
      </h2>

      <section className="flex justify-evenly gap-[40px] px-[10%] lg:px-[20px] py-[20px] flex-wrap ">
        <DestinationCard
          img={Destination1}
          location="Rome, Italy"
          price="$4.3k"
          triplength="12 Days Trip"
        />
        <DestinationCard
          img={Destination2}
          location="London, UK"
          price="$5.5k"
          triplength="10 Days Trip"
        />
        <div className="flex relative ">
          <DestinationCard
            img={Destination3}
            location="Full Europe"
            price="$15k"
            triplength="28 Days Trip"
          />

          <Image
            src={DestinationDecore}
            width=""
            height=""
            alt="Decoration image for the destination section"
            className="absolute top-[120px] left-[270px]  w-[96px] h-[256px] z-[-1] "
          />
        </div>
      </section>
    </section>
  );
}
