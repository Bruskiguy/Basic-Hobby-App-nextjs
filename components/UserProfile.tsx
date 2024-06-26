"use client";

import { useState } from "react";

export const UserProfile = () => {
  const [name, setName] = useState<String | undefined>();
  const [hobbies, setHobbies] = useState<String[]>([]);

  console.log("-->", hobbies);

  return (
    <>
      <div className="flex flex-col gap-10">
        <label>
          Name
          <input
            className="text-black"
            type="text"
            onChange={(event) => setName(event?.target.value)}
          />
        </label>
        <label>
          Add a Hobby
          <input
            className="text-black"
            type="text"
            // onKeyDown={(event) => setHobbies([...hobbies, event?.target.value])}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                const target = event.target as any;
                setHobbies([...hobbies, target.value]);
                target.value = "";
              }
            }}
          />
        </label>
      </div>
      <div className="mt-10">
        <h1>{name}</h1>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
          <li>Thing 1</li>
        </ul>
      </div>
    </>
  );
};
