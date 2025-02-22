import { useRef } from "react";
import useMouseMove from "../../../cHooks/useMouseMove";
import propTypes from "prop-types";

const ServicesCard = ({ title, desc }) => {
  const Ref = useRef();
  const {
    position,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter,
    isMouseInside,
  } = useMouseMove();

  return (
    <div
      className="w-[100%] h-[350px] relative flex  justify-center items-center overflow-hidden"
      onMouseMove={(e) => handleMouseMove(e, Ref)}
      onMouseLeave={() => handleMouseLeave(Ref)}
      onMouseEnter={handleMouseEnter}
      ref={Ref}
    >
      <div className="text-white flex flex-col h-[70%] m-auto w-[60%] gap-5 ">
        <h1>{title}</h1>
        <p className="text-[#888C9D] text-[18px] font-semibold">{desc}</p>
      </div>
      <div
        className="absolute w-[80%] h-[90%] pointer-events-none"
        style={{
          left: isMouseInside
            ? `${Math.max(
                0,
                Math.min(position.x, Ref.current?.clientWidth - 80)
              )}px`
            : "50%",
          top: isMouseInside
            ? `${Math.max(
                0,
                Math.min(position.y, Ref.current?.clientHeight - 90)
              )}px`
            : "50%",
          transform: isMouseInside
            ? "translate(0, 0)"
            : "translate(-50%, -50%)",
          transition: isMouseInside ? "none" : "all 0.3s ease",
        }}
      >
        <span className="relative inline-block box-Effect w-full h-full"></span>
      </div>
    </div>
  );
};
ServicesCard.propTypes = {
  title: propTypes.string,
  desc: propTypes.string,
};

export default ServicesCard;
