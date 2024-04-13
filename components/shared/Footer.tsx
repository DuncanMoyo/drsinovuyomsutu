import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-darkestTeal w-full md:px-40 mt-20 mb:mt-5 mx-auto flex flex-col md:flex-row md:justify-between items-center pt-5 justify-center">
      <div>Contact Details</div>
      <div className="flex flex-col items-center m-10">
        <Image
          src="/assets/images/logo_black.png"
          alt="black_logo"
          width={60}
          height={60}
        />
        <p className="uppercase mt-5 text-xl md:text-2xl">dr. sinovuyo msutu</p>
        <p className="mt-10">©All rights reserved 2024.</p>
      </div>
      <div className="hidden md:block">Links Here</div>
    </div>
  );
};

export default Footer;
