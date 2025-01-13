import { useCalendar } from "../hooks/use-calendar";
import CalendarWeek from "./calendar-week";
import Navbar from "./navbar";
import {
  StyledCalendar,
  StyledCalendarBody,
  StyledCalendarHead,
  StyledCalendarHeader,
  StyledCalendarHeadRow,
  StyledCalendarTable,
} from "./styles";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function Calendar() {
  const { weeks, tbodyRef } = useCalendar();

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
        <StyledCalendarBody ref={tbodyRef}>
          {weeks.map(({ id, days }) => (
            <CalendarWeek days={days} key={id} />
          ))}
        </StyledCalendarBody>
      </StyledCalendarTable>
    </StyledCalendar>
  );
}

export default Calendar;
