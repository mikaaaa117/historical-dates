import { CircleMenu, Container, Controllers, EventsList } from "./components";
import "./App.scss";
import { useState } from "react";
import { data } from "./data";

export const App = () => {
  const [page, setPage] = useState(1);

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
    </Container>
  );
};
