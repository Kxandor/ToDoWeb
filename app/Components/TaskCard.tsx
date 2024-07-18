import React from "react";
import { IoBag } from "react-icons/io5";
import { task } from "../types";
interface TaskCardProps {
  task: task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className=" rounded-xl shadow-sm bg-white w-60 p-4">
      <div>
        <div className="text-sm flex items-center  ">{task.tag}</div>
      </div>
      <div className="text-xl pt-2">{task.taskName}</div>
      <div className="text-gray-400 text-md border-b-2 border-gray-200">
        {task.taskDescription}
      </div>

      <div className="flex justify-between pt-2 text-sm">
        <div>{task.location}</div>
        <div>time</div>
      </div>
    </div>
  );
};

export default TaskCard;
