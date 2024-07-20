"use client";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { getData } from "../apis/getData";
import { task } from "../types";
import { markTaskComplete } from "../apis/markTaskComplete";
import { IoMoon, IoSunny } from "react-icons/io5";

interface AllTasksProps {
  tasks: [];
  setTasks: any;
}

const AllTasks = ({ tasks, setTasks }: AllTasksProps) => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="mt-12 dark:">
      <div>
        <div className="flex gap-4">
          <h1
            className="font-bold text-blue-500 text-2xl"
            onClick={() => console.log(tasks)}
          >
            All your tasks
          </h1>
          <button onClick={() => darkModeHandler()}>
            {dark && <IoSunny size={20} />}
            {!dark && <IoMoon size={20} />}
          </button>
        </div>
        <div className="flex-grow py-4">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-4 ">
            {tasks?.map((task: task) => {
              return (
                <TaskCard
                  key={task.id}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                  actions
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
