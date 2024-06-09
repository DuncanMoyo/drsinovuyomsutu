"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Approach = () => {
  return (
    <div className="w-full h-full bg-background">
        <div
      id="consultations"
      className="bg-background h-full md:h-screen w-screen mx-auto max-w-7xl flex flex-col rounded-2xl pt-16"
    >
      {/* <motion.div
        initial={{ x: "50vw" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="border-solid mx-20 mb-5 md:mx-96 border-cedarChest mt-10 border-2 rounded-lg text-center"
      >
        <h1 className="text-base m-2 uppercase md:text-5xl text-darkBrown">Consultations</h1>
      </motion.div> */}
      <div className="flex flex-col md:flex-row w-full h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 5 }}
          className="flex flex-2 justify-center text-white text-5xl m-2 text-center items-center"
        >
          <Image
            src="/assets/images/approach.jpg"
            alt="profile"
            width={700}
            height={500}
          />
        </motion.div>
        <div className="flex flex-1 m-2 p-2 md:m-20 bg-white border border-black flex-col">
          <motion.h1
            initial={{ fontSize: "8px" }}
            animate={{ fontSize: "30px" }}
            className="uppercase text-center text-darkBrown"
          >
            Approach
          </motion.h1>
          <p className="p-2 text-darkBrown">
            I offer comprehensive psychiatric treatment for a wide variety of
            mental illnesses in an empathetic, compassionate, and supportive
            environment.
          </p>
          <p className="p-2 text-darkBrown">
            I utilize my academic, psychological, social, and innovative skills
            to provide high-quality care to patients and families from all walks
            of life. I always aim to use a patient-centered model to tailor
            treatment plans to suit the patient’s individual needs.
          </p>
          <p className="p-2 text-darkBrown">
            Advocacy forms an integral part of patient management, as improving
            support structures and community involvement, as well as promoting
            understanding and destigmatization of mental illness, are all
            critical components of patient care.
          </p>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Approach;
