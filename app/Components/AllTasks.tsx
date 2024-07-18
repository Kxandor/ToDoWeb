"use client";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { getData } from "../apis/getData";
import { task } from "../types";

interface Props {}

type getData = {
  id: number;
  createdAt: string;
  tag: string;
  priority: boolean;
  taskName: string;
  taskDescription: string;
  location: string;
};

const AllTasks = (props: Props) => {
  const [tasks, setTasks] = useState<any>([]);
  const [render, setRender] = useState(false);

  const fetchNewData = async () => {
    const response = await fetch(
      "https://66982bc302f3150fb67042ee.mockapi.io/taskApi/tasks",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((tasks) => {
        setTasks(tasks);
      })
      .catch((error) => {
        console.log();
      });
  };

  useEffect(() => {
    fetchNewData();
  }, [render]);
  return (
    <div className="mt-12">
      <div>
        <div>
          <h1
            className="font-bold text-black text-2xl"
            onClick={() => console.log(tasks)}
          >
            All your tasks
          </h1>
        </div>
        <div className="flex-grow py-4">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-6 gap-4">
            {tasks?.map((task: any) => (
              <TaskCard
                key={task.id}
                task={task}
                setTasks={setTasks}
                tasks={tasks}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
