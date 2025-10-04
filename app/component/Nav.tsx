import Image from "next/image";
import Logo from "../../public/Jadoo.png";
export default function Nav() {
  return (
    <nav className="flex justify-evenly">
      <Image src={Logo} width="50" height="50" alt="Website Logo" />

      <ul>
        <li>Destinations</li>
        <li>Hotels</li>
        <li>Flights</li>
        <li>Bookings</li>
      </ul>

      <ul>
        <li>Login</li>
        <li>
          <button>Sign up</button>
        </li>
        <li>EN</li>
      </ul>
    </nav>
  );
}
