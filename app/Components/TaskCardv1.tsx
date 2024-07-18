"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { IoBag } from "react-icons/io5";
import { task } from "../types";
import { deleteTask } from "../apis/deleteTask";
import { markTaskComplete } from "../apis/markTaskComplete";
import { updateDatabase } from "../apis/updateDatabase";
import { useRouter } from "next/navigation";
interface Props {
  task: any;
}
const TaskCardv1 = ({ task }: Props) => {
  const router = useRouter();
  return (
    <div className=" rounded-xl shadow-sm bg-white w-60 p-4 hover:border-2 hover:border-blue-500 ">
      <div>
        <div className="text-sm flex items-center  ">{task.tag}</div>
      </div>
      <div
        className={
          task.completed ? "line-through  text-xl pt-2 " : "text-xl pt-2 "
        }
      >
        {task.taskName}
      </div>
      <div className=" text-gray-400 text-md border-b-2 border-gray-200">
        <p className="completed">{task.taskDescription}</p>
      </div>
    </div>
  );
};

export default TaskCardv1;
