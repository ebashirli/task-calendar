import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  Button,
  Header,
  Icons,
  MaterialSymbolsRounded,
  Wrapper,
} from "./components/styles";
import { Navbar } from "./components/navbar";
import DaysOfWeek from "./components/week";
import DatesOfMonth from "./components/dates";
import CurrentDate from "./components/current-date";
import { useAppContext } from "./contexts/app-context";

function App() {
  const { handleSelectMonthYear } = useAppContext();
  return (
    <Wrapper>
      <Header>
        <Navbar>
          <Icons>
            <MaterialSymbolsRounded>
              <Button onClick={() => handleSelectMonthYear(-1)}>
                <FaChevronDown />
              </Button>
            </MaterialSymbolsRounded>
            <MaterialSymbolsRounded>
              <Button>Today</Button>
            </MaterialSymbolsRounded>
            <MaterialSymbolsRounded>
              <Button onClick={() => handleSelectMonthYear(1)}>
                <FaChevronUp />
              </Button>
            </MaterialSymbolsRounded>
          </Icons>
          <CurrentDate />
        </Navbar>
        <DaysOfWeek />
      </Header>
      <main>
        <DatesOfMonth />
      </main>
    </Wrapper>
  );
}

export default App;
