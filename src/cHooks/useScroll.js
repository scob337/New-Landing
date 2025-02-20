import { useEffect, useState, useRef } from "react";

// Custom Hook to detect scroll direction (global scroll)
const useScrollDirection = (delay = 200) => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollY = useRef(0);
  const timeoutId = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const getScrollY = () => {
      // استخدام document.documentElement لتتبع الاسكرول على مستوى الصفحة
      return document.documentElement.scrollTop || window.pageYOffset;
    };

    const handleScroll = () => {
      const currentScrollY = getScrollY();

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current) {
            setScrollDirection("down");
          } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection("up");
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }

      // إعادة التعيين إلى null بعد فترة
      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        setScrollDirection(null);
      }, delay);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, [delay]);

  return scrollDirection;
};

export default useScrollDirection;
