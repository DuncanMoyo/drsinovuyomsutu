const Profile = () => {
  return (
    <div className="bg-lightestTeal h-screen w-screen flex mx-auto max-w-7xl">
      <div className="flex flex-1 m-20 bg-lighterTeal flex-col">
        <h1 className="uppercase text-3xl text-center text-white">
          About Dr Msutu
        </h1>
        <p className="p-2 font-light text-white text-center">
          Background, text and overall color scheme will change, in order to
          blend with the image provided
        </p>
      </div>
      <div className="flex flex-1 bg-lightTeal justify-center text-white text-6xl m-2 text-center items-center">
        Image of Dr Sinovuyo
      </div>
    </div>
  );
};

export default Profile;
