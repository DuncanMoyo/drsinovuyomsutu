'use client'

const Profile = () => {
  return (
    <div id="one" className="bg-lightestTeal h-screen w-screen mx-auto max-w-7xl flex flex-col md:flex-row rounded-2xl pt-16">
      <div className="flex flex-1 m-2 md:m-20 bg-lighterTeal flex-col order-2 md:order-1">
        <h1 className="uppercase text-3xl text-center text-white">
          About Dr Msutu
        </h1>
        <p className="p-2 font-light text-white text-center">
          Background, text and overall color scheme will change, in order to
          blend with the image provided
        </p>
      </div>
      <div className="flex flex-1 bg-lightTeal justify-center text-white text-6xl m-2 text-center items-center order-1 md:order-2">
        Image of Dr Sinovuyo
      </div>
    </div>
  );
};

export default Profile;
