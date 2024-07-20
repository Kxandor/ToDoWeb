"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { postData } from "../apis/postData";
import { getData } from "../apis/getData";
import { useRouter } from "next/navigation";
import CreateEditForm from "../Components/CreateEditForm";
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
  const [priority, setPriority] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTask = {
      taskName: label,
      tag: tag,
      priority: priority,
      taskDescription: underLabel,
      location: location,
    };

    postData(newTask);
    router.push("/");
    console.log(newTask);
  };

  return (
    <div>
      <CreateEditForm
        name="Create"
        label={label}
        setLabel={setLabel}
        underLabel={underLabel}
        setUnderLabel={setUnderLabel}
        tag={tag}
        setTag={setTag}
        location={location}
        setLocation={setLocation}
        setPriority={setPriority}
        priority={priority}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateTaskForm;
