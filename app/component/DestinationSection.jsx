import React from "react";
import DestinationCard from "./DestinationCard";
import Destination1 from "../../public/Destination 1.png";
import Destination2 from "../../public/Destination 2.png";
import Destination3 from "../../public/Destination 3.png";

export default function Destinations() {
  return (
    <section>
      <h3 className="font-[poppins] font-medium text-center mb-[20px]">
        Top Selling
      </h3>
      <h2 className="font-[volkhov] text-4xl text-[#14183E] font-bold text-center mb-[50px]">
        Top Destinations{" "}
      </h2>

      <section className="flex justify-evenly px-[60px]">
        <DestinationCard
          img={Destination1}
          location="Rome, Italy"
          price="$4.3k"
          triplength="12 Days Trip"
        />
        <DestinationCard
          img={Destination2}
          location="London, UK"
          cost="$5.5k"
          triplength="10 Days Trip"
        />
        <DestinationCard
          img={Destination3}
          location="Full Europe"
          cost="$15k"
          triplength="28 Days Trip"
        />
      </section>
    </section>
  );
}
