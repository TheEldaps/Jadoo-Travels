import Nav from "./component/Nav";
import HeroSection from "./component/Hero";
import CategorySection from "./component/CategorySection";

export default function Home() {
  return (
    <header>
      <Nav />
      <HeroSection />
      <CategorySection />
    </header>
  );
}
