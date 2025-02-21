import Img from "../../../assets/Group.webp";
import useScrollDirection from "../../../cHooks/useScroll";
const Items = [
  {
    title: "- Digital assets audit",
  },
  {
    title: "- Research & competitive analysis",
  },
  {
    title: "- Target audience segmentation",
  },
  {
    title: "- Customer persona & content personalization strategy",
  },
  {
    title: "- Digital communications strategy",
  },
  {
    title: "- Creative, social media & Digital advertising strategy",
  },
  {
    title: "- Business intelligence & reporting tools",
  },
];
const GroupSection = () => {
  const scrollDirection = useScrollDirection(200);

  return (
    <section className=" relative ">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6  lg:py-16 lg:flex-row ">
        <div className="flex items-center justify-center w-full h-[100%] lg:w-1/2 hero-pic">
          <img
            className="object-cover w-[70%] h-[100%] mx-auto rounded-md lg:max-w-2xl"
            src={Img}
            alt="glasses photo"
          />
        </div>

        <div className="w-full lg:w-1/2 flex  flex-col items-start">
          <div className=" w-full  ">
            <h1
              data-text="Be Group"
              className={` font-bold text-start text-[#F2881F] py-4 Animation-Header ${
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
          <p className="text-start text-3xl w-[73%]  transparent-text">
            Digital Services has never been easier.
          </p>

          <ul>
            <h3 className="py-2 text-2xl font-bold text-[#888C9D]">
              What We Do?
            </h3>

            {Items.map((item, index) => (
              <li
                key={index}
                className="text-start  text-lg lg:text-2xl text-[#888C9D]"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GroupSection;
