"use client";

import Image from "next/image";

const Approach = () => {
  return (
    <div
      id="three"
      className="bg-lightestTeal h-full md:h-screen w-screen mx-auto max-w-7xl flex flex-col rounded-2xl pt-16"
    >
      <div className="border-solid mx-20 mb-5 md:mx-96 border-darkerTeal mt-10 border-2 rounded-lg text-center">
        <h1 className="text-base m-2 uppercase md:text-5xl">Consultations</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="flex flex-1 bg-lightTeal justify-center text-white text-5xl m-2 text-center items-center">
        <Image
          src="/assets/images/consultation.jpg"
          alt="profile"
          width={440}
          height={700}
        />
        </div>
        <div className="flex flex-1 m-2 p-2 md:m-20 bg-lighterTeal flex-col">
          <h1 className="uppercase text-3xl text-center">
            Approach
          </h1>
          <p className="p-2 font-light">
            I offer comprehensive psychiatric treatment for a wide variety of
            mental illnesses in an empathetic, compassionate, and supportive
            environment.
          </p>
          <p className="p-2 font-light">
            I utilize my academic, psychological, social, and innovative skills
            to provide high-quality care to patients and families from all walks
            of life. I always aim to use a patient-centered model to tailor
            treatment plans to suit the patient’s individual needs.
          </p>
          <p className="p-2 font-light">
            Advocacy forms an integral part of patient management, as improving
            support structures and community involvement, as well as promoting
            understanding and destigmatization of mental illness, are all
            critical components of patient care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
