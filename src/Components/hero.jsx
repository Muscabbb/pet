import { HiArrowLongRight } from "react-icons/hi2";

function Hero() {
  return (
    <section className="hero">
      <section className="container h-full mx-auto flex items-center justify-center">
        <section className="hero-left flex justify-center pl-10 flex-col md:flex-1">
          <h2 className=" text-2xl font-semibold text-[#090909] uppercase ">
            Your Gateway to Pet Happiness
          </h2>
          <div className="flex flex-col mt-3">
            <div className="flex items-center gap-4 ">
              <p className=" text-[40px] font-bold text-[#171717] capitalize">
                Expert
              </p>
              <img
                src="https://utfs.io/f/550f64ad-979f-4ae6-a340-06bb142a68eb-v3pe1.png"
                alt="hand img"
                className="w-[40px]"
              />
            </div>
            <p className=" text-[40px] font-bold text-[#171717] capitalize">
              Advice Tailored
            </p>
            <p className=" text-[40px] font-bold text-[#171717] capitalize">
              for Your Furry Friends
            </p>
          </div>
          <button className="w-[310px] h-[70px] mt-8 rounded-[75px] flex gap-5 items-center justify-center text-center font-semibold capitalize text-2xl  text-white bg-red-400 hover:bg-red-500  transition focus:outline-none">
            latest collection{" "}
            <span>
              <HiArrowLongRight />
            </span>
          </button>
        </section>
        <section className="hero-right hidden flex-1 md:flex items-center justify-center">
          <img
            src="https://utfs.io/f/ad65ecad-17a9-4658-b491-63512739a0ac-1wkca.png"
            alt="hero"
            className=" h-[400px] w-[400px]"
          />
        </section>
      </section>
    </section>
  );
}

export default Hero;