import {
  CircleMenu,
  Container,
  Controllers,
  EventsList,
  VerticalLine,
} from "../../components";
import { Dispatch, FC, SetStateAction } from "react";

export interface HistoricalEvent {
  id: number;
  date: number;
  body: string;
}

interface BrowserProps {
  data: {
    dates: number[];
    events: HistoricalEvent[];
  }[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Browser: FC<BrowserProps> = ({ data, page, setPage }) => {
  return (
    <Container>
      <h1 className="title">Исторические даты</h1>
      <CircleMenu
        maxPages={data.length}
        dates={data[page].dates}
        page={page}
        setPage={setPage}
      />
      <Controllers page={page} maxPages={data.length} setPage={setPage} />
      <EventsList items={data[page].events} />
      <VerticalLine />
    </Container>
  );
};
