import React from "react";
import { getData } from "../apis/getData";
import { task } from "../types";
import TaskCard from "../Components/TaskCard";
type Props = {};

const page = async (props: Props) => {
  const tasks = await getData();
  const filteredTasks = tasks.filter((task: task) => task.completed === false);
  return (
    <div className="mt-12 pl-16">
      <div>
        <div>
          <h1 className="font-bold  text-2xl text-blue-500">
            All your done tasks
          </h1>
        </div>
        <div className="flex-grow py-4">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-4">
            {filteredTasks?.map((task: task) => {
              return <TaskCard key={task.id} task={task} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
