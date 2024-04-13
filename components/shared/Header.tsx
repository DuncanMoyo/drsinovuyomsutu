import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="w-full border-b bg-darkestTeal">
      <div className="max-w-7xl lg:mx-auto p-2 md:px-10 xl:px-0 w-full flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo_white.png"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>

        <nav className="w-full max-w-xs md:flex md:flex-between hidden">
          <h1 className="text-headerColor uppercase">Links will be here</h1>
        </nav>

        <div className="flex w-32 justify-end gap-3">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
