import { useCallback, useEffect, useRef, useState } from "react";

type TWeek = {
  id: string;
  days: number[];
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
          const weeks: TWeek[] = Array.from({ length: 3 }).map((_, i) => {
            return {
              id: `${prevWeeks.length + i}`,
              days: Array.from({ length: 7 }).map(() => {
                return lastDate.setDate(lastDate.getDate() + 1);
              }),
            };
          });
          return [...prevWeeks.slice(3), ...weeks];
        });
        tbody.scrollTop = scrollTop - 200;
      }
      // generateWeeks();
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
    const firstDate = new Date();
    const date = firstDate.getDate();
    const day = firstDate.getDay();
    firstDate.setDate(date - farFromToday * 7 + day);
    const weeks: TWeek[] = Array.from({
      length: 30,
    }).map((_, i) => {
      return {
        id: `${i + 1}`,
        days: Array.from({ length: 7 }).map(() => {
          return firstDate.setDate(firstDate.getDate() + 1);
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
