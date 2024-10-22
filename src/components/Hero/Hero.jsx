//
const Hero = () => {
  return (
    <div>
      <section className="mt-10">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center">
            <h3 className="text-text60 text-[22px] font-bold text-center">
              Bringing Families Together
            </h3>
            <img src="src/assets/fire.png" alt="" className="w-8 h-fit" />
          </div>
          <h1 className="text-text font-[900] text-[40px] md:text-[65px] text-center">
            Your Path to Adoption <br className="max-[500px]:hidden" />
            Starts Here
          </h1>
          <p className="text-text text-center w-5/6 md:w-2/3 mx-auto mt-3">
            Pets bring joy and companionship. At Paws & Claws, we help you find
            the perfect pet and guide you through a smooth adoption process for
            a happy transition.
          </p>
          <button
            //   onClick={}
            className="btn min-h-full h-full bg-primary text-white text-[18px] font-bold px-7 py-4 rounded-xl mt-6"
          >
            View More
          </button>
        </div>
        <div className="w-fit mx-auto">
          <img
            src="src/assets/pet.png"
            alt=""
            className="object-cover w-4/5  mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
