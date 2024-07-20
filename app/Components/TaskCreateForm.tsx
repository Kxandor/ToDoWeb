"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { postData } from "../apis/postData";
import { getData } from "../apis/getData";
import { useRouter } from "next/navigation";

type Props = {};
type getData = {
  id: number;
  createdAt: string;
  tag: string;
  priority: boolean;
  taskName: string;
  taskDescription: string;
  location: string;
};

const CreateTaskForm = (props: Props) => {
  const router = useRouter();

  const [inputs, setInputs] = useState({});
  const [taskName, setTaskname] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setInputs({
      taskName: taskName,
      taskDescription: taskDescription,
      priority: priority,
      time: time,
      location: location,
    });
    postData(inputs);
    router.push("/");
    console.log(inputs); // This will log the correct task
  };

  return (
    <div className="pl-12  pt-12">
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="pt-8 text-3xl font-bold text-blue-500">
            Create a task
          </div>
          <div>
            <div className="pt-8 flex gap-12">
              <div>
                <div className="flex mb-2 ">
                  <div className="pr-14">Task name</div>
                  <div>
                    <input
                      className=""
                      value={taskName}
                      onChange={(e) => setTaskname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex  mb-2 ">
                  <div className="pr-[18px]">Task description</div>
                  <input
                    className=""
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                </div>
                <div className="flex mb-2 ">
                  <div className="pr-[80px]">Priority</div>
                  <input
                    className=""
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="flex mb-2 ">
                  <div className="pr-14">Time</div>
                  <input
                    className=""
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div className="flex mb-2 ">
                  <div className="pr-12">Location</div>
                  <input
                    className=""
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="flex justify-center">
                  <input type="submit"></input>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskForm;
