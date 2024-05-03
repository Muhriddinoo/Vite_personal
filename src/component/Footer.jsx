const Footer = () => {
  return (
    <>
      <div className="footer container mx-auto flex  flex-col items-center mt-[50px] gap-5 ">
        <h1 className="text-[40px] font-[700]">
          <span className="text-[#fff] p-[5px] rounded-[20px] bg-orange-600">
            M
          </span>
          uhriddin
        </h1>
        <ul className=" gap-[50px] hidden xl:block xl:flex">
          <li className="cursor-pointer font-[600] hover:text-orange-600 transition ">
            Bosh sahifa
          </li>
          <li className="cursor-pointer font-[600] hover:text-orange-600 transition ">
            Men haqimda
          </li>
          <li className="cursor-pointer font-[600] hover:text-orange-600 transition ">
            O'rganganlarim
          </li>
          <li className="cursor-pointer font-[600] hover:text-orange-600 transition ">
            Qilgan ishlarim
          </li>
          <li className="cursor-pointer font-[600] hover:text-orange-600 transition ">
            Bizning komanda
          </li>
          <li className="cursor-pointer font-[600] hover:text-orange-600 transition ">
            Bog'lanish
          </li>
        </ul>
        <div className="icon flex gap-3 hidden xl:block">
          <i className="bx bxl-facebook-circle text-[40px] cursor-pointer p-[10px] hover:bg-orange-600 hover:rounded-full hover:text-white"></i>
          <i className="bx bxl-google-plus-circle text-[40px] cursor-pointer p-[10px] hover:bg-orange-600 hover:rounded-full hover:text-white"></i>
          <i className="bx bxl-github text-[40px] cursor-pointer p-[10px] hover:bg-orange-600 hover:rounded-full hover:text-white"></i>
          <i className="bx bxl-telegram text-[40px] cursor-pointer p-[10px] hover:bg-orange-600 hover:rounded-full hover:text-white"></i>
        </div>
        <div className="one w-[100%] h-[40px] flex items-center justify-center bg-gray-600 text-white gap-3">
          © 2023 <span className="font-[700] text-orange-600">Muhriddin</span>{" "}
          All Rights Reserved , Inc.
        </div>
      </div>
    </>
  );
};
export default Footer;
