const NewsLetterBox = () => {
  const SubmitHandler = (e) => {
    e.prventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-extrabold text-gray-900">
        Subscribe now & get 20% off{" "}
      </p>
      <p className="text-gray-600 mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem rerum,
        libero expedita possimus magnam aliquid sequi velit tempore enim
        officia.
      </p>
      <form
        onSubmit={SubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-2 pl-3"
      >
        <input
          type="email"
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter Your Email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
