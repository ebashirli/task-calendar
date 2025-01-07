import { useAppContext } from "../contexts/app-context";
import { monthsObj } from "../utils/constants";

const months = monthsObj.mmm;

export type DateDetail = {
  id: string;
  label: string;
  year: number;
  month: number;
  date: number;
  place: -1 | 0 | 1;
};

export function useDatesOfMonth() {
  const { currMonth, currYear } = useAppContext();
  const firstDayOfMonth = new Date(currYear, currMonth, 0).getDay() + 1;
  const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDayOfMonth = new Date(
    currYear,
    currMonth,
    lastDateOfMonth
  ).getDay();
  const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate() + 1;
  const dateDetails: DateDetail[] = [
    ...Array.from({ length: firstDayOfMonth }).map((_, i) => {
      const date = lastDateOfLastMonth - (firstDayOfMonth - i);
      const month = currMonth === 0 ? 11 : currMonth - 1;
      const year = currMonth === 0 ? currYear - 1 : currYear;
      const label =
        date === lastDateOfLastMonth - 1
          ? `${months[month]} ${date}`
          : `${date}`;

      const id = `${label}-${date}-${month}-${year}`;
      return { id, label, date, month, year, place: -1 } as DateDetail;
    }),
    ...Array.from({ length: lastDateOfMonth }).map((_, i) => {
      const date = i + 1;
      const month = currMonth;
      const year = currYear;
      const label =
        date === 1 || date === lastDateOfMonth
          ? `${months[month]} ${date}`
          : `${date}`;
      const id = `${label}-${date}-${month}-${year}`;

      return { id, label, date, month, year, place: 0 } as DateDetail;
    }),
    ...Array.from({ length: 6 - lastDayOfMonth }).map((_, i) => {
      const date = i + 1;
      const month = currMonth === 11 ? 0 : currMonth + 1;
      const year = currMonth === 11 ? currYear + 1 : currMonth;
      const label = date === 1 ? `${months[month]} ${date}` : `${date}`;
      const id = `${label}-${date}-${month}-${year}`;

      return { id, label, date, month, year, place: 1 } as DateDetail;
    }),
  ];
  return { dateDetails };
}
