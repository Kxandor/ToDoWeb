"use client";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import { getData } from "../apis/getData";
import { task } from "../types";
import Button from "./Button";
import CreateTaskForm from "./CreateTaskForm";
interface Props {
  fetchTrigger: boolean;
  setFetchTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const AllTasks = ({ fetchTrigger, setFetchTrigger }: Props) => {
  const [tasks, setTasks] = useState<any>([]);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [buttonStyle, setButtonStyle] = useState<string>("");
  const [count, setCount] = useState<number>(0);

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
        console.log(Object.keys(tasks).length);
      })
      .catch((error) => {
        console.log();
      });
  };

  useEffect(() => {
    fetchNewData();
  }, [fetchTrigger]);
  return (
    <div className="">
      <div className="mb-12"></div>
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
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
