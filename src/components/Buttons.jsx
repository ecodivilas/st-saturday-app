import React from "react";
import { FiUser } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";
import { IoMdCodeWorking } from "react-icons/io";
import { IoMdBusiness } from "react-icons/io";

const Buttons = () => {
  return (
    <>
      <div className="mt-80">
        <div className="flex items-center justify-center w-full grid-cols-2 gap-4 p-2 text-sm font-bold ">
          <button className="flex items-center justify-center w-1/3 h-10 p-1 text-white bg-amber-700 hover:amber-600">
            <GiSkills size={20} />
            Core Skills
          </button>

          <button className="flex items-center justify-center w-1/3 h-10 p-1 text-white bg-amber-700 hover:amber-600">
            <MdEventAvailable size={20} />
            Availability
          </button>
        </div>
        <div className="flex items-center justify-center w-full gap-4 p-2 text-sm font-bold">
          <button className="flex items-center justify-center w-1/3 h-10 p-1 text-white bg-amber-700 hover:amber-600">
            <IoMdCodeWorking size={20} />
            Projects
          </button>

          <button className="flex items-center justify-center w-1/3 h-10 p-1 text-white bg-amber-700 hover:amber-600">
            <IoMdBusiness size={20} />
            Experiences
          </button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
