"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="max-w-60 h-screen bg-white shadow-md p-4 pt-4">
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
        <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-500">
          <span onClick={() => router.push("/createTask")}>Create task</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold pt-8">Lists</h3>
      <div className="space-y-4 mt-2">
        <div
          className="flex items-center space-x-2 cursor-pointe  hover:text-blue-500r"
          onClick={() => router.push("/")}
        >
          <span>All tasks</span>
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
    </div>
  );
};

export default SideBar;
