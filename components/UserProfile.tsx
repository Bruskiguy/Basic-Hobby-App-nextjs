"use client";
import { useState } from "react";

export const UserProfile = () => {
  const [entries, setEntries] = useState<{ name: string; hobby: string }[]>([]);
  const [nameInput, setNameInput] = useState("");
  const [hobbyInput, setHobbyInput] = useState("");

  const addEntry = () => {
    if (nameInput.trim() !== "" && hobbyInput.trim() !== "") {
      setEntries([...entries, { name: nameInput, hobby: hobbyInput }]);
      setNameInput("");
      setHobbyInput("");
    }
  };

  const deleteAllEntries = () => {
    setEntries([]);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <label>
          Name
          <input
            className="text-black m-3"
            type="text"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addEntry();
              }
            }}
          />
        </label>
        <label>
          Add a Hobby
          <input
            className="text-black m-3"
            type="text"
            value={hobbyInput}
            onChange={(event) => setHobbyInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addEntry();
              }
            }}
          />
          <button className="border-2 m-2 p-2" onClick={addEntry}>
            Add
          </button>
        </label>
      </div>
      <div className="mt-10 flex flex-col items-center ">
        <p className="list-label">Below is your List</p>
        <div className="h-1 w-full bg-gray-300 my-4"></div>
        <div className="border border-gray-400 p-4 w-full max-w-md">
          <ul>
            {entries.map((entry, index) => (
              <li
                key={index}
                className="border-b border-gray-200 last:border-b-0 p-2"
              >
                <span>Name: {entry.name}</span>
                <br />
                <span>Hobby: {entry.hobby}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <button className="border-2 m-2 p-2" onClick={deleteAllEntries}>
              Delete All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
