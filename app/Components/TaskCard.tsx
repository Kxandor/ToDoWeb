"use client";
import React from "react";
import { IoBag } from "react-icons/io5";
import { task } from "../types";
import { deleteTask } from "../apis/deleteTask";
import { markTaskComplete } from "../apis/markTaskComplete";
import { useRouter } from "next/navigation"; // Import from next/router
import { useState } from "react";
interface TaskCardProps {
  task: task;
  setTasks?: any;
  tasks?: any;
  actions?: boolean;
}

const TaskCard = ({ task, tasks, setTasks, actions }: TaskCardProps) => {
  const router = useRouter();
  const [style, setStyle] = useState<boolean>(false);

  return (
    <div className="rounded-xl shadow-sm bg-white w-60 p-4 hover:border-2 hover:border-blue-500">
      <div className="flex gap-2 ">
        <div className="text-[10px] flex items-center px-1 border-2 bg-blue-500 text-white ">
          {task.tag}
        </div>
        <div className="text-[10px] flex items-center px-1 border-2">
          {task.location}
        </div>
      </div>

      <div
        className={
          task.completed ? `line-through text-xl pt-2` : ` text-xl pt-2`
        }
      >
        {task.taskName}
      </div>
      <div className="text-gray-400 text-md border-b-2 border-gray-200">
        <p className="">{task.taskDescription}</p>
      </div>
      {actions ? (
        <div className="flex justify-between py-2 text-sm">
          <div>
            <button onClick={() => router.push(`/editTask/${task.id}`)}>
              Edit
            </button>
          </div>
          <div>
            <button onClick={() => deleteTask(task.id, setTasks, tasks)}>
              Delete
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                markTaskComplete(task.id);
                setTasks([{ ...tasks, task }]);
              }}
            >
              {task.completed ? <a>completed</a> : <a>complete</a>}
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TaskCard;
