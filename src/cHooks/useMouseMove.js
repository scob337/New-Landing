// useMouseMove.js
import { useState, useEffect } from "react";

const useMouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseMove = (e, ref) => {
    if (!isMouseInside || !ref.current) return;

    const elementRect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - elementRect.left;
    const mouseY = e.clientY - elementRect.top;

    const boundedX = Math.max(0, Math.min(mouseX, elementRect.width - 50));
    const boundedY = Math.max(0, Math.min(mouseY, elementRect.height - 50));

    setPosition({ x: boundedX, y: boundedY });
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
