import { styled } from "../../stitches.config";
import { useCalendar } from "../hooks/use-calendar";
import CalendarWeek from "./calendar-week";
import Navbar from "./navbar";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const StyledCalendar = styled("main", {
  height: "100%",
  padding: "51px",
});

const StyledCalendarTable = styled("table", {
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

const StyledCalendarBody = styled("tbody", {
  display: "block",
  height: "100%",
  overflowY: "scroll",
  paddingBottom: "20px",
});

const StyledCalendarHead = styled("thead", {
  display: "block",
});
const StyledCalendarHeadRow = styled("tr", {
  display: "block",
});
const StyledCalendarHeader = styled("th", {
  display: "inline-block",
  width: `${100 / 7}%`,
});

function Calendar() {
  const { weeks } = useCalendar();

  return (
    <StyledCalendar>
      <StyledCalendarTable>
        <StyledCalendarHead>
          <StyledCalendarHeadRow>
            <Navbar />
          </StyledCalendarHeadRow>
          <StyledCalendarHeadRow>
            {weekdays.map((wd) => (
              <StyledCalendarHeader key={wd}>{wd}</StyledCalendarHeader>
            ))}
          </StyledCalendarHeadRow>
        </StyledCalendarHead>
        <StyledCalendarBody>
          {weeks.map(({ id, days }) => (
            <CalendarWeek days={days} key={id} />
          ))}
        </StyledCalendarBody>
      </StyledCalendarTable>
    </StyledCalendar>
  );
}

export default Calendar;
