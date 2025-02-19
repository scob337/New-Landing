import { useRef } from "react";
import Logo from "../../assets/Logo.webp";
import { FaBarsStaggered } from "react-icons/fa6";
import useMouseMove from "../../cHooks/useMouseMove";

const Navbar = () => {
  const Ref = useRef();
  const {
    position,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter,
    isMouseInside,
  } = useMouseMove(); 

  return (
    <nav className=" px-5 py-2 h-30 flex items-center relative z-20 overflow-hidden">
      <article className="flex justify-between items-center w-full absolute top-0 left-0  ">
        <div className="w-30 flex justify-center items-center cursor-pointer">
          <img src={Logo} alt="Site Logo" />
        </div>
        <article
          onMouseMove={(e) => handleMouseMove(e, Ref)} 
          onMouseLeave={() => handleMouseLeave(Ref)} 
          onMouseEnter={handleMouseEnter}
          ref={Ref}
          className="w-30 h-30 flex justify-center items-center relative overflow-hidden cursor-pointer"
        >
          <div
            className="absolute transition duration-[1000] linear"
            style={{
              left: isMouseInside ? `${position.x}px` : "50%",
              top: isMouseInside ? `${position.y}px` : "50%",
              transform: isMouseInside ? "" : "translate(-50%, -50%)",
              position: "absolute",
            }}
          >
            <FaBarsStaggered size={36} color="white" cursor={"pointer"} />
          </div>
        </article>
      </article>
    </nav>
  );
};

export default Navbar;
