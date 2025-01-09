import { styled } from "../../stitches.config";
import { useAppContext } from "../contexts/app-context";
import { DateDetail } from "../hooks/use-dates";
import { Task } from "../contexts/app-context/context";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./task-card";

const StyledDate = styled("div", {
  cursor: "pointer",
  aspectRatio: "1/1",
  border: "1px solid #000",
  margin: 0,
  position: "relative",
});

type Props = {
  dateDetail: DateDetail;
  index: number;
  tasks: Task[];
};

function Date({ dateDetail, index, tasks }: Props) {
  const { id, label } = dateDetail;
  const { selectedIndex, setSelectedIndex } = useAppContext();
  const { setNodeRef } = useDroppable({ id });

  return (
    <StyledDate ref={setNodeRef} onClick={() => setSelectedIndex(index)}>
      <label>{label}</label>
      {tasks.map(({ title, id }) => (
        <TaskCard key={id} id={id} title={title} />
      ))}
      {index === selectedIndex && <div>hello</div>}
    </StyledDate>
  );
}

export default Date;
