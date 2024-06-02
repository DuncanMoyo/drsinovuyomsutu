"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="bg-lightestTeal w-full h-full">
      <div
        id="profile"
        className="bg-lightestTeal h-full w-screen mx-auto max-w-7xl flex flex-col md:flex-row rounded-2xl pt-16"
      >
        <div className="h-full flex-1 m-2 md:m-16 bg-lighterTeal flex-col order-2 md:order-1">
          <motion.h1
            initial={{ fontSize: "0px" }}
            animate={{ fontSize: "30px" }}
            className="uppercase text-center text-darkBrown"
          >
            About Dr Msutu
          </motion.h1>

          <p className="p-2 md:p-3 text-darkBrown">
            We live in a world where mental illness is pervasive yet seldom
            acknowledged. I am a psychiatrist because I want to change that: to
            treat the invisible and help people become whole. As a black woman,
            I find it especially rewarding to be part of other black women's
            healing because I believe we experience a unique form of suffering.
            My interests lie in Women's mental health and adolescent psychiatry.
          </p>
          <p className="p-2 md:p-3 text-darkBrown">
            My journey as a doctor began at Ngwelezana Hospital in KwaZulu Natal
            where I completed my internship. I then worked for the South African
            Health Products Regulatory Authority (SAHPRA) before moving on to
            Weskoppies Psychiatric Hospital as a medical officer and then later
            starting my specialist training. I practice across public and
            private sectors and treat the full spectrum of psychiatric
            disorders.
          </p>
          <p className="p-2 md:p-3 text-darkBrown">
            I hold a medical degree (MBChB) from the University of Cape Town, a
            Masters in Medicine Degree (MMed) in Psychiatry from the University
            of Pretoria and I am a Fellow of the College of Psychiatrists of
            South Africa (FCPsych SA).
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 5 }}
          className="flex flex-1 justify-center text-white text-6xl m-2 text-center items-center order-1 md:order-2"
        >
          <Image
            src="/assets/images/sinovuyo_grad.jpeg"
            alt="profile"
            width={440}
            height={700}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
