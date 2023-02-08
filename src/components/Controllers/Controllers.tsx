import { Dispatch, FC, SetStateAction } from "react";
import { ReactComponent as NextIcon } from "../../icons/next-icon.svg";
import { ReactComponent as PrevIcon } from "../../icons/prev-icon.svg";
import { isMobile } from "react-device-detect";
import "./Controllers.scss";

interface ControllersProps {
  page: number;
  maxPages: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Controllers: FC<ControllersProps> = ({
  page,
  maxPages,
  setPage,
}) => {
  const handlePrevPage = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };
  const handleNextPage = () => {
    if (page < maxPages - 1) setPage((prev) => prev + 1);
  };
  return (
    <div className="controllers">
      <div className="controllers__navigation">
        <div className="navigation__page">
          <span>0{page + 1}</span>/<span>0{maxPages}</span>
        </div>
        <div className="navigation__buttons">
          <button onClick={handlePrevPage}>
            <PrevIcon />
          </button>
          <button onClick={handleNextPage}>
            <NextIcon />
          </button>
        </div>
      </div>
      {isMobile && (
        <div className="controllers__pagination">
          {[...Array(maxPages)].map((item, index) => (
            <li
              key={index}
              className={`${page === index ? "active" : ""}`}
              onClick={() => setPage(index)}
            ></li>
          ))}
        </div>
      )}
    </div>
  );
};
