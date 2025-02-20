import PropTypes from "prop-types";
import useMouseMove from "../../cHooks/useMouseMove";
import { useRef } from "react";

const Button = ({ children, onclick }) => {
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
      className="w-[200px] h-[100px] grid place-items-center"
      onMouseMove={(e) => handleMouseMove(e, Ref)}
      onMouseLeave={() => handleMouseLeave(Ref)}
      onMouseEnter={handleMouseEnter}
      ref={Ref}
    >
      <button
        className="hover:bg-[#F2881F] transition-all duration-500 cursor-pointer hover:translate-y-[-10px] px-5 py-1 text-white text-[20px] flex items-center justify-between w-[160px] relative customButton z-50"
        onClick={onclick}
      >
        {children}
      </button>
      <div
        className="absolute w-[80%] h-[50%]"
        style={{
          left: isMouseInside ? `${position.x - 50}px` : "50%",
          top: isMouseInside ? `${position.y - 20}px` : "50%",
          transform: isMouseInside ? "" : "translate(-50%, -50%)",
          position: "absolute",
          transition: "all .4s linear",
        }}
      >
        <span className="relative inline-block btn-Effect w-full h-full"></span>
      </div>
    </div>
  );
};

// ProtoType
Button.propTypes = {
  children: PropTypes.node,
  onclick: PropTypes.func,
};

export default Button;
