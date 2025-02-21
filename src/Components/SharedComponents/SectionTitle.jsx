import useScrollDirection from "../../cHooks/useScroll";
import PropTypes from "prop-types";

const SectionTitle = ({ children }) => {
  const scrollDirection = useScrollDirection(200);

  return (
    <div
      className={`w-full h-[100px] text-center text-white py-10 relative Animation-Title ${
        scrollDirection === "down"
          ? "scrolling-down"
          : scrollDirection === "up"
          ? "scrolling-up"
          : ""
      }`}
    >
      <h1 className={`text-6xl `}>{children}</h1>
    </div>
  );
};
SectionTitle.propTypes = {
  children: PropTypes.node,
};
export default SectionTitle;
