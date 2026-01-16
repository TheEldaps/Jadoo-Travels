import NavLink from "./NavLink";
import Link from "next/link";

export default function () {
  return (
    <>
      <NavLink href="#home" title="Home" />
      <NavLink href="#destination" title="Top Destinations" />
      <NavLink href="#category" title="Category" />
      <NavLink href="#booking" title="Booking" />
      <NavLink href="#testimonial" title="Testimonials" />
      {/* <NavLink href="" title="Login" /> */}
      {/* <NavLink href="" title="Signup" /> */}

      {/* <li>
        <Link className="hover:bg-[#a9a8a890] block px-[20px]" href="">
          EN
        </Link>
      </li> */}
    </>
  );
}
