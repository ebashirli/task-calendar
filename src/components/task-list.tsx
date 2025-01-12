import { Task } from "../contexts/calendar-context/context";
import TaskCard from "./task-card";
import Draggable from "./draggable";
import Droppable from "./droppable";

type Props = {
  tasks: Task[];
};
function TaskList({ tasks }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {tasks.map(({ title, id, date }) => (
        <Droppable key={id} id={id} date={date}>
          <Draggable id={id}>
            <TaskCard title={title} />
          </Draggable>
        </Droppable>
      ))}
    </div>
  );
}

export default TaskList;
