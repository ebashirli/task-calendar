import { useState } from "react";
import { useAppContext } from "../contexts/calendar-context";

type Props = {
  setIsFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  date: number;
};
function TaskForm({ setIsFormActive, date }: Props) {
  const [title, setTitle] = useState("");
  const { setTasks, tasks } = useAppContext();

  return (
    <form
      action=""
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        left: "50%",
        bottom: "10%",
      }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setTasks((prevTasks) => [
            ...prevTasks,
            { id: `${tasks.length + 1}`, title, date },
          ]);
          setIsFormActive(false);
          setTitle("");
        }}
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
