import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192ff6]">
      <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Debanjan Das
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Front End Developer
        </h2>
        <div>
          <button className="text-white border-2 px-6 py-3 my-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="projects" smooth={true} duration={500}>
              View projects
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
