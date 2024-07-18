import React from "react";
import { CiSearch } from "react-icons/ci";
type Props = {};

const TaskCreateHeader = (props: Props) => {
  return (
    <div className=" flex justify-center w-full px-8">
      <div className="relative top-2 left-7">
        <CiSearch className="text-2xl  text-black" />
      </div>
      <input
        placeholder="placeholder"
        className="w-full rounded-sm h-10 shadow-xl pl-10 text-black"
      ></input>
    </div>
  );
};

export default TaskCreateHeader;
