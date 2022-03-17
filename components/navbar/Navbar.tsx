import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlinks from "./Navlinks";
import UserDropdown from "./UserDropdown";

type PropTypes = {};

const Navbar: React.FC<PropTypes> = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  return (
    <nav className="border-b-[1px] border-main-purple">
      <section className="flex justify-between items-center p-4">
        <Link href="/">Circle</Link>
        <section className="hidden md:flex  justify-around w-1/3 items-center">
          <div className=" flex justify-between w-3/4">
            <Navlinks />
          </div>
          <div className="flex  ">
            <UserDropdown />
          </div>
        </section>
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => {
            setIsMobileNavOpen(!isMobileNavOpen);
          }}
        >
          <Image
            src={isMobileNavOpen ? `/images/burger-close.svg` : `/images/burger.svg`}
            layout="fixed"
            width={20}
            height={20}
            alt="nav burger icon"
          />
        </div>
      </section>
      {isMobileNavOpen ? (
        <section className="flex flex-col justify-between items-center md:hidden">
          <div className="flex-col flex">
            <Navlinks />
          </div>
          <div className="flex m-2 mb-5">
            <UserDropdown />
          </div>
        </section>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
