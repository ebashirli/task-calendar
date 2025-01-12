import Calendar from "./components/calendar";
import CalendarContextProvider from "./contexts/calendar-context";
import DndContextProvider from "./contexts/dnd-context/provider";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <CalendarContextProvider>
        <DndContextProvider>
          <Calendar />
        </DndContextProvider>
      </CalendarContextProvider>
    </div>
  );
}

export default App;
