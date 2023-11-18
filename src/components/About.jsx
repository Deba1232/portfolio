const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192ff6] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[62.5rem] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[62.5rem] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi👋, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building engaging and user-friendly web
              applications, and am actively seeking a challenging and rewarding
              opportunity with an organization that values my drive and
              out-of-the-box thinking, while providing a conducive environment
              to nurture and advance my analytical and technical skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
