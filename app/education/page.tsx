"use client";
import React, { useEffect, useState } from "react";
import { getFilteredTasks } from "../apis/getFilteredTasks";
import TaskCard from "../Components/TaskCard";
import { task } from "../types";

type Props = {};

const Page = (props: Props) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const tasks = await getFilteredTasks("tag", "Education");
        setResult(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    getTasks();
  }, []);

  return (
    <div className="mt-12 h-screen pl-16">
      <div>
        <div>
          <h1 className="font-bold  text-2xl text-blue-500">
            All your Education tasks
          </h1>
        </div>
        <div className="flex-grow py-4">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-4">
            {result?.map((task: task) => {
              {
                return <TaskCard key={task.id} task={task} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
