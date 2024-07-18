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

    postData(newTask);
    router.push("/");
    console.log(newTask); // This will log the correct task
  };

  return (
    <div className="pl-12  pt-12">
      <div className="text-4xl font-bold text-blue-500 pb-4">
        Create new task
      </div>
      <div className="flex bg-white max-w-[400px]">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className=""
        >
          <div className="">
            <div className="pb-4">
              <div className=" flex-col">
                <div className="flex justify-center">
                  <label className="">task name</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="border-black border-2"
                    value={label}
                    onChange={(e) => {
                      setLabel(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <label>
                task description
                <input
                  type="text"
                  value={underLabel}
                  className="border-black border-2"
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
                  className="border-black border-2"
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
                  className="border-black border-2"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
              </label>
              <div>
                <input type="submit" onSubmit={(e) => handleSubmit(e)} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskForm;
