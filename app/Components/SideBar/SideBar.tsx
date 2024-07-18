"use client";
import React from "react";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="max-w-60  bg-white shadow-md p-4 pt-4">
      <div className="flex justify-center">
        <a
          onClick={() => router.push("/")}
          className="hover:cursor-pointer text-4xl text-blue-500 font-bold"
        >
          ToDo
        </a>
      </div>
      <h3 className="text-lg font-semibold pt-8">Lists</h3>
      <div className="space-y-4 mt-2">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span>All tasks</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>Today tasks</span>
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/notDoneTasks")}
        >
          <span>Not done tasks</span>
        </div>
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/doneTasks")}
        >
          <span>Done tasks</span>
        </div>
      </div>
      <div className="space-y-4   ">
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="text-lg font-semibold pt-8">Actions</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span onClick={() => router.push("/createTask")}>Create task</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>Delete task</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>Adit task</span>
        </div>
      </div>
      <div className="pt-8">
        <h3 className="text-lg font-semibold">Tags</h3>
        <div className="mt-2 space-y-2">
          <div className="flex items-center space-x-2 cursor-pointer">
            <span>Work</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span>School</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span>Free time</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span>Family</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span>Friends</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span>Health</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
