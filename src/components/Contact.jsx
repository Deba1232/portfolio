const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192ff6] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/2b5ceb4e-4fc2-4ccf-9197-481c84c0ea9e"
        className="flex flex-col max-w-[37.5rem] w-full"
      >
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message Me"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Get In Touch
        </button>
      </form>
    </div>
  );
};

export default Contact;
