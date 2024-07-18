"use client";
import { useState } from "react";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import CreateTaskForm from "./CreateTaskForm";

interface HeaderProps {
  title: string;
  subtitle: string;
  canCreateTask: boolean;

  fetchTrigger: boolean;
  setFetchTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({
  title,
  subtitle,
  canCreateTask,
  fetchTrigger,
  setFetchTrigger,
}: HeaderProps) => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [buttonStyle, setButtonStyle] = useState<string>("");

  return (
    <div className="flex pt-8">
      <div>
        <div>
          <h1 className="text-4xl font-bold text-blue-500">{title}</h1>
        </div>
        <div className="mb-4">{subtitle}</div>
      </div>
      <div>
        {" "}
        {isFormOpen ? (
          <Button
            isFormOpen={isFormOpen}
            setIsFormOpen={setIsFormOpen}
            title="hide form"
          />
        ) : (
          <Button
            isFormOpen={isFormOpen}
            setIsFormOpen={setIsFormOpen}
            title="Create a task"
          />
        )}
        {isFormOpen && (
          <div>
            <CreateTaskForm
              fetchTrigger={fetchTrigger}
              setFetchTrigger={setFetchTrigger}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
