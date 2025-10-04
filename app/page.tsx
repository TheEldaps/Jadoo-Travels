import Nav from "./component/Nav";
import HeroSection from "./component/Hero";
import CategorySection from "./component/CategorySection";
import DestinationSection from "./component/DestinationSection";

export default function Home() {
  return (
    <header>
      <Nav />
      <HeroSection />
      <CategorySection />
      <DestinationSection />
    </header>
  );
}
