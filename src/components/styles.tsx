import { styled } from "../../stitches.config";

export const Wrapper = styled("div", {
  marginLeft: "",
});
export const Header = styled("header", {});
export const CurrentDate = styled("p", {});
export const Icons = styled("div", {});
export const MaterialSymbolsRounded = styled("span", {});
export const Calendar = styled("div", {});
export const Weeks = styled("ul", {});
export const Button = styled("button", {});

export const StyledCalendarWrapper = styled("td", {
  display: "inline-block",
  width: `${100 / 7}%`,
  position: "relative",

  variants: {
    current: {
      true: {
        background: "#282d34",
      },
    },
    today: {
      true: {
        background: "#1c2b41",
      },
    },
  },
  defaultVariants: {
    current: false,
  },
});

export const StyledCalendarDayHeader = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const StyledTaskList = styled("main", {
  flexGrow: 1,
  height: "60%",
  overflow: "scroll",
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  padding: ".5rem",
});

export const StyledCalendarSpacer = styled("div", {
  aspectRatio: "1 / 1",
  width: "100%",
});

export const StyledCalendarDay = styled("div", {
  aspectRatio: "1 / 1",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gridTemplateRows: "1fr auto 1fr",
  cursor: "pointer",
  padding: "8px",

  variants: {
    active: {
      true: {
        width: "272px",
        height: "350px",
        position: "absolute",
        zIndex: 1,
        top: 0,
        background: "#282e32",
        boxShadow:
          "var(--ds-shadow-overlay, 0 8px 12px #091e4226, 0 0 1px #091e424f);",
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const StyledCalendar = styled("main", {
  height: "100%",
  padding: "51px",
  background: "#1d2125",
  color: "#b6c2cf",
});

export const StyledCalendarTable = styled("table", {
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

export const StyledCalendarBody = styled("tbody", {
  display: "block",
  height: "100%",
  overflowY: "scroll",
  paddingBottom: "20px",
});

export const StyledCalendarHead = styled("thead", {
  display: "block",
});
export const StyledCalendarHeadRow = styled("tr", {
  display: "block",
});
export const StyledCalendarHeader = styled("th", {
  display: "inline-block",
  width: `${100 / 7}%`,
});
