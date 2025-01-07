import { styled } from "../../stitches.config";

const StyledDaysOfWeek = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(7,1fr)",
});

const StyledDayOfWeek = styled("span", {
  textAlign: "center",
});

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function DaysOfWeek() {
  return (
    <StyledDaysOfWeek>
      {weekdays.map((day) => (
        <StyledDayOfWeek key={day}>{day}</StyledDayOfWeek>
      ))}
    </StyledDaysOfWeek>
  );
}

export default DaysOfWeek;
