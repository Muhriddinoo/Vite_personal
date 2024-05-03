import bloom from "../images/blom.png";
import dsi from "../images/DSI.png";
import building from "../images/building.png";

const Project = () => {
  return (
    <>
      <div className="project container mx-auto flex xl:flex-col lg:flex-col md:flex-col sm:flex-col items-center justify-center mt-[50px] gap-5">
        <div className="project-text flex flex-col items-center justify-center gap-5">
          <h1 className="text-[50px] font-[700]">My Project</h1>
          <p className="text-center text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            laborum quia culpa alias dolore perspiciatis laudantium suscipit
            quod laboriosam, dolorum dolores aspernatur vel eaque, officia
            itaque natus voluptatibus dolor nesciunt.
          </p>
        </div>
        <div className="project-img flex xl:flex-row lg:flex-col md:flex-col sm:flex-col items-center justify-center gap-8">
          <div className="item">
            <img src={bloom} alt="" className="w-[800px] " />
            <h3 className="text-orange-600 text-[40px] font-[700]">Bloom</h3>
          </div>
          <div className="item">
            <img src={dsi} alt="" className="w-[800px] " />
            <h3 className="text-orange-600 text-[40px] font-[700]">DSI</h3>
          </div>
          <div className="item">
            <img src={building} alt="" className="w-[800px] " />
            <h3 className="text-orange-600 text-[40px] font-[700]">Building</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
