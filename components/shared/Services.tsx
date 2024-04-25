"use client";

import { servicesData } from "@/lib/constants";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/utils";

type ServiceCardProps = {
  index: number;
  condition: string;
};

const ServiceCard = ({ index, condition }: ServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full h-full bg-darkTeal rounded-full cursor-pointer">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        // @ts-ignore
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] py-5 px-12 min-h-[80px] md:min-h-[120px] flex justify-evenly items-center flex-col"
        >
          <h3 className="text-white text-[20px] font-bold text-center">
            {condition}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <div
      id="two"
      className="h-full md:h-screen w-screen mx-auto max-w-7xl flex flex-col items-center mt-10 md:mb-20 pt-16 rounded-2xl"
    >
      <div className="border-solid border-darkerTeal mt-10 px-10 md:mx-96 border-2 rounded-lg text-center">
        <h1 className="text-base m-2 md:text-5xl uppercase">Services</h1>
      </div>
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
