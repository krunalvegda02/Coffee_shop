import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSidebar,
  closeSidebar,
  closebillsider,
} from "../redux/Slices/SidebarSlice";
import Sidebar from "./Sidebar";
import Modal from "./Model";
import { PlusOutlined } from "@ant-design/icons";

function Header() {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);
  const billSiderOpen = useSelector((state) => state.sidebar.billSiderOpen);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNewOrderClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSidebarIconClick = () => {
    if (billSiderOpen) {
      dispatch(closebillsider());
    } else if(sidebarOpen){
      dispatch(closeSidebar());
    }
    else {
      dispatch(openSidebar());
    }
  };

  return (
    <>
      <div
        className={`lg:flex justify-between mr-2 transition-all duration-300 ${
          sidebarOpen || billSiderOpen ? "mr-[25.8%]" : ""
        } `}
      >
        <h1 className="text-start font-light font-sans ml-4 text-[40px]">
          Orely Cafe Menu
        </h1>
        <div className="mt-3 flex">
          <button
            type="button"
            onClick={() => handleNewOrderClick()}
            className="rounded-3xl container text-lg h-12 px-4 bg-gray-900 text-white "
          >
            New Order <PlusOutlined className="ml-1 text-xl" />
          </button>

          <div className="">
            <button
              type="button"
              onClick={onSidebarIconClick}
              // onDoubleClick={handleDoubleClick}
              className="text-center pl-3 text-white"
            >
              <img
                src="./src/assets/menu.png"
                alt="Sidebar Icon"
                height={55}
                width={70}
                className={`transition-transform duration-500 ${
                  sidebarOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <Sidebar isOpen={sidebarOpen} />
    </>
  );
}

export default Header;
