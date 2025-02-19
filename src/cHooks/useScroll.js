import { useEffect, useState } from "react";

// Custom Hook to detect scroll direction
const useScrollDirection = (delay = 200) => {
  const [scrollDirection, setScrollDirection] = useState(null);
  let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;

      setTimeout(() => {
        setScrollDirection(null);
      }, delay);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [delay]);

  return scrollDirection;
};

export default useScrollDirection;