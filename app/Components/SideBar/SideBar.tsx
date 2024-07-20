"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoMoon, IoSunny } from "react-icons/io5";

const SideBar = () => {
  const router = useRouter();
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="max-w-60 h-[1140px] dark:bg-slate-800 dark:text-white bg-white shadow-md p-4 pt-4 dark:border-r-2 ">
      <div className="flex justify-center">
        <a
          onClick={() => router.push("/")}
          className="hover:cursor-pointer text-4xl text-blue-500 font-bold"
        >
          ToDo
        </a>
      </div>
      <div className="space-y-4   ">
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-lg font-semibold pt-8">Actions</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-500 ">
          <span onClick={() => router.push("/createTask")}>Create task</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold pt-8">Lists</h3>
      <div className="space-y-4 mt-2">
        <div className="flex items-center space-x-2   hover:text-blue-500 hover:cursor-pointer">
          <span onClick={() => router.push("/")}>All tasks</span>
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer  hover:text-blue-500"
          onClick={() => router.push("/highPriority")}
        >
          <span>High priority tasks</span>
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer  hover:text-blue-500"
          onClick={() => router.push("/lowPriority")}
        >
          <span>Low priority tasks</span>
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer  hover:text-blue-500"
          onClick={() => router.push("/notDoneTasks")}
        >
          <span>Not done tasks</span>
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer  hover:text-blue-500"
          onClick={() => router.push("/doneTasks")}
        >
          <span>Done tasks</span>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-lg font-semibold">Tags</h3>
        <div className="mt-2 space-y-2">
          <div
            className="flex items-center space-x-2 cursor-pointer  hover:text-blue-500 "
            onClick={() => router.push("work")}
          >
            <span>Work</span>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer  hover:text-blue-500"
            onClick={() => router.push("health")}
          >
            <span>Health</span>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer  hover:text-blue-500"
            onClick={() => router.push("education")}
          >
            <span>Education</span>
          </div>
          <div
            className="flex items-center space-x-2 cursor-pointer  hover:text-blue-500"
            onClick={() => router.push("freeTime")}
          >
            <span>Free time</span>
          </div>
        </div>
      </div>

      <div className="pt-8 ">
        <h3 className="text-lg font-semibold mb-2">Settings </h3>
        <button onClick={() => darkModeHandler()}>
          {dark && <IoSunny size={20} />}
          {!dark && <IoMoon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
