import { FC } from "react";
import "./Line.scss";

interface HorizontalLineProps {
  position?: "absolute" | null;
}

export const HorizontalLine: FC<HorizontalLineProps> = ({ position }) => {
  return <div className={`horizontal-line ${position ? position : ""}`} />;
};
