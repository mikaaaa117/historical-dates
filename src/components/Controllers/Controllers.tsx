import { Dispatch, FC, SetStateAction } from "react";
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
      <div className="controllers__page">
        <span>0{page + 1}</span>/<span>0{maxPages}</span>
      </div>
      <div className="controllers__buttons">
        <button onClick={handlePrevPage}>
          <img src="/icons/prev-icon.svg" />
        </button>
        <button onClick={handleNextPage}>
          <img src="/icons/next-icon.svg" />
        </button>
      </div>
    </div>
  );
};
