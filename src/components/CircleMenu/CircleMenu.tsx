import "./CircleMenu.scss";
import gsap from "gsap";
import { useLayoutEffect, useState } from "react";

interface CircleMenuProps {
  maxPages: number;
  dates: number[];
  page: number;
  setPage: React.Dispatch<number>;
}
export const CircleMenu: React.FC<CircleMenuProps> = ({
  maxPages,
  dates,
  page,
  setPage,
}) => {
  return (
    <div className="circle-menu">
      <span className="dates">
        <span className="dates__first">{dates[0]}</span>
        <span className="dates__second">{dates[1]}</span>
      </span>
      <div className="circle">
        {[...Array(maxPages)].map((item, index) => {
          return (
            <li
              className={`${page === index ? "active" : ""}`}
              key={index}
              onClick={() => setPage(index)}
              style={
                {
                  "--i": index + 1,
                  "--li-count": maxPages,
                  "--rotate": (360 / maxPages) * page + "deg",
                } as React.CSSProperties
              }
            >
              <span>
                <p>{index + 1}</p>
              </span>
            </li>
          );
        })}
      </div>
    </div>
  );
};
