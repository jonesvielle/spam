import { PlusIcon } from "@heroicons/react/16/solid";
import React from "react";

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton = ({ onClick }: FloatingButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed absolute flex w-1/3 justify-end bottom-0 mr-5"
    >
      <button className=" bg-primary-blue p-3 rounded-full shadow-md mr-5">
        <PlusIcon className="w-8 h-8 text-white " />
      </button>
    </div>
  );
};

export default FloatingButton;
