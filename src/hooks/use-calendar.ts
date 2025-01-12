import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import { useCallback, useEffect, useRef, useState } from "react";

type TWeek = {
  id: string;
  days: string[];
};

export const useCalendar = () => {
  const [weeks, setWeeks] = useState<TWeek[]>([]);
  const tbodyRef = useRef<HTMLTableSectionElement | null>(null);
  const handleScroll = useCallback(() => {
    const tbody = tbodyRef.current;
    if (tbody) {
      const { scrollTop, scrollHeight, clientHeight } = tbody;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setWeeks((prevWeeks) => {
          const lastDate = new Date(prevWeeks.at(-1)!.days.at(-1)!);
          const weeks: TWeek[] = Array.from({ length: 3 }).map(() => {
            return {
              id: uuid(),
              days: Array.from({ length: 7 }).map(() => {
                return format(
                  new Date(lastDate.setDate(lastDate.getDate() + 1)),
                  "yyyy-MM-dd"
                );
              }),
            };
          });
          return [...prevWeeks.slice(3), ...weeks];
        });
        tbody.scrollTop = scrollTop - 200;
      }
    }
  }, []);

  useEffect(() => {
    const tbody = tbodyRef.current;
    if (tbody) {
      const {
        // scrollTop,
        scrollHeight,
        // clientHeight
      } = tbody;
      const halfScrollHeight = scrollHeight / 2.506;
      tbody.scrollTop = halfScrollHeight;
    }
    generateWeeks();
  }, []);

  function generateWeeks(farFromToday: number = 14) {
    const now = new Date();
    const firstDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const date = firstDate.getDate();
    const day = firstDate.getDay();
    firstDate.setDate(date - farFromToday * 7 + day);
    const weeks: TWeek[] = Array.from({
      length: 30,
    }).map(() => {
      return {
        id: uuid(),
        days: Array.from({ length: 7 }).map(() => {
          return format(
            new Date(firstDate.setDate(firstDate.getDate() + 1)),
            "yyyy-MM-dd"
          );
        }),
      };
    });
    setWeeks(weeks);
  }

  return {
    handleScroll,
    weeks,
    tbodyRef,
  };
};
