import useScrollDirection from "../../cHooks/useScroll";
import GroupSection from "../../Components/HomeComponents/GroupSection/GroupSection";
import Partners from "../../Components/HomeComponents/Partners/Partners";
import Services from "../../Components/HomeComponents/Services/Services";
import Button from "../../Components/SharedComponents/Button";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const scrollDirection = useScrollDirection(100);

  return (
    <>
      <div className="home md:h-[120vh] h-[80vh]  bg-amber-300 z-10 mt-[-120px] ">
        <div
          className="w-full h-full relative
       before:absolute before:content-[''] before:w-full
       before:h-full before:bg-slate-700/70"
        >
          <video
            className="video w-full h-full object-cover"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              src="https://www.be-group.com/uploads/settings/videos/90775389.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute top-[5%] md:top-[10%] xl:top-[17%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center text-center">
          <h1
            data-text="WE PROVIDE DIGITAL MARKETING"
            className={` font-bold text-[#F2881F] p-4 Animation-Header ${
              scrollDirection === "down"
                ? "scrolling-down"
                : scrollDirection === "up"
                ? "scrolling-up"
                : ""
            }`}
            style={{ lineHeight: "1" }}
          >
            WE PROVIDE DIGITAL <br /> MARKETING
          </h1>
          <div
            className="absolute 
      top-[100%] right-[20%]  "
          >
            <Button>
              Click Here <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <GroupSection />
      <Partners />
      <Services />
    </>
  );
};

export default Home;
