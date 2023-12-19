import Modal from "../Ui/Modal";

const Form = ({ newwidth, form }) => {
  return (
    <section className="mt-9 lg:mt-12  lg:z-50  2xl:w-[20%]">
      <Modal newwidth={newwidth}>
        <form ref={form}>
          <div className="sm:col-span-4 p-2 ">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="bg-[#f6f6f6] block flex-1 border-none rounded-3xl  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>
          {/* email */}
          <div className="sm:col-span-4 p-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className=" bg-[#f6f6f6] border-none rounded-3xl  block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="test@test.com"
                />
              </div>
            </div>
          </div>

          {/* email */}
          {/* subject */}
          <div className="sm:col-span-4 p-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Subject
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm  focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="username"
                  className="bg-[#f6f6f6] border-none rounded-3xl   block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="subject"
                />
              </div>
            </div>
          </div>

          {/* subject */}
          <section className="col-span-full p-2">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              About
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className=" bg-[#f6f6f6] border-none  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences about yourself.
            </p>
          </section>
          <button className="bg-black text-white px-[20px] text-base rounded-3xl h-11 p-2">
            Send Message
          </button>
        </form>
      </Modal>
    </section>
  );
};

export default Form;
