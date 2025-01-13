import { v4 as uuid } from "uuid";
import { styled } from "@stitches/react";
import { useCalendarContext } from "../contexts/calendar-context";
import { Task } from "../contexts/calendar-context/context";
import { useState } from "react";

const StyledForm = styled("form", {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  left: "50%",
  bottom: "10%",
});

type Props = {
  task?: Task;
  day?: string;
};
function TaskForm({ task, day }: Props) {
  const { setTasks, setIsFormOpen, setSelectedTask } = useCalendarContext();
  const [title, setTitle] = useState(task?.title || "");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!title) return;
    setTasks((prevTasks) => {
      const newTasks = task
        ? prevTasks.filter(({ id }) => id !== task?.id)
        : prevTasks;
      return [
        ...newTasks,
        { id: task?.id || uuid(), title, day: task?.day || day! },
      ];
    });
    setIsFormOpen(false);
    setTitle("");
    setSelectedTask(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  return (
    <StyledForm>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        disabled={task?.noDrag}
      />
      <button disabled={task?.noDrag} onClick={handleSubmit}>
        {task ? "Update" : "Add"}
      </button>
    </StyledForm>
  );
}

export default TaskForm;
