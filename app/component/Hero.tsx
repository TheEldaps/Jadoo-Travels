import Image from "next/image";
import playButton from "../../public/Play button.png";
import HeroImage from "../../public/HeroImage.png";

export default function Hero() {
  return (
    <section className="flex justify-evenly pt-[30px] px-[50px] mb-[200px]">
      <section className="pt-10 max-w-[50%]">
        <h3 className="text-[#DF6951] text-[1.2rem] font-[poppins] font-bold my-2 mb-5">
          BEST DESTINATIONS AROUND THE WORLD
        </h3>

        <h1 className="font-[volkhov] text-[#181E4B] text-[5rem] font-bold leading-[80px] tracking-tighter">
          Travel,{" "}
          <span className="relative inline-block">
            <span className="relative z-10">enjoy</span>
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 -bottom-1 z-0 w-full h-3 bg-no-repeat bg-center bg-contain bg-[url('/UnderlineDecoreEdit.png')]"
            />
          </span>{" "}
          and live a new and full life
        </h1>

        <p className="mt-[20px] font-[poppins] text-justify max-w-[80%]">
          Built wicket longer admire do barton vanity itself do in it.
          Prefferred to sportsmen it engrossed listening.Park gate sell they
          west hard for the.
        </p>

        <div className="flex gap-10 items-center mt-[20px]  ">
          <button className="px-5 py-3 bg-[#F1A501] font-[poppins] rounded-[0.5rem] text-white text-[0.85rem] cursor-pointer">
            Find out more
          </button>

          <button className="flex items-center cursor-pointer">
            <Image
              src={playButton}
              width="112"
              height="112"
              alt="playbutton"
              className="w-[60px] h-[60px] mt-[12px]"
            />
            <span className="font-[poppins] text-[0.85rem]">Play Demo</span>
          </button>
        </div>
      </section>

      <section>
        <Image
          src={HeroImage}
          height="784"
          width="900"
          alt="hero section image"
          className="w-"
        />
      </section>
    </section>
  );
}
