import { styled } from "@stitches/react";

type Props = {
  title: string;
};

const StyledTaskCard = styled("div", {
  "&:hover": {
    backgroundColor: "#005bb5", // Darker shade on hover
    transform: "scale(1.05)", // Slightly increase size on hover
  },
});

function TaskCard({ title }: Props) {
  return <StyledTaskCard>{title}</StyledTaskCard>;
}

export default TaskCard;
