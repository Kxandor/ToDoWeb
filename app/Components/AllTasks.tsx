"use client";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { getData } from "../apis/getData";
import { task } from "../types";
import { markTaskComplete } from "../apis/markTaskComplete";

interface AllTasksProps {
  tasks: [];
  setTasks: any;
}

const AllTasks = ({ tasks, setTasks }: AllTasksProps) => {
  return (
    <div className="mt-12 dark:">
      <div>
        <div>
          <h1
            className="font-bold text-blue-500 text-2xl"
            onClick={() => console.log(tasks)}
          >
            All your tasks
          </h1>
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
