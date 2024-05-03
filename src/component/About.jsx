import rasm from "../images/img.png";

const About = () => {
  return (
    <>
      <div className="about container mx-auto flex xl:flex-row lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse sm:items-center md:items-center gap-5 ">
        <div className="about-img">
          <img src={rasm} alt="" />
        </div>
        <div className="about-text lg:items-center flex flex-col xl:items-start gap-4">
          <h1 className="text-[40px] font-[600] xl:font-[700] lg:font-[600]">
            About Me
          </h1>
          <p className="text-[20px] xl:w-[600px] lg:w-[700px] lg:text-center xl:text-start">
            Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
            felis ligula aliquam venenatis nisi ante. Aliquet ornare tellus
            consectetur lacus
          </p>
          <div className="progres  w-[700px]  h-[300px] flex flex-col gap-6 p-[10px]">
            <div className="one flex flex-col gap-2">
              <h3 className="font-[700]">HTML</h3>
              <div className="line w-[100%] h-[20px]  bg-slate-400 rounded-[20px]">
                <div className="line1 w-[100%] h-[20px] rounded-[20px] bg-orange-600"></div>
              </div>
            </div>
            <div className="one flex flex-col gap-2">
              <h3 className="font-[700]">CSS</h3>
              <div className="line w-[100%] h-[20px]  bg-slate-400 rounded-[20px]">
                <div className="line1 w-[90%] h-[20px] rounded-[20px] bg-orange-600"></div>
              </div>
            </div>
            <div className="one flex flex-col gap-2">
              <h3 className="font-[700]">JavaScript</h3>
              <div className="line w-[100%] h-[20px]  bg-slate-400 rounded-[20px]">
                <div className="line1 w-[70%] h-[20px] rounded-[20px] bg-orange-600"></div>
              </div>
            </div>
            <div className="one flex flex-col gap-2">
              <h3 className="font-[700]">React JS</h3>
              <div className="line w-[100%] h-[20px]  bg-slate-400 rounded-[20px]">
                <div className="line1  w-[80%] h-[20px] rounded-[20px] bg-orange-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
