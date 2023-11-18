import { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Logo from "../assets/logo-dark.png";

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
      <ul className="hidden sm:flex">
        {/* <Link to="home" smooth={true} duration={500}>
          Home
        </Link> */}
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/*mobile view */}
      <div onClick={handleClick} className=" z-10 sm:hidden">
        {navDrop ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={
          navDrop
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-4xl"
            : "hidden"
        }
      >
        <li className="py-6">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/*social icons */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[10rem] h-[3.75rem] flex items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/debanjan-das-025520151/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[10rem] h-[3.75rem] flex items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#333333]">
            <a
              href="https://github.com/Deba1232"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[10rem] h-[3.75rem] flex items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto:debanjan.das90@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[10rem] h-[3.75rem] flex items-center ml-[-6.25rem] hover:ml-[-0.625rem] duration-300 bg-[#565f69]">
            <a
              href="/Resume_Debanjan_Das.pdf"
              download
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
