import FooterCards from "./FooterCards";
import Image from "next/image";
import SocialFacebook from "../../public/FooterFacebookLogo.png";
import SocialInstagram from "../../public/FooterInstaLogo.png";
import SocialTwitter from "../../public/FooterTwitterLogo.png";
import GooglePlay from "../../public/FooterGooglePlay.png";
import AppStore from "../../public/FooterAppStore.png";
import Link from "next/link";

export default function FooterSection() {
  return (
    <section className=" text-[#5E6282] relative py-[50px]">
      <div className="flex gap-15 mb-[80px] justify-evenly ">
        <div className="max-w-[200px]">
          <h2 className="font-medium mb-[20px] text-[2.5rem] font-[poppins] text-black">
            Jadoo.
          </h2>
          <p className="text-[0.8rem] font-medium">
            Book your trip in minutes, get full Control for much longer
          </p>
        </div>

        <div className="flex gap-10">
          <FooterCards
            heading="Company"
            link1="About"
            link2="Careers"
            link3="Mobile"
            href1="'/about'"
            href2="'/careers'"
            href3="'/mobile'"
          />

          <FooterCards
            heading="Contact"
            link1="Help/FAQ"
            link2="Press"
            link3="Affiliates"
            href1="'/help'"
            href2="'/press'"
            href3="'/affiliates'"
          />

          <FooterCards
            heading="More"
            link1="Airlinefees"
            link2="Airline"
            link3="Low fare tips"
            href1="'/airlinefees'"
            href2="/'airline'"
            href3="'/low-fare-tips'"
          />
        </div>

        <div className="text-[#5E6282] flex flex-col gap-1">
          <div className="flex justify-start gap-5 mb-[10px]">
            <Link href="/facebook">
              <Image
                src={SocialFacebook}
                width="30"
                height="30"
                alt="facebook logo"
              />
            </Link>

            <Link href="/instagram">
              <Image
                src={SocialInstagram}
                width="30"
                height="30"
                alt="Instagram logo"
              />
            </Link>

            <Link href="/twitter">
              <Image
                src={SocialTwitter}
                width="30"
                height="30"
                alt="twitter logo"
              />
            </Link>
          </div>

          <p className="mb-[10px] font-semibold text-[0.95rem]">
            Discover our app
          </p>

          <div className="flex gap-3">
            <Image
              src={GooglePlay}
              alt="Google play app download"
              width="107"
              height="35"
              className="w-[70px] h-[25px]"
            />
            <Image
              src={AppStore}
              alt="App store app download"
              width="107"
              height="35"
              className="w-[70px] h-[25px]"
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-[0.8rem]">
          All rights reserved@jadoo.co
        </p>
      </div>
    </section>
  );
}
