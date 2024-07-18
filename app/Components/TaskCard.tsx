"use client";
import React, { useReducer } from "react";
import { IoBag } from "react-icons/io5";
import { task } from "../types";
import { deleteTask } from "../apis/deleteTask";
import { markTaskComplete } from "../apis/markTaskComplete";
import { updateDatabase } from "../apis/updateDatabase";
import { useRouter } from "next/navigation";
interface TaskCardProps {
  task: task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const router = useRouter();
  const deleteTask = async (id: number) => {
    fetch(`https://66982bc302f3150fb67042ee.mockapi.io/taskApi/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // Do something with deleted task
      })
      .catch((error) => {
        // handle error
      });
    forceUpdate();
  };

  if (task.editing) {
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
                deleteTask(task.id);
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
  } else
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

        <div className="flex justify-between py-2 text-sm">
          <div>
            <button>Edit</button>
          </div>
          <div>
            <button
              onClick={() => {
                deleteTask(task.id);
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

export default TaskCard;
