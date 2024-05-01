import { navLinks } from "@/lib/constants";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="bg-oliveGreen w-full md:px-40 mt-20 mb:mt-5 mx-auto flex flex-col md:flex-row md:justify-around items-center pt-2 justify-center">
      {/* <div className="flex flex-col">
        <div className="flex">
          <p className="mr-3">Call:</p>
          <a href="tel:0710093161">071 009 3161</a>
        </div>
        <div className="flex">
          <p className="mr-3">Email:</p>
          <a href="mailto:drmsutupsych@gmail.com">drmsutupsych@gmail.com</a>
        </div>
      </div> */}
      <div className="flex flex-col items-center m-2">
        <Image
          src="/assets/images/logo_black.png"
          alt="black_logo"
          width={60}
          height={60}
        />
        <p className="uppercase mt-2 text-xl md:text-xl">dr. sinovuyo msutu</p>
        <p className="mt-3 font-light">©All rights reserved 2024.</p>
      </div>
      {/* <div className="hidden md:flex flex-col">
        <div className="flex">
          {navLinks.map(({ name, url }, index) => (
            <AnchorLink
              className=""
              key={index}
              href={url}
            >
              <span className="uppercase">{name}</span>
            </AnchorLink>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
