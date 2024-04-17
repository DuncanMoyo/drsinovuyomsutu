"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Icon from "../ui/Icon";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { navLinks } from "@/lib/constants";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MobileMenu = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Icon name="menu" pointer />
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image
            src="/assets/images/logo_black.png"
            alt="logo"
            width={50}
            height={50}
          />
          <Separator className="border border-gray-50" />
          <ol className=" flex-col justify-center md:flex items-center md:justify-between p-0 m-0">
            {navLinks.map(({ name, url }, index) => (
              <AnchorLink
                className=" text-black hover:text-green mx-16 uppercase"
                key={index}
                href={url}
              >
                <SheetClose asChild>
                  <li className="font-robotoFont text-sm">{name}</li>
                </SheetClose>
              </AnchorLink>
            ))}
          </ol>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileMenu;
