import SectionTitle from "../../SharedComponents/SectionTitle";
import ServicesCard from "./ServicesCard";
import ServicesData from "./ServicesData";
const Services = () => {
  return (
    <div className="min-h-[10vh] py-10">
      <SectionTitle>
        <span className="font-extrabold bold transparent-text">Our</span>
        <span className="underlines ">Services</span>
      </SectionTitle>
      <div className="m-auto mt-5 w-[90%] grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
        {ServicesData.map((item , idx) => {
          return <ServicesCard key={idx} title={item.title} desc={item.desc} />;
        })}
      </div>
    </div>
  );
};

export default Services;
