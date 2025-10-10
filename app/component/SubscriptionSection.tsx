import Image from "next/image";
import EnvelopeIcon from "../../public/EnvelopeIcon.png";
import DecoreSendButton from "../../public/DecoreSendButton.png";
import ShinyDecore from "../../public/SubscriptionShinyDecore.png";

export default function SubscriptionSection() {
  return (
    <section className="flex justify-center items-center mb-[100px] p-[100px] overflow-hidden">
      <div className=" bg-[#DFD7F9] rounded-tl-[64px] rounded-tr-[16px] rounded-br-lg py-[40px] px-[40px] md:px-[100px] relative sm:w-[contain] bg-[url('/SubscriptionBgDecore1.png')_,_url('/SubscriptionBgDecore2.png')] bg-no-repeat  bg-[position:left_bottom_,_right_top] bg-[length:40%_,_20%] ">
        <h2 className="font-[poppins] text-[1rem] sm:text-[1.5rem] font-semibold text-center max-w-[600px] mb-[40px] text-[#5E6282]">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h2>

        <section className="flex  gap-4 max-w-[400px] mx-[auto]">
          <div className="flex flex-1 items-center px-[20px] bg-white h-10 sm:h-12 rounded-lg gap-3">
            <Image
              src={EnvelopeIcon}
              alt=""
              width="20"
              height="20"
              className="block mt-[3px] sm:w-[20px] sm:h-[15px]"
            />
            <input
              type="text"
              placeholder="e.g jadoo@gmail.com"
              className="block sm:h-[70%] sm:w-[100%] font-[montserrat] text-[0.9rem]"
            />
          </div>
          <button className="hover:bg-[#ff7c6893] cursor-pointer bg-[#FF7D68] py-[10px] px-[30px] rounded-lg text-white text-[0.8rem]">
            Subscribe
          </button>
        </section>
        <Image
          src={DecoreSendButton}
          width="70"
          height="70"
          alt="Decoration send button for Subscription section"
          className="rounded-full w-[50] h-[50] absolute top-[-20] right-[-15]"
        />
        <Image
          src={ShinyDecore}
          width="153"
          height="166"
          alt="Subscription shiny decoration image"
          className="w-[100] h-[100px] absolute bottom-[-45px] right-[-65px]"
        />
      </div>
    </section>
  );
}
