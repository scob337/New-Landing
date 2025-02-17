import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo.webp";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const Ref = useRef();

  // ضبط الإحداثيات عند تحميل الصفحة بناءً على العنصر
  useEffect(() => {
    if (Ref.current) {
      const Bounded = Ref.current.getBoundingClientRect();
      // تحديد المكان الافتراضي في المنتصف
      setPosition({
        x: Bounded.width / 2, // في منتصف العنصر الأب
        y: Bounded.height / 2, // في منتصف العنصر الأب
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!isMouseInside) return; // لا يتم التفاعل مع الماوس إذا كان خارج العنصر
    if (Ref.current) {
      const elementRect = Ref.current.getBoundingClientRect();
      const mouseX = e.clientX - elementRect.left;
      const mouseY = e.clientY - elementRect.top;

      const boundedX = Math.max(0, Math.min(mouseX, elementRect.width - 50));
      const boundedY = Math.max(0, Math.min(mouseY, elementRect.height - 50));

      setPosition({ x: boundedX, y: boundedY });
    }
  };

  const handleMouseLeave = () => {
    if (Ref.current) {
      const Bounded = Ref.current.getBoundingClientRect();
      // إرجاع العنصر إلى المكان الافتراضي (المنتصف)
      setPosition({
        x: Bounded.width / 2, // في منتصف العنصر الأب
        y: Bounded.height / 2, // في منتصف العنصر الأب
      });
    }
    setIsMouseInside(false); // إيقاف التفاعل مع الماوس بعد الخروج من العنصر
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true); // تمكين التفاعل مع الماوس عند دخول العنصر
  };

  return (
    <nav className="bg-sky-900 px-5 py-2 h-30 flex items-center">
      <article className="flex justify-between items-center w-full">
        <div className="w-30 flex justify-center items-center">
          <img src={Logo} alt="Site Logo" />
        </div>
        <article
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          ref={Ref}
          className="w-30 h-30 flex justify-center items-center relative overflow-hidden cursor-pointer"
        >
          <div
            className="absolute transition duration-700 ease-in-out"
            style={{
              left: isMouseInside ? `${position.x}px` : "50%", // إذا كان الماوس داخل العنصر
              top: isMouseInside ? `${position.y}px` : "50%", // إذا كان الماوس داخل العنصر
              transform: isMouseInside ? "" : "translate(-50%, -50%)", // نقل العنصر فقط في حالة الماوس داخل العنصر
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
