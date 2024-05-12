"use client";

import { servicesData } from "@/lib/constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

type ServiceCardProps = {
  index: number;
  condition: string;
};

const ServiceCard = ({ condition }: ServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full h-full bg-desertSun rounded-full cursor-pointer mx-auto">
      <motion.div className="w-full p-[1px] rounded-[20px]">
        <div
          // @ts-ignore
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] py-5 px-12 min-h-[80px] md:min-h-[120px] flex justify-evenly items-center flex-col"
        >
          <h3 className="text-[20px] font-bold text-center text-darkBrown">{condition}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <div
      id="services"
      className="h-full md:h-screen w-screen mx-auto max-w-7xl flex flex-col items-center mt-10 md:mb-20 pt-16 rounded-2xl"
    >
      <motion.div
        initial={{ x: "-50vw" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="border-solid border-cedarChest mt-10 px-10 md:mx-96 border-2 rounded-lg text-center"
      >
        <h1 className="text-base m-2 md:text-5xl uppercase text-darkBrown">Services</h1>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-2 md:gap-8 w-full px-10 mt-10 md:mt-20">
        {servicesData.map(({ condition }, index) => (
          <ServiceCard
            key={index}
            // @ts-ignore
            index={index.toString()}
            condition={condition}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
