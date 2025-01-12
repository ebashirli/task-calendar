import { styled } from "../../stitches.config";
import { useAppContext } from "../contexts/calendar-context";
import { monthsObj } from "../utils/constants";

const StyledCurrentDate = styled("div", {
  textAlign: "center",
});

const months = monthsObj.mmmm;

function CurrentDate() {
  const { currMonth, currYear } = useAppContext();
  return (
    <StyledCurrentDate>{`${months[currMonth]} ${currYear}`}</StyledCurrentDate>
  );
}

export default CurrentDate;
