"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Approach = () => {
  return (
    <div
      id="consultations"
      className="bg-lightChampagne h-full md:h-screen w-screen mx-auto max-w-7xl flex flex-col rounded-2xl pt-16"
    >
      <motion.div
        initial={{ x: "50vw" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="border-solid mx-20 mb-5 md:mx-96 border-cedarChest mt-10 border-2 rounded-lg text-center"
      >
        <h1 className="text-base m-2 uppercase md:text-5xl text-darkBrown">Consultations</h1>
      </motion.div>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 10 }}
          className="flex flex-1 bg-desertSun justify-center text-white text-5xl m-2 text-center items-center"
        >
          <Image
            src="/assets/images/consultation.jpg"
            alt="profile"
            width={440}
            height={700}
          />
        </motion.div>
        <div className="flex flex-1 m-2 p-2 md:m-20 bg-peach flex-col">
          <motion.h1
            initial={{ fontSize: "8px" }}
            animate={{ fontSize: "30px" }}
            className="uppercase text-center text-darkBrown"
          >
            Approach
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="p-2 text-darkBrown"
          >
            I offer comprehensive psychiatric treatment for a wide variety of
            mental illnesses in an empathetic, compassionate, and supportive
            environment.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="p-2 text-darkBrown"
          >
            I utilize my academic, psychological, social, and innovative skills
            to provide high-quality care to patients and families from all walks
            of life. I always aim to use a patient-centered model to tailor
            treatment plans to suit the patient’s individual needs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2, duration: 2 }}
            className="p-2 text-darkBrown"
          >
            Advocacy forms an integral part of patient management, as improving
            support structures and community involvement, as well as promoting
            understanding and destigmatization of mental illness, are all
            critical components of patient care.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
