"use client";
import { useState } from "react";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
interface HeaderProps {
  title: string;
  subtitle: string;
  canCreateTask: boolean;
}

const Header = ({ title, subtitle, canCreateTask }: HeaderProps) => {
  const router = useRouter();
  return (
    <div className="flex-col pt-8 ">
      <div>
        <div>
          <h1 className="text-4xl font-bold text-blue-500">{title}</h1>
        </div>
        <div className="mb-4">{subtitle}</div>
      </div>
      <div className="" onClick={() => router.push("/createTask")}>
        <Button title="Creace new task" />
      </div>
    </div>
  );
};

export default Header;
