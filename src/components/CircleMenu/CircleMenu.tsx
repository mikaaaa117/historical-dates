import "./CircleMenu.scss";
import { HorizontalLine } from "../Lines/Horizontal/Line";
import { Dates } from "../Dates/Dates";

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
      <Dates dates={dates} />
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
      <HorizontalLine position="absolute" />
    </div>
  );
};
