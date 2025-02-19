import CustomCursor from "../Components/MouseEffect";
import Navbar from "../Components/NavBar/Navbar"
import Home from "../Pages/Home/home";

const MainLayOut = () => {
  return (
    <div className="relative">
        <CustomCursor />
        <Navbar />
      <Home />
    </div>
  );
}

export default MainLayOut
