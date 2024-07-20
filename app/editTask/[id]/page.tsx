"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateDatabase } from "@/app/apis/updateDatabase";
import { getTaskById } from "@/app/apis/getTaskById";
import CreateEditForm from "@/app/Components/CreateEditForm";
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

const CreateTaskForm = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const [label, setLabel] = useState<string>("");
  const [underLabel, setUnderLabel] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    if (Number(params.id)) {
      getTaskById(Number(params.id)).then((task) => {
        setLabel(task.taskName);
        setUnderLabel(task.taskDescription);
        setTag(task.tag);
        setLocation(task.location);
        setPriority(task.priority ? "true" : "false");
      });
    }
  }, [Number(params.id)]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTask = {
      taskName: label,
      tag: tag,
      priority: priority === "true",
      taskDescription: underLabel,
      location: location,
    };

    updateDatabase(Number(params.id), newTask).then(() => {
      router.push("/");
    });
  };

  return (
    <div>
      <CreateEditForm
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
        isEditing
      />
    </div>
  );
};

export default CreateTaskForm;
