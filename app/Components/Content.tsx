"use client";
import React from "react";
import TaskCreateHeader from "./TaskCreateHeader";
import Header from "./Header";
import AllTasks from "./AllTasks";
import { useState } from "react";

type Props = {};

const Content = (props: Props) => {
  const [fetchTrigger, setFetchTrigger] = useState(false);
  return (
    <div className="w-full h-screen p-4 px-14 shadow-3xl ">
      <Header
        title="Your tasks"
        subtitle="Manage your tasks easily and comforatbely"
        canCreateTask={true}
        fetchTrigger={fetchTrigger}
        setFetchTrigger={setFetchTrigger}
      />
      <AllTasks fetchTrigger={fetchTrigger} setFetchTrigger={setFetchTrigger} />
    </div>
  );
};

export default Content;
