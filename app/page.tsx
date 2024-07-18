"use client";
import Image from "next/image";
import Header from "./Components/Header";
import AllTasks from "./Components/AllTasks";
import { useState, useEffect } from "react";
import { getData } from "./apis/getData";
import { deleteTask } from "./apis/deleteTask";
export default function Home() {
  const [tasks, setTasks] = useState<any>([]);
  const [del, setDel] = useState<any>();

  useEffect(() => {
    getData(setTasks);
  }, [tasks.length]);

  return (
    <main className="w-full h-screen p-4 px-14 shadow-3xl ">
      <Header
        title="Your tasks"
        subtitle="Manage your tasks easily and comforatbely"
        canCreateTask={true}
      />
      <AllTasks tasks={tasks} setTasks={setTasks} />
    </main>
  );
}
