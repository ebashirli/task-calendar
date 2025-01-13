import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { useCalendarContext } from "../contexts/calendar-context";

type TWeek = {
  id: string;
  days: string[];
};

export const useCalendar = () => {
  const [weeks, setWeeks] = useState<TWeek[]>([]);
  const tbodyRef = useRef<HTMLTableSectionElement | null>(null);
  const { currDate } = useCalendarContext();

  useEffect(() => {
    if (tbodyRef.current) {
      const { scrollHeight } = tbodyRef.current;
      const halfScrollHeight = scrollHeight / 2.506;
      tbodyRef.current.scrollTop = halfScrollHeight;
    }
    generateWeeks(currDate);
  }, [currDate]);

  function generateWeeks(currDate: Date | null) {
    const now = currDate ? new Date(currDate) : new Date();
    const firstDate = new Date(now.getFullYear(), now.getMonth(), 1);
    const date = firstDate.getDate();
    const day = firstDate.getDay();
    firstDate.setDate(date - day);
    const weeks: TWeek[] = Array.from({
      length: 6,
    }).map(() => ({
      id: uuid(),
      days: Array.from({ length: 7 }).map(() => {
        return format(
          new Date(firstDate.setDate(firstDate.getDate() + 1)),
          "yyyy-MM-dd"
        );
      }),
    }));
    setWeeks(weeks);
  }

  return { weeks, tbodyRef };
};
