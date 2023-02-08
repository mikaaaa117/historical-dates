import {
  Container,
  Controllers,
  Dates,
  EventsList,
  HorizontalLine,
} from "../../components";
import { Dispatch, FC, SetStateAction } from "react";

export interface HistoricalEvent {
  id: number;
  date: number;
  body: string;
}

interface MobileProps {
  data: {
    dates: number[];
    events: HistoricalEvent[];
  }[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Mobile: FC<MobileProps> = ({ data, page, setPage }) => {
  return (
    <Container>
      <h1 className="title">Исторические даты</h1>
      <Dates dates={data[page].dates} />
      <HorizontalLine />
      <EventsList items={data[page].events} />
      <Controllers setPage={setPage} page={page} maxPages={data.length} />
    </Container>
  );
};
