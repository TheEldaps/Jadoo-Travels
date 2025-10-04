import React from "react";
import DestinationCard from "./DestinationCard";
import Destination1 from "../../public/Destination1.png";
import Destination2 from "../../public/Destination2.png";
import Destination3 from "../../public/Destination3.png";

export default function Destinations() {
  return (
    <section>
      <DestinationCard
        img={Destination1}
        location="US"
        price="$43"
        triplength="12days"
      />
      {/* <DestinationCard />
      <DestinationCard /> */}
    </section>
  );
}
