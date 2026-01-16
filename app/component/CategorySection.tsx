import Card from "./CategoryCards";
// import category1 from "../../public/Category1.png";
// import category2 from "../../public/Category2.png";
// import category3 from "../../public/Category3.png";
// import category4 from "../../public/Category4.png";

import CategoryDecore from "../../public/CategoryShinnyDecor.png";
import category1 from "../../public/Category 1.png";
import category2 from "../../public/Category 2.png";
import category3 from "../../public/Category 3.png";
import category4 from "../../public/Category 4.png";
import Image from "next/image";

export default function CategorySection() {
  return (
    <section id='category' className="px-[30px] mb-[200px] relative lg:px-[10%] overflow-hidden">
      <h3 className="font-[poppins] font-medium text-center mb-[20px] text-[#5E6282]">
        CATEGORY
      </h3>
      <h2 className="font-[volkhov] text-4xl text-[#14183E] font-bold text-center mb-[100px]">
        We Offer Best Services
      </h2>

      <Image
        src={CategoryDecore}
        width="153"
        height="166"
        alt="category section decoration"
        className="absolute w-[15%] lg:w-[120px] right-[0px] lg:right-[-30] top-[-30px] lg:top-[0] "
      />

      <ul className="flex justify-evenly gap-[20px] gap-y-[50px] flex-wrap ">
        <Card
          image={category1}
          description="Built Wicket longer admire do barton vanity itself do in it."
          title="Calculated Weather"
        />

        <div className="relative">
          <div className="shadow-xl rounded-3xl pb-[20px] z-[10] bg-white">
            <Card
              image={category2}
              description="Engrossed listening. Park gate sell they west hard for the."
              title="Best Flights"
            />
          </div>
          <div className="absolute rounded-tl-4xl rounded-br-2xl bg-[#DF6951] z-[-1] w-[100px] h-[100px] left-[-30] bottom-[-30]"></div>
        </div>
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
