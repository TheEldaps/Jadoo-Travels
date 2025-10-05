import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav className="flex justify-between py-5 font-[poppins] border-b-2 items-center ">
      <Link href="/">
        <Image src={Logo} width="115" height="35" alt="Website Logo" />
      </Link>

      <ul className="flex items-center gap-x-10">
        <NavLink href="" title="Destinations" />
        <NavLink href="" title="Hotels" />
        <NavLink href="" title="Flights" />
        <NavLink href="" title="Booking" />
        <NavLink href="" title="Login" />

        <button className="border-1 px-4 py-1 rounded">
          <NavLink href="" title="Signup" />
        </button>

        <li>
          <Link href="">EN</Link>
        </li>
      </ul>
    </nav>
  );
}
