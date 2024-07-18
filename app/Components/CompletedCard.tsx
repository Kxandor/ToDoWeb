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
  setTasks: any;
  tasks: any;
}
const CompletedCard = ({ task, setTasks, tasks }: Props) => {
  const router = useRouter();
  return (
    <div className=" rounded-xl shadow-sm bg-white w-60 p-4 hover:border-2 hover:border-blue-500 ">
      <div>
        <div className="text-sm flex items-center  ">
          <input />
        </div>
      </div>
      <div
        className={
          task.completed ? "line-through  text-xl pt-2 " : "text-xl pt-2 "
        }
      >
        <input />
      </div>
      <div className=" text-gray-400 text-md border-b-2 border-gray-200">
        <p className="completed">
          <input />
        </p>
      </div>

      <div className="flex justify-between py-2 text-sm">
        <div>
          <button onClick={() => router.push(`/editTask/`)}>Edit</button>
        </div>
        <div>
          <button
            onClick={() => {
              deleteTask(task.id, setTasks, tasks);
            }}
          >
            Delete
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              markTaskComplete(task.id);
            }}
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedCard;
