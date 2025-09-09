import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F1212] py-5 px-5 md:px-20 flex justify-between items-center shadow-md">
      {/* Left Section: Logo + Links */}
      <span className="flex justify-between items-center w-1/2">
        <Image src="/node_logo.webp" width={40} height={40} alt="Logo" />
        <ul className="hidden md:flex gap-8 text-white font-semibold">
          <Link href="">Roadmap</Link>
          <Link href="">Join Presale</Link>
          <Link href="">Lite Paper</Link>
        </ul>
      </span>

      {/* Right Section: Connect button */}
      <span className="hidden md:flex">
        <Link
          href=""
          className="text-white font-semibold border bg-gradient-to-r from-[#20A4F3] to-[#59F8E8]  px-4 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Connect Wallet
        </Link>
      </span>

      {/* Mobile Hamburger */}
      <span className="md:hidden text-white">
        <Menu size={28} />
      </span>
    </nav>
  );
};

export default Navbar;
