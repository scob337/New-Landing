import Img from "../../assets/Group.webp";
import useScrollDirection from "../../cHooks/useScroll";
const GroupSection = () => {
  const scrollDirection = useScrollDirection(200);

  return (
    <section className=" relative text-white">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6  lg:py-16 lg:flex-row ">
        <div className="flex items-center justify-center w-full h-96 lg:w-1/2 hero-pic">
          <img
            className="object-cover w-[70%] h-[70%] mx-auto rounded-md lg:max-w-2xl"
            src={Img}
            alt="glasses photo"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className=" w-full flex  ">
            <h1
              data-text="Be Group"
              className={` font-bold text-center text-[#F2881F] p-4 Animation-Header ${
                scrollDirection === "down"
                  ? "scrolling-down"
                  : scrollDirection === "up"
                  ? "scrolling-up"
                  : ""
              }`}
            >
              BE GROUP
            </h1>
          </div>
          Digital Services has never been easier.
        </div>
      </div>
    </section>
  );
};

export default GroupSection;
