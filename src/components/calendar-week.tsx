import CalendarDay from "./calendar-day";
import { styled } from "../../stitches.config";

const StyledCalendarWeek = styled("tr", {
  display: "block",
});

type Props = {
  days: string[];
};

function CalendarWeek({ days }: Props) {
  return (
    <StyledCalendarWeek>
      {days.map((day) => (
        <CalendarDay key={day} day={day} />
      ))}
    </StyledCalendarWeek>
  );
}

export default CalendarWeek;
