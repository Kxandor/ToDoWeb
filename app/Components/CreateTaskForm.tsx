"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { postData } from "../apis/postData";
import { sendData } from "../types";

interface Props {
  fetchTrigger: boolean;
  setFetchTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateTaskForm = ({ fetchTrigger, setFetchTrigger }: Props) => {
  const [task, setTask] = React.useState({
    taskName: "",
    tag: "",
    priority: false,
    taskDescription: "",
    location: "",
  });
  const [label, setLabel] = useState<string>("");
  const [underLabel, setUnderLabel] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newTask = {
      taskName: label,
      tag: tag,
      priority: false,
      taskDescription: underLabel,
      location: location,
    };

    setTask(newTask);
    postData(newTask);
    setFetchTrigger((prev) => !prev);

    console.log(newTask); // This will log the correct task
  };

  return (
    <div className="pt-8 ">
      <div className="text-2xl font-bold text-blue-500 pb-4">
        Create new task
      </div>
      <div className="">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex   gap-4 justify-between"
        >
          <div className="">
            <div>
              <label>
                task name
                <input
                  type="text"
                  value={label}
                  onChange={(e) => {
                    setLabel(e.target.value);
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                task description
                <input
                  type="text"
                  value={underLabel}
                  onChange={(e) => {
                    setUnderLabel(e.target.value);
                  }}
                />
              </label>
            </div>
          </div>
          <div>
            <div>
              <label>
                tag
                <input
                  type="text"
                  value={tag}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                location
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </label>
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskForm;
