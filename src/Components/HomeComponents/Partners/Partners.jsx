import SectionTitle from "../../SharedComponents/SectionTitle";
import PartnersSlider from "./PartnersSlider";

const Partners = () => {
  return (
    <div className="py-5 flex flex-col gap-10">
      <SectionTitle>
        <span className="font-extrabold bold">Our </span>
        <span className="underlines">Clients</span>
      </SectionTitle>
      <PartnersSlider />
    </div>
  );
};

export default Partners;
