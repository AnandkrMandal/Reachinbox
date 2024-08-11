
import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { FaInbox  ,FaList} from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { Tooltip } from "@material-tailwind/react";

function SideBar({ onMenuItemClick }: any) {
  const [selectedItem, setSelectedItem] = useState("/");

  const handleMenuItemClick = (path: string) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#101113] bg-white overflow-y-scroll no-scrollbar h-screen w-14 flex flex-col justify-between items-center py-6 border-r-2 dark:border-[#343A40] border-[#E0E0E0] left-0 top-0 fixed z-10">
      <div className="rounded-xl">
        <img
          src={logo}
          className="h-8 rounded-xl object-left overflow-visible"
          alt="Logo"
        />
      </div>
      <div className="text-[#AEAEAE] text-2xl space-y-7">
        <Tooltip content="Home" placement="right-start">
          <div
            className={`cursor-pointer p-1 ${
              selectedItem === "/" ? "bg-gray-600 rounded-lg" : ""
            }`}
            onClick={() => handleMenuItemClick("/")}
          >
            <RiHome5Fill className="text-black  dark:text-white" />
          </div>
        </Tooltip>
        <Tooltip content="User Search" placement="right-start">
          <div
            className={`cursor-pointer  p-1 ${
              selectedItem === "/search" ? "bg-gray-600 rounded-lg" : ""
            }`}
            onClick={() => handleMenuItemClick("/search")}
          >
            <RiUserSearchLine className="text-black   dark:text-white" />
          </div>
        </Tooltip>
        <Tooltip content="Mail" placement="right-start">
          <div
            className={`cursor-pointer p-1 ${
              selectedItem === "/mail" ? "bg-gray-600 rounded-lg" : ""
            }`}
            onClick={() => handleMenuItemClick("/mail")}
          >
            <RiMailFill className="text-black  dark:text-white" />
          </div>
        </Tooltip>
        <Tooltip content="Send" placement="right-start">
          <div
            className={`cursor-pointer p-1 ${
              selectedItem === "/send" ? "bg-gray-600 rounded-lg" : ""
            }`}
            onClick={() => handleMenuItemClick("/send")}
          >
            <IoIosSend className="text-black  dark:text-white" />
          </div>
        </Tooltip>
        <Tooltip content="Stack" placement="right-start">
          <div
            className={`cursor-pointer p-1 ${
              selectedItem === "/stack" ? "bg-gray-600 rounded-lg" : ""
            }`}
            onClick={() => handleMenuItemClick("/stack")}
          > 
            <FaList className="text-black  dark:text-white"/>
          </div>
        </Tooltip>
        <Tooltip content="Inbox" placement="right-start">
          <div
            className={`cursor-pointer p-1 ${
              selectedItem === "/inbox" ? "bg-gray-600  rounded-lg" : ""
            }`}
            onClick={() => handleMenuItemClick("/inbox")}
          >
            <FaInbox className="text-black  dark:text-white" />
          </div>
        </Tooltip>
        <Tooltip content="chart" placement="right-start">
          <div
            className={`cursor-pointer p-1 ${
              selectedItem === "/stacks" ? "bg-gray-600 rounded-lg" : ""
            }`}
            onClick={() => handleMenuItemClick("/stacks")}
          >
            <IoStatsChartSharp className="text-black  dark:text-white" />
          </div>
        </Tooltip>
      </div>
      <div className="bottom-0 left-0">
        <Tooltip content="useremail.com" placement="right-start">
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default SideBar;
