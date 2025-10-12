import Link from "next/link";

export default function NavLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <li>
      <Link
        className=" hover:bg-[#a9a8a890] block px-[20px] py-[10px]"
        href={href}
      >
        {title}
      </Link>
    </li>
  );
}
