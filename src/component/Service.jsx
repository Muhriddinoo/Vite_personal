const Service = () => {
  return (
    <>
      <div className="service container mx-auto flex xl:flex-col lg:flex-col md:flex-col sm:flex-col items-center  justify-center gap-9 mt-[50px]">
        <div className="service-text flex xl:flex-col lg:flex-col md:flex-col sm:flex-col items-center justify-center">
          <h1 className="text-[50px] font-[700]">Service</h1>
          <p className="text-[20px] w-[800px] text-center xl:w-[800px] sm:w-[600px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            commodi praesentium veniam tenetur, sapiente molestias doloribus
            aliquid distinctio atque? Aspernatur corrupti voluptas, in obcaecati
            nemo id dicta cum officia dolorum.
          </p>
        </div>
        <div className="service-img flex xl:flex-row lg:flex-wrap md:flex-wrap sm:flex-wrap gap-2 items-center justify-center ">
          <div className="item w-[300px] bg-slate-300 h-[200px] flex flex-col items-start justify-center gap-2 p-[10px] rounded-[30px]">
            <i className="bx bxl-html5 text-orange-600 text-[50px]"></i>
            <h2 className="text-[30px] font-[600]">HTML</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="item w-[300px] bg-slate-300 h-[200px] flex flex-col items-start justify-center gap-2 p-[10px] rounded-[30px]">
            <i className="bx bxl-css3  text-orange-600 text-[50px]"></i>
            <h2 className="text-[30px] font-[600]">CSS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="item w-[300px] bg-slate-300 h-[200px] flex flex-col items-start justify-center gap-2 p-[10px] rounded-[30px]">
            <i className="bx bxl-javascript text-orange-600 text-[50px]"></i>
            <h2 className="text-[30px] font-[600]">JavaScript</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="item w-[300px] bg-slate-300 h-[200px] flex flex-col items-start justify-center gap-2 p-[10px] rounded-[30px]">
            <i className="bx bxl-react text-orange-600 text-[50px]"></i>
            <h2 className="text-[30px] font-[600]">React</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
