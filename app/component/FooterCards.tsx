import Link from "next/link";

export default function FooterCards({
  heading,
  link1,
  link2,
  link3,
  href1,
  href2,
  href3,
}: {
  heading: string;
  link1: string;
  link2: string;
  link3: string;
  href1: string;
  href2: string;
  href3: string;
}) {
  return (
    <div>
      <h3 className="mb-5 font-bold text-black ">{heading}</h3>
      <ul className="flex flex-col gap-1 font-medium text-[0.9rem]">
        <li>
          <Link href={href1} className='hover:text-[#5e6282c3]'>{link1}</Link>
        </li>
        <li>
          <Link href={href2} className='hover:text-[#5e6282c3]'>{link2}</Link>
        </li>
        <li>
          <Link href={href3} className='hover:text-[#5e6282c3]'>{link3}</Link>
        </li>
      </ul>
    </div>
  );
}
