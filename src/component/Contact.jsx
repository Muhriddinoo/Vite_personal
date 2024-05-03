const Contact = () => {
  return (
    <>
      <div className="contact container mx-auto flex flex-col items-center justify-center gap-5">
        <h1 className="text-[50px] font-[700] mt-[50px]">
          Lets Design Together
        </h1>
        <p className=" text-[20px] text-center xl:w-[800px] lg:w-[800px]">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam venenatis fghh hgjj nisi ante.
        </p>
        <div className="input flex gap-2">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="p-[10px] border rounded-[20px] w-[400px] text-[20px]"
          />
          <button className="w-[150px] h-[50px] border bg-orange-600 text-white font-[700] rounded-[20px]">
            Contact Me{" "}
          </button>
        </div>
      </div>
    </>
  );
};
export default Contact;
