import { useRef } from "react";
import { usePeopleStore } from "../store";

const AddPpl = () => {
  const inputRef: any = useRef();
  const addPerson = usePeopleStore((state: any) => state.addPerson);

  const addPpl = () => {
    addPerson(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <>
      <div>AddPpl</div>
      <input type="text" ref={inputRef} />
      <button onClick={addPpl}>Add Persons</button>
    </>
  );
};

export default AddPpl;
