"use client";

import { motion } from "framer-motion";

const Question = () => {
  return (
    <div className="h-full w-screen mx-auto max-w-7xl px-2 md:px-0 pt-40 md:pt-30 flex flex-col md:flex-row">
      {/* <div className="h-full flex-1 rounded-2xl bg-peach flex-col">
        <motion.h1
          initial={{ fontSize: "12px" }}
          whileInView={{ fontSize: "30px" }}
          className="uppercase text-3xl p-2 text-center"
        >
          What is a psychiatrist?
        </motion.h1>
        <p className="p-2 md:p-3 font-light">
          A psychiatrist is a medical doctor who has specialized in diagnosing
          and managing mental health conditions. Psychiatrists often work in a
          multidisciplinary teams including other mental health practitioners
          such as psychologists, counselors occupational therapists, social
          workers, and nurses.
        </p>
      </div> */}
    </div>
  );
};

export default Question;
