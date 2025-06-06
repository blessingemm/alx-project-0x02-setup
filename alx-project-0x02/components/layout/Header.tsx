import Link from "next/link";
import React from "react";

const Header = () => {
  return(
    <header className=" border-none flex justify-between bg-blue-600 text-white p-4 text-center">
    <h1 className="text-xl font-bold">ALX ProDev</h1>

    <nav className="space-x-4">
      <Link href="/home" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
    </nav>
  </header>
  );
}

export default Header;