import { styled } from "../../stitches.config";
import { useAppContext } from "../contexts/app-context";
import { DateDetail } from "../hooks/use-dates-of-month";

const StyledDayOfMonth = styled("p", {
  cursor: "pointer",
  aspectRatio: "1/1",
  border: "1px solid #000",
  margin: 0,
});

type Props = { dateDetail: DateDetail; index: number };

function DateOfWeek({ dateDetail, index }: Props) {
  const { label } = dateDetail;
  const { selectedIndex, setSelectedIndex } = useAppContext();

  return (
    <StyledDayOfMonth onClick={() => setSelectedIndex(index)}>
      <label>{label}</label>
      {index === selectedIndex && <div>hello</div>}
    </StyledDayOfMonth>
  );
}

export default DateOfWeek;
