'use client'

const Approach = () => {
  return (
    <div id="three" className="bg-lightestTeal h-screen w-screen mx-auto max-w-7xl flex flex-col rounded-2xl pt-16">
      <div className="border-solid mx-20 mb-5 md:mx-96 border-darkerTeal mt-10 border-2 rounded-lg text-center">
        <h1 className="text-base m-2 uppercase md:text-5xl">Consultations</h1>
      </div>
      <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="flex flex-1 bg-lightTeal justify-center text-white text-5xl m-2 text-center items-center">
          Consultation Image
        </div>
        <div className="flex flex-1 m-2 md:m-20 bg-lighterTeal flex-col">
          <h1 className="uppercase text-3xl text-center text-white">
            Approach
          </h1>
          <p className="p-2 font-light text-white text-center">
            Description of Comprehensive and Empathetic Mental Health
            Consultation Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
