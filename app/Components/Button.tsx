import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => {
  return (
    <div>
      {" "}
      <button className="h-10 rounded-md bg-white border-2 border-white flex items-center justify-center gap-2 px-4 hover:border-blue-500">
        <AiOutlinePlus size={16} />
        {title}
      </button>
    </div>
  );
};

export default Button;
