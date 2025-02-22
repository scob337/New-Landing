import { motion, AnimatePresence } from "framer-motion";
import propTypes from "prop-types";

const ContentGrid = ({ isOpen }) => {
  const sections = [
    {
      text: "Web Development",
      initial: { x: "-100%" },
      animate: { x: "0%" },
      exit: { x: "-100%" }, // يخرج بنفس الطريقة اللي دخل بيها
    },
    {
      text: "Branding",
      initial: { x: "100%" },
      animate: { x: "0%" },
      exit: { x: "100%" },
    },
    {
      text: "Social Media",
      initial: { y: "-100%" },
      animate: { y: "0%" },
      exit: { y: "-100%" },
    },
    {
      text: "Google Adword",
      initial: { y: "100%" },
      animate: { y: "0%" },
      exit: { y: "100%" },
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="flex-1 grid grid-cols-2 grid-rows-2">
          {sections.map((section, index, array) => (
            <motion.div
              key={index}
              initial={section.initial}
              animate={section.animate}
              exit={section.exit} // يخفي العنصر بنفس الترتيب العكسي
              transition={{
                duration: 0.5,
                delay: isOpen ? index * 0.1 : (array.length - index) * 0.1, // يخفي العنصر بترتيب عكسي
              }}
              className="flex items-center justify-center text-white"
              style={{
                backgroundColor: `rgb(${100 + index * 30}, ${
                  100 + index * 20
                }, ${100 + index * 10})`,
              }}
            >
              <p>{section.text}</p>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

ContentGrid.propTypes = {
  isOpen: propTypes.bool,
};
export default ContentGrid;
