import FooterCards from "./FooterCards";
import Image from "next/image";
import SocialFacebook from "../../public/FooterFacebookLogo.png";
import SocialInstagram from "../../public/FooterInstaLogo.png";
import SocialTwitter from "../../public/FooterTwitterLogo.png";

export default function FooterSection() {
  return (
    <section className="mb-[100px]">
      <div className="flex gap-15 mb-[80px] justify-evenly">
        <div className="max-w-[200px]">
          <h2 className="font-bold mb-[20px] text-[2.5rem]">Jadoo.</h2>
          <p className="text-[0.8rem]">
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

        <div className="">
          <div className="flex justify-evenly border-1">
            <Image
              src={SocialFacebook}
              width="30"
              height="30"
              alt="facebook logo"
            />
            <Image
              src={SocialInstagram}
              width="30"
              height="30"
              alt="Instagram logo"
            />
            <Image
              src={SocialTwitter}
              width="30"
              height="30"
              alt="twitter logo"
            />
          </div>

          <p>Discover our app</p>

          <div>
            <h3>Google play banner</h3>
            <h3>Apple store banner</h3>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center">All rights reserved@jadoo.co</p>
      </div>
    </section>
  );
}
