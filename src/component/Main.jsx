import rasm from "../images/img.png";

const Main = () => {
  return (
    <>
      <div className="main container mx-auto 2xl:w-[100%] 2xl:flex xl:flex xl:flex-row lg:flex lg:flex-col  lg:items-center gap-10">
        <div className="main-text flex flex-col gap-4 ">
          <h3 className="text-[30px] font-[600] ">Hi I am </h3>
          <h3 className="text-[30px] text-orange-600 font-[700]">
            Jamoldinov Muhriddin
          </h3>
          <h1 className="text-[80px] font-[800] 2xl:font-[800] xl:w-[600px] lg:w-[900px] md:w-[900px ] md:text-[50px]">
            Front-End Developer
          </h1>
          <p className="text-[20px] md:w-[700px] lg:w-[800px]">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
            consectetur lacus
          </p>
          <button className="w-[150px] border h-[40px] rounded-[30px] bg-orange-600 text-[20px] font-[600] cursor-pointer text-white">
            Hire Me
          </button>
        </div>
        <div className="main-img flex flex-col items-center gap-5">
          <div className="img">
            <img src={rasm} alt="" />
          </div>
          <div className="icon flex gap-3">
            <i className="bx bxl-facebook-circle text-[40px] cursor-pointer p-[10px] hover:bg-orange-600 hover:rounded-full hover:text-white"></i>
            <i className="bx bxl-google-plus-circle text-[40px] cursor-pointer p-[10px] hover:bg-orange-600 hover:rounded-full hover:text-white"></i>
            <i className="bx bxl-github text-[40px] cursor-pointer p-[10px] hover:bg-orange-600 hover:rounded-full hover:text-white"></i>
            <i className="bx bxl-telegram text-[40px] cursor-pointer p-[10px] hover:bg-orange-600 hover:rounded-full hover:text-white"></i>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
