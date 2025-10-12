import NavLink from "./NavLink";
import Link from "next/link";

export default function () {
  return (
    <>
      <NavLink href="" title="Destinations" />
      <NavLink href="" title="Hotels" />
      <NavLink href="" title="Flights" />
      <NavLink href="" title="Booking" />
      <NavLink href="" title="Login" />
      <NavLink href="" title="Signup" />

      <li>
        <Link className="hover:bg-[#a9a8a890] block px-[20px]" href="">
          EN
        </Link>
      </li>
    </>
  );
}
