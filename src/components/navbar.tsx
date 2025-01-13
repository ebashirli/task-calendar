import { styled } from "../../stitches.config";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const StyledNavbar = styled("td", {
  display: "flex",
  // gridTemplateColumns: "1fr 10fr 1fr",
  justifyContent: "space-between",
  alignItems: "center",
});

import { useCalendarContext } from "../contexts/calendar-context";
import { Button, CurrentDate, Icons, MaterialSymbolsRounded } from "./styles";
import { format } from "date-fns";
import { useEffect, useState } from "react";

function Navbar() {
  const {
    handleSelectMonthYear,
    currMonth,
    currYear,
    tasks,
    setFilteredTasks,
  } = useCalendarContext();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setFilteredTasks(
        tasks.filter(({ title }) =>
          title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 500);

    return () => clearTimeout(handler);
  }, [query, setFilteredTasks, tasks]);

  return (
    <StyledNavbar>
      <Icons>
        <MaterialSymbolsRounded>
          <Button onClick={() => handleSelectMonthYear(-1)}>
            <FaChevronUp />
          </Button>
        </MaterialSymbolsRounded>
        <MaterialSymbolsRounded>
          <Button onClick={() => handleSelectMonthYear(0)}>Today</Button>
        </MaterialSymbolsRounded>
        <MaterialSymbolsRounded>
          <Button onClick={() => handleSelectMonthYear(1)}>
            <FaChevronDown />
          </Button>
        </MaterialSymbolsRounded>
      </Icons>
      <CurrentDate>
        {format(new Date(currYear, currMonth), "MMMM yyyy")}
      </CurrentDate>
      <input
        type="search"
        placeholder="Filter tasks"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </StyledNavbar>
  );
}

export default Navbar;
