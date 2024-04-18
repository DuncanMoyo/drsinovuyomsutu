"use client";

import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { navLinks } from "@/lib/constants";
import Image from "next/image";
import Icon from "../ui/Icon";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        // scrolled down
        setNavVisible(false);
      } else {
        // scrolled up
        setNavVisible(true);
      }
      setLastScrollTop(currentScrollTop);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <header
      className={`w-full border-b bg-darkestTeal md:fixed ${
        navVisible ? "visible" : "hidden"
      }`}
      style={{
        transition: "opacity 0.3s ease",
        opacity: navVisible ? 1 : 0,
      }}
    >
      <div className="max-w-7xl lg:mx-auto p-2 md:px-10 xl:px-0 w-full items-center justify-between md:justify-around hidden md:flex">
        <AnchorLink href="#home">
          <Image
            src="/assets/images/logo_white.png"
            alt="logo_white"
            width={50}
            height={50}
          />
        </AnchorLink>

        <div className="hidden md:justify-center md:flex">
          <ol className="flex items-center justify-between p-0 m-0">
            {navLinks.map(({ name, url }, index) => (
              <AnchorLink
                className="text-white hover:text-green mx-16 uppercase"
                key={index}
                href={url}
              >
                <li>{name}</li>
              </AnchorLink>
            ))}
          </ol>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div
        className={`fixed flex bg-darkestTeal overflow-x-hidden z-50 shadow-md px-4 top-0 left-0 right-0 w-full justify-between py-3 items-center md:hidden ${
          toggle ? "transition-all ease-out duration-500" : ""
        }`}
      >
        <AnchorLink href="#home">
          <Image
            src="/assets/images/logo_black.png"
            alt="logo_black"
            width={35}
            height={35}
          />
        </AnchorLink>

        <Icon
          name={toggle ? "close" : "menu"}
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <div className="flex fixed top-10 bottom-0 left-0 right-0 z-30 md:hidden pt-20 bg-darkestTeal shadow-md border-b h-screen  border-gray flex-col transition-all ease-out duration-500">
          {navLinks.map(({ name, url }, index) => (
            <AnchorLink
              onClick={() => setToggle(false)}
              className="my-2 mx-auto text-lighterTeal font-robotoFont"
              key={index}
              href={url}
            >
              <span className="uppercase">{name}</span>
            </AnchorLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
