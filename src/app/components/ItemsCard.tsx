import { CheckIcon } from "@heroicons/react/16/solid";
import React, { HTMLAttributes, MouseEventHandler } from "react";

interface ItemsCardProps extends HTMLAttributes<HTMLDivElement> {
  isChecked: boolean;
  title: string;
  onEdit: MouseEventHandler<HTMLButtonElement> | undefined;
  onToggleCheck: MouseEventHandler<HTMLDivElement>;
}

const ItemsCard = ({
  isChecked = false,
  title,
  onEdit,
  onToggleCheck,
  ...rest
}: ItemsCardProps) => {
  return (
    <div
      {...rest}
      className="flex flex-row justify-between shadow-lg border-2 p-5 rounded-md mb-5 bg-white"
    >
      <div className="flex flex-row items-center">
        {/* Toggle check status */}
        <div
          onClick={onToggleCheck} // Trigger toggle when clicking
          className={`${
            isChecked
              ? "bg-primary-green border-border-green"
              : "border-dark-blue"
          } rounded-full p-[1px] border-2 cursor-pointer`}
        >
          {isChecked ? (
            <CheckIcon className="w-6 h-6 text-dark-green" />
          ) : (
            <div className="w-6 h-6" />
          )}
        </div>
        <div
          className={` ${
            isChecked ? "text-primary-gray line-through" : "text-dark-blue"
          }  ml-5 `}
        >
          {title}
        </div>
      </div>
      <button
        onClick={onEdit}
        className="border-2 p-3 font-bold text-dark-blue border-dark-blue rounded-md"
      >
        Edit
      </button>
    </div>
  );
};

export default ItemsCard;
