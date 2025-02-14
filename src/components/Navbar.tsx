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
    <nav className="flex gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition-colors hover:text-white p-2.5 ${
            pathname === link.href ? "text-white" : "text-gray-400"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
