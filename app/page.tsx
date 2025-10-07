import Nav from "./component/Nav";
import HeroSection from "./component/Hero";
import CategorySection from "./component/CategorySection";
import DestinationSection from "./component/DestinationSection";
import BookingSection from "./component/BookingSection";
import TestimonialSection from "./component/TestimonialSection";
import CarouselSection from "./component/CarouselSection";
import SubscriptionSection from "./component/SubscriptionSection";

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
        <TestimonialSection />
        <CarouselSection />
        <SubscriptionSection />
      </main>

      <footer></footer>
    </>
  );
}
