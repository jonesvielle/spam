"use client";
import Image from "next/image";
import { useState } from "react";
import ItemsCard from "./components/ItemsCard";
import FloatingButton from "./components/floatingButton";

export default function Home() {
  const [items, setItems] = useState([
    { id: 1, title: "Buy groceries", isChecked: true },
    { id: 2, title: "Make a reservation", isChecked: false },
    { id: 3, title: "Pick up dry cleaning", isChecked: false },
    { id: 4, title: "Pick up laundry", isChecked: false },
  ]);

  const [taskName, setTaskName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<null | number>(null);

  // Toggle the checked state of an item
  const toggleCheck = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  // Add a new task
  const addTask = () => {
    const newTask = { id: Date.now(), title: taskName, isChecked: false };
    setItems([...items, newTask]);
    setTaskName("");
  };

  // Handle edit button click
  const handleEditClick = (id: number, title: string) => {
    setIsEditing(true);
    setEditId(id);
    setTaskName(title);
  };

  // Save the task (either add a new one or update an existing one)
  const saveTask = () => {
    if (isEditing && editId !== null) {
      setItems(
        items.map((item) =>
          item.id === editId ? { ...item, title: taskName } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      addTask();
    }
    setTaskName("");
  };

  // Delete a task
  const deleteTask = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-row">
      {/* 1st half */}
      <div className="w-1/3 shadow-right-lg z-10 h-[800px]">
        <div className="bg-primary-blue px-5 py-3 flex flex-row">
          <div>
            <Image
              src="/images/avatar.png"
              alt="First image"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
          </div>
          <div className="ml-3 w-2/3">
            <div>Hello, Jhon</div>
            <div className="text-[24px]" style={{ fontWeight: "lighter" }}>
              What are your plans for today?
            </div>
          </div>
        </div>
        <div className="bg-primary-gold flex flex-row justify-between px-5">
          <div className="flex flex-row">
            <Image
              src="/images/cup.png"
              alt="Second image"
              width={80}
              height={80}
              className="object-cover py-5"
            />
            <div className="text-dark-blue font-bold self-center ml-10">
              Go Pro Upgrade Now
            </div>
          </div>
          <div>
            <div className="bg-dark-blue p-5 text-primary-yellow">$1</div>
          </div>
        </div>
        {/* Scrollable list container */}
        <div className="bg-gray-100 p-5 max-h-[500px] overflow-y-auto">
          {items.map((item) => (
            <ItemsCard
              key={item.id}
              title={item.title}
              isChecked={item.isChecked}
              onEdit={() => handleEditClick(item.id, item.title)}
              onToggleCheck={() => toggleCheck(item.id)}
            />
          ))}
          <div className="p-4 flex justify-end items-end fixed ml-[470px] mt-10">
            <FloatingButton onClick={saveTask} />
          </div>
        </div>
      </div>
      {/* 2nd half */}
      <div className="w-2/3 z-5 flex flex-col justify-between">
        <div>
          <div className="bg-primary-blue px-5 flex flex-row text-center justify-center py-10 text-[26px]">
            {isEditing ? "Edit Task" : "Add Task"}
          </div>
          <div className="bg-gray-100 p-5">
            <div className=" text-black">Task Name</div>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Add a new task..."
              className="w-full px-3 py-5 rounded-md border-2 outline-none text-primary-blue mt-3"
            />
          </div>
        </div>
        <div className="px-5 flex flex-row">
          <button
            className="py-3 px-5 border-dark-blue border-2 rounded-lg bg-primary-red"
            onClick={() => editId !== null && deleteTask(editId)}
          >
            Delete
          </button>
          <button
            className="py-3 px-5 border-dark-blue border-2 rounded-lg bg-primary-blue w-5/6 ml-5"
            onClick={saveTask}
          >
            {isEditing ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
