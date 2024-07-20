"use client";
import React, { useEffect, useState } from "react";
import { getData } from "../apis/getData";
import { task } from "../types";
import TaskCard from "../Components/TaskCard";
type Props = {};

const Page = (props: Props) => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      getData(setRes);
    };

    getTasks();
  }, [res.length]);

  return (
    <div className="mt-12 h-screen pl-16">
      <div>
        <div>
          <h1
            className="font-bold  text-2xl text-blue-500"
            onClick={() => console.log(res)}
          >
            All your done tasks
          </h1>
        </div>
        <div className="flex-grow py-4">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-4">
            {res?.map((task: task) => {
              if (task.completed === true) {
                return <TaskCard key={task.id} task={task} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
