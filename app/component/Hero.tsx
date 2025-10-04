import Image from "next/image";
import playButton from "../../public/Play button.png";
import HeroImage from "../../public/HeroImage.png";

export default function Hero() {
  return (
    <section>
      <section>
        <h3>BEST DESTINATIONS AROUND THE WORLD</h3>

        <h1>Travel, enjoy and live a new and full life</h1>

        <p>
          Built wicket longer admire do barton vanity itself do in it.
          <br /> Prefferred to sportsmen it engrossed listening.Park gate sell
          they west hard for the.
        </p>

        <div>
          <button>Find out more</button>
          <Image src={playButton} width="112" height="112" alt="playbutton" />
        </div>
      </section>
      <section>
        <Image
          src={HeroImage}
          height="784"
          width="764"
          alt="hero section image"
        />
      </section>
    </section>
  );
}
