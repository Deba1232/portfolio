import htmlImg from "../assets/html.png";
import javaScriptImg from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import tailwindImg from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className=" w-full h-screen bg-[#0a192ff6] text-gray-300"
    >
      <div className="max-w-[62.5rem] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            These are the techologies that I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c169c] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={htmlImg} alt="HTML icon" />
            <p className="my-5">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c169c] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={javaScriptImg}
              alt="Javascript icon"
            />
            <p className="my-5">JavaScript</p>
          </div>

          <div className="shadow-md shadow-[#040c169c] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={tailwindImg}
              alt="Tailwind icon"
            />
            <p className="my-5">Tailwind CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c169c] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reactImg} alt="React icon" />
            <p className="my-5">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
