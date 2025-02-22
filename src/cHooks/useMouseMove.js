import { useState, useEffect } from "react";

const useMouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseMove = (e, ref) => {
    if (!isMouseInside || !ref.current) return;

    const elementRect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - elementRect.left;
    const mouseY = e.clientY - elementRect.top;

    setPosition({ x: mouseX, y: mouseY });
  };

  const handleMouseLeave = (ref) => {
    if (ref.current) {
      const Bounded = ref.current.getBoundingClientRect();
      setPosition({
        x: Bounded.width / 2,
        y: Bounded.height / 2,
      });
    }
    setIsMouseInside(false);
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  useEffect(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return {
    position,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter,
    isMouseInside,
  };
};

export default useMouseMove;
