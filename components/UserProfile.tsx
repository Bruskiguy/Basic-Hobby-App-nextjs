"use client";

import { useState, useRef } from "react";

export const UserProfile = () => {
  const [name, setName] = useState<String | undefined>();
  const [hobbies, setHobbies] = useState<String[]>([]);
  const hobbyInputRef = useRef<HTMLInputElement>(null);

  console.log("-->", hobbies);

  const addHobby = () => {
    const input = document.getElementById("hobby-text") as HTMLInputElement;
    const hobby = input?.value;
    if (hobby) {
      setHobbies([...hobbies, hobby]);
      input.value = "";
    }
  };

  const deleteAllHobbies = () => {
    setHobbies([]);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <label>
          Name
          <input
            className="text-black m-3"
            type="text"
            onChange={(event) => setName(event?.target.value)}
          />
        </label>
        <label>
          Add a Hobby
          <input
            id="hobby-text"
            className="text-black m-3"
            type="text"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                addHobby();
              }
            }}
          />
          <button className="border-2 m-2 p-2" onClick={addHobby}>
            Add
          </button>
        </label>
      </div>
      <div className="mt-10 flex flex-col items-center ">
        <h1>{name}</h1>
        <p className="list-label">Below is your List</p>
        <div className="h-1 w-full bg-gray-300 my-4"></div>
        <div className="border border-gray-400 p-4 w-full max-w-md">
          <ul>
            {hobbies.map((hobby, index) => (
              <li
                key={index}
                className="border-b border-gray-200 last:border-b-0 p-2"
              >
                {hobby}
              </li>
            ))}
          </ul>
          <div className="flex justify-end">
            <button className="border-2 m-2 p-2" onClick={deleteAllHobbies}>
              Delete All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
