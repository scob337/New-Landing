import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const ScrollToTop = () => {
    const [Hide, setHide] = useState(true);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) {
                setHide(false);
            } else {
                setHide(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className={`text-white fixed ${Hide ? "right-[-30%]" : "right-[0%]"} top-[50%] transition-all duration-700 z-50  flex scroll-top`} onClick={scrollToTop}>
        <p className="rotate-[268deg] flex flex-row-reverse items-center justify-center gap-2">Scroll To Top <FaLongArrowAltRight /></p>
        

        </div>
    )
}

export default ScrollToTop
