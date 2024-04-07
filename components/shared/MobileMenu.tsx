"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "../ui/Icon";
import Image from "next/image";
import { Separator } from "../ui/separator";

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
          <h1>Links here</h1>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileMenu;
