import { styled } from "../../stitches.config";
import { useAppContext } from "../contexts/app-context";
import { DateDetail } from "../hooks/use-dates";
import { Task } from "../contexts/app-context/context";
import TaskList from "./task-list";
import Droppable from "./droppable";

const StyledDateSpacer = styled("div", {
  cursor: "pointer",
  aspectRatio: "1/1",
  border: "1px solid #000",
  margin: 0,
  position: "relative",
  display: "flex",
});

const StyledDate = styled("div", {
  transformOrigin: "top left",
  transition: "transform 0.3s ease",
  border: "1px solid #000",
  flexGrow: 1,
  height: "100%",
  width: "100%",

  variants: {
    active: {
      true: {
        width: "272px",
        height: "350px",
        position: "absolute",
        zIndex: 1,
      },
    },
  },
  defaultVariants: {
    active: false, // Default value
  },
});

type Props = {
  dateDetail: DateDetail;
  index: number;
  tasks: Task[];
};

function Date({ dateDetail, index, tasks }: Props) {
  const { id, label } = dateDetail;
  const { selectedIndex, setSelectedIndex } = useAppContext();
  const handleClick = () => setSelectedIndex(index);

  return (
    <StyledDateSpacer onClick={handleClick}>
      <Droppable id={id}>
        <StyledDate
          active={selectedIndex === index}
          onClick={(e) => e.stopPropagation()}
        >
          <label>{label}</label>
          <TaskList tasks={tasks} />
        </StyledDate>
      </Droppable>
    </StyledDateSpacer>
  );
}

export default Date;
