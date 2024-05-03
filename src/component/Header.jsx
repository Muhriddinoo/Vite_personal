import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header container mx-auto h-[100px]  flex items-center justify-between pl-[10px] pr-[10px]">
        <div className="logo">
          <h1 className="text-[40px] font-[700]">
            <span className="text-[#fff] p-[5px] rounded-[20px] bg-orange-600">
              M
            </span>
            uhriddin
          </h1>
        </div>
        <div className="link hidden xl:block md:hidden lg:hidden sm:hidden">
          <ul className="flex gap-[50px]  ">
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
        </div>
        <div className="menu " onClick={toggleModal}>
          <i className="bx bx-menu hidden sm:block md:block text-[40px] cursor-pointer 2xl:hidden xl:hidden  "></i>
        </div>
      </div>
      {isOpen && (
        <div className="modal fixed top-0 left-0  flex items-start justify-center w-[100%] h-[10vh] ">
          <div className="modal-content  bg-neutral-800 w-[100%] h-[10vh]">
            <i
              className="bx bx-menu hidden sm:block md:block text-[40px] cursor-pointer 2xl:hidden xl:hidden absolute text-[#fff]"
              onClick={toggleModal}
            >
              &times;
            </i>
            <h2>Modal Title</h2>
            <p>This is the content of the modal.</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Header;
