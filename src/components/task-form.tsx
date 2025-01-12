import { useState } from "react";
import { useAppContext } from "../contexts/calendar-context";

type Props = {
  day: number;
};
function TaskForm({ day }: Props) {
  const [title, setTitle] = useState("");
  const { setTasks, tasks, setIsFormOpen } = useAppContext();

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
            { id: `${tasks.length + 1}`, title, day },
          ]);
          setIsFormOpen(false);
          setTitle("");
        }}
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
