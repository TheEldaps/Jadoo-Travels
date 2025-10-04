import Card from "./CategoryCards";
import category1 from "../../public/Category1.png";
import category2 from "../../public/Category2.png";
import category3 from "../../public/Category3.png";
import category4 from "../../public/Category4.png";

export default function CategorySection() {
  return (
    <section>
      <h3>CATEGORY</h3>
      <h2>We Offer Best Services</h2>

      <ul className="flex">
        <Card
          image={category1}
          description="hello hello hello hello hello hello ehllo"
          title="Calculated Weather"
        />

        <Card
          image={category2}
          description="hello hello hello hello hello hello ehllo"
          title="Calculated Weather"
        />
        <Card
          image={category3}
          description="hello hello hello hello hello hello ehllo"
          title="Calculated Weather"
        />
        <Card
          image={category4}
          description="hello hello hello hello hello hello ehllo"
          title="Calculated Weather"
        />
      </ul>
    </section>
  );
}
