import { useEffect, useState } from "react";
import {
  FaLongArrowAltRight,
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
const socialLinks = [
  { href: "https://wa.me/+1234567890", icon: <FaYoutube /> },
  {
    href: "https://www.linkedin.com/in/example",
    icon: <FaLinkedinIn />,
  },
  { href: "https://www.facebook.com/example", icon: <FaFacebookF /> },
  { href: "https://twitter.com/example", icon: <FaTwitter /> },
  {
    href: "https://www.instagram.com/example",
    icon: <FaInstagram />,
  },
];
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
    <>
      <div
        className={`text-white fixed ${
          Hide ? "right-[-30%]" : "right-[0%]"
        } top-[50%] transition-all duration-700 z-50  flex scroll-top`}
        onClick={scrollToTop}
      >
        <p className="rotate-[268deg] flex lg:text-1xl flex-row-reverse items-center justify-center gap-2">
          Scroll To Top <FaLongArrowAltRight />
        </p>
      </div>

      <div
        className={`text-white fixed ${
          Hide ? "left-[-30%]" : "left-[2%]"
        } top-[30%] transition-all duration-700 z-50  flex flex-col items-center gap-5 scroll-top`}
      >
        {socialLinks.map((link, index) => (
          <a
            className=" lg:text-2xl "
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        ))}

        <p className="h-[70px] w-[1px] bg-white "></p>
      </div>

      <div className=" fixed bottom-[4%] z-3 left-[1%] text-[#F2881F] flex flex-col gap-2">
        <div className=" grid place-items-center rounded-lg w-[50px] h-[50px] bg-black">
          <p>AR</p>
        </div>
        <div className=" grid place-items-center rounded-lg w-[50px] h-[50px] bg-black">
          <FaPhoneVolume />
        </div>
        <div className=" grid place-items-center rounded-lg w-[50px] h-[50px] bg-black">
          <FaWhatsapp />
        </div>
      </div>
    </>
  );
};

export default ScrollToTop;
