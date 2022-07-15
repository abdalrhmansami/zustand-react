import React from "react";
import { usePeopleStore } from "../store";

const People = () => {
  const people = usePeopleStore((state: { people: any }) => state.people);

  return (
    <>
      <div>We have {people.length} in our list</div>
      <ul>
        {people.map((p: string, index: number) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </>
  );
};

export default People;
