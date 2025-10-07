import FooterCards from "./FooterCards";
import Image from "next/image";

export default function FooterSection() {
  return (
    <section>
      <div className="flex">
        <div>
          <h3>Jadoo</h3>
          <p>Book your trip in minutes, get full Control for much longer</p>
        </div>

        <div>
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

        <div>
          <div className="flex">
            <Image src={} width="30" height="30" alt="facebook logo" />
            <Image src={} width="30" height="30" alt="Instagram logo" />
            <Image src={} width="30" height="30" alt="twitter logo" />
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
