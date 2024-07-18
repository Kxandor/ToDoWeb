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
}

const TaskCard = ({ task, tasks, setTasks }: TaskCardProps) => {
  const router = useRouter();
  const [style, setStyle] = useState<boolean>(false);

  return (
    <div className="rounded-xl shadow-sm bg-white w-60 p-4 hover:border-2 hover:border-blue-500">
      <div>
        <div className="text-sm flex items-center line-through">{task.tag}</div>
      </div>
      <div
        className={
          task.completed ? `line-through text-xl pt-2` : ` text-xl pt-2`
        }
      >
        {task.taskName}
      </div>
      <div className="text-gray-400 text-md border-b-2 border-gray-200">
        <p className="line-through">{task.taskDescription}</p>
      </div>
      <div className="flex justify-between py-2 text-sm">
        <div>
          <button>Edit</button>
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
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
