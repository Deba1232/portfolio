import { FaBars } from "react-icons/fa";
import Logo from "../assets/logo-dark.png";

const NavBar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/*normal view */}
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>

      {/*mobile view */}
      <div className="hidden">
        <FaBars />
      </div>

      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/*social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default NavBar;
