import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-dark.png";
import { useState } from "react";

const NavBar = () => {
  const [navDrop, setNavDrop] = useState(false);
  const handleClick = () => {
    return setNavDrop((prevState) => !prevState);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 shadow-xl">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      {/*normal view */}{" "}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/*mobile view */}
      <div onClick={handleClick} className=" z-10 md:hidden">
        {navDrop ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={
          navDrop
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-4xl"
            : "hidden"
        }
      >
        <li className="py-6">Home</li>
        <li className="py-6">About</li>
        <li className="py-6">Skills</li>
        <li className="py-6">Projects</li>
        <li className="py-6">Contact</li>
      </ul>
      {/*social icons */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[10rem] h-[3.75rem] flex items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[10rem] h-[3.75rem] flex items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#333333]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[10rem] h-[3.75rem] flex items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#6fc2b0]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[10rem] h-[3.75rem] flex items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#565f69]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
