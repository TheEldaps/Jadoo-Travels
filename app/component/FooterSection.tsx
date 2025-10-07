import Link from "next/link";
import Image from "next/image";

export default function FooterSection() {
  return (
    <section className="flex">
      <div>
        <h3>Jadoo</h3>
        <p>Book your trip in minutes, get full Control for much longer</p>
      </div>

      <div>
        <h3>Company</h3>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
          <li>
            <Link href="/Mobile">Mobile</Link>
          </li>
        </ul>
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
    </section>
  );
}
