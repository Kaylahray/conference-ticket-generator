"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Events" },
    { href: "/tickets", label: "My Tickets" },
    { href: "/about", label: "About Project" },
  ];

  return (
    <nav className="flex gap-2.5 items-center">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition-colors hover:text-white p-2.5 leading-none  text-[18px] font-normal  ${
            pathname === link.href ? "text-white" : "text-[#B3B3B3]"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
