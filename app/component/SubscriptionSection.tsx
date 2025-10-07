import Image from "next/image";
import InputIcon from "../../public/EnvelopeIcon.png";
import DecoreSendButton from "../../public/DecoreSendButton.png"

export default function SubscriptionSection() {
  return (
    <section className="flex justify-center items-center mb-[200px] ">
      <div className="bg-[#DFD7F9] rounded-tl-[64px] rounded-tr-[16px] py-[40px] px-[100px] relative">
        <h2 className="font-[poppins] text-[1.5rem] font-semibold text-center max-w-[600px] mb-[40px] text-[#5E6282]">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h2>

        <section className="flex gap-4 max-w-[400px] mx-[auto] ">
          <div className="flex flex-1 items-center px-[20px] bg-white h-12 rounded-lg gap-3">
            <Image
              src={InputIcon}
              alt=""
              width="20"
              height="20"
              className="block mt-[5px]"
            />
            <input
              type="text"
              placeholder="e.g jadoo@gmail.com"
              className="block h-[70%] w-[100%]"
            />
          </div>
          <Image src={DecoreSendButton} className="hover:bg-[#ff7c6893] cursor-pointer bg-[#FF7D68] py-[10px] px-[30px] rounded-lg text-white text-[0.8rem]">
            Subscribe
          </button>
        </section>
        <div className="rounded-full w-[50] h-[50] bg-[purple] absolute top-[-20] right-[-15]"></div>
      </div>
    </section>
  );
}
