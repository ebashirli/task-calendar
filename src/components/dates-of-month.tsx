import { styled } from "../../stitches.config";
import { useDatesOfMonth } from "../hooks/use-dates-of-month";

import DateOfMonth from "./date-of-month";

const StyledDaysOfMonth = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "0.5rem",
  height: "calc(100vh-100px)",
  overflowY: "scroll",
});

function DatesOfMonth() {
  const { dateDetails } = useDatesOfMonth();

  return (
    <StyledDaysOfMonth>
      {dateDetails.map((dateDetail, i) => (
        <DateOfMonth key={dateDetail.id} index={i} dateDetail={dateDetail} />
      ))}
    </StyledDaysOfMonth>
  );
}

export default DatesOfMonth;
