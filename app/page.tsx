import Nav from "./component/Nav";
import HeroSection from "./component/Hero";
import CategorySection from "./component/CategorySection";
import DestinationSection from "./component/DestinationSection";
import BookingSection from "./component/BookingSection";

export default function Home() {
  return (
    <>
      <header className="mt-[30px]">
        <Nav />
      </header>

      <main>
        <HeroSection />
        <CategorySection />
        <DestinationSection />
        <BookingSection />
      </main>

      <footer></footer>
    </>
  );
}
