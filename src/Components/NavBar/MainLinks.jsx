import { motion, AnimatePresence } from "framer-motion";
import propTypes from "prop-types";

const MainLinks = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.6, ease: "linear" }}
          className="bg-gray-900 text-white flex-1 flex items-center justify-center z-50"
        >
          <ul className="text-3xl font-bold space-y-5 text-center">
            {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map(
              (item, index, array) => (
                <motion.li
                  key={index}
                  className="relative cursor-pointer overflow-hidden group text-white transition-all duration-500 ease-linear"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.5,
                    ease: "linear",
                    delay: isOpen ? index * 0.1 : (array.length - index) * 0.1,
                  }}
                >
                  <span
                    className="relative z-10 bg-gradient-to-r from-[#F2881F] to-[#F2881F] bg-[length:0%_100%] bg-no-repeat bg-clip-text text-white transition-all duration-500 ease-linear group-hover:text-transparent group-hover:bg-[length:100%_100%] group-hover:bg-right"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #F2881F, #F2881F)",
                      backgroundSize: "0% 100%",
                      backgroundPosition: "left",
                      transition:
                        "background-size 0.5s linear, background-position 0.5s linear",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundSize = "100% 100%")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundSize = "0% 100%")
                    }
                  >
                    {item}
                  </span>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MainLinks.propTypes = {
  isOpen: propTypes.bool,
};

export default MainLinks;
