import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Logo from "../../assets/Logo.webp";
import { FaBarsStaggered } from "react-icons/fa6";
import useMouseMove from "../../cHooks/useMouseMove";
import MainLinks from "./MainLinks";
import ContentGrid from "./ContentGrid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const Ref = useRef();
  const {
    position,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter,
    isMouseInside,
  } = useMouseMove();

  return (
    <>
      <nav className="px-5 py-2 h-30 flex items-center relative z-50 overflow-hidden">
        <article className="flex justify-between items-center w-full absolute top-0 left-0">
          <div className="w-30 flex justify-center items-center cursor-pointer logo">
            <img src={Logo} alt="Site Logo" />
          </div>

          <article
            onMouseMove={(e) => handleMouseMove(e, Ref)}
            onMouseLeave={() => handleMouseLeave(Ref)}
            onMouseEnter={handleMouseEnter}
            ref={Ref}
            className="w-30 h-30 flex justify-center items-center relative overflow-hidden cursor-pointer z-[60]" // رفع الـ z-index عشان يكون فوق القائمة
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className="absolute transition duration-[1000] linear z-[60]" // الـ z-index أعلى من النافبار
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex flex-col lg:flex-row transition-all duration-500 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // يختفي بنفس سلاسة الظهور
            transition={{ duration: 0.5 }}
          >
            <div
              className="fixed inset-0 z-30"
              onClick={() => setIsOpen(false)}
            />

            <MainLinks isOpen={isOpen} />

            <ContentGrid isOpen={isOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
