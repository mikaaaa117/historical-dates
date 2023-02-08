import { FC } from "react";
import "./Dates.scss";

interface DatesProps {
  dates: number[];
}

export const Dates: FC<DatesProps> = ({ dates }) => {
  return (
    <span className="dates">
      <span className="dates__first">{dates[0]}</span>
      <span className="dates__second">{dates[1]}</span>
    </span>
  );
};
