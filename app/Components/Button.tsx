import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

type ButtonProps = {
  isFormOpen: boolean;
  setIsFormOpen: (isFormOpen: boolean) => void;
  title: string;
};

const Button = ({ isFormOpen, setIsFormOpen, title }: ButtonProps) => {
  return (
    <div>
      {" "}
      <button
        onClick={() => setIsFormOpen(!isFormOpen)}
        className="h-10 rounded-md bg-white border-2 border-white flex items-center justify-center gap-2 px-4"
      >
        <AiOutlinePlus size={16} />
        {title}
      </button>
    </div>
  );
};

export default Button;
