import { FC, useEffect, useState } from "react";
import { clearInterval, setInterval } from "timers";

interface RollingNumbersProps {
  from: number;
  to: number;
  directionUp: boolean;
}

export const RollingNumbers: FC<RollingNumbersProps> = ({
  from,
  to,
  directionUp,
}) => {
  const [number, setNumber] = useState(from ?? 0);

  // useEffect(() => {
  //   if (directionUp) {
  //     let timer = setInterval(() => {
  //       console.log(number);
  //     }, 100);
  //     return () => clearInterval(timer);
  //   }
  // }, [number]);

  return <p>{number}</p>;
};
