import Card from "./CategoryCards";
// import category1 from "../../public/Category1.png";
// import category2 from "../../public/Category2.png";
// import category3 from "../../public/Category3.png";
// import category4 from "../../public/Category4.png";

import category1 from "../../public/Category 1.png";
import category2 from "../../public/Category 2.png";
import category3 from "../../public/Category 3.png";
import category4 from "../../public/Category 4.png";

export default function CategorySection() {
  return (
    <section className="px-[30px] mb-[150px]">
      <h3 className="font-[poppins] font-medium text-center mb-[20px]">
        CATEGORY
      </h3>
      <h2 className="font-[volkhov] text-4xl text-[#14183E] font-bold text-center mb-[50px]">
        We Offer Best Services
      </h2>

      <ul className="flex justify-evenly gap-[7rem]">
        <Card
          image={category1}
          description="Built Wicket longer admire do barton vanity itself do in it."
          title="Calculated Weather"
        />

        <Card
          image={category2}
          description="Engrossed listening. Park gate sell they west hard for the."
          title="Best Flights"
        />
        <Card
          image={category3}
          description="Barton vanity itself do in it. Preferd to men it engrossed listening. "
          title="Local Events"
        />
        <Card
          image={category4}
          description="We deliver outsourced aviation services for military customers"
          title="Customization"
        />
      </ul>
    </section>
  );
}
