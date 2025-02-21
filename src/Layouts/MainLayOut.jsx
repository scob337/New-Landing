import Partners from "../Components/HomeComponents/Partners/Partners";
import CustomCursor from "../Components/MouseEffect";
import Navbar from "../Components/NavBar/Navbar";
import ScrollToTop from "../Components/SharedComponents/ScrollToTop";
import Home from "../Pages/Home/home";
const MainLayOut = () => {
  return (
    <div className="relative overflow-x-hidden  h-fit">
      <CustomCursor />
      <Navbar />
      <Home />
      <Partners />
      <ScrollToTop />
    </div>
  );
};

export default MainLayOut;
