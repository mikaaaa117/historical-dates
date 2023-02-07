import { CircleMenu, Container, EventsList } from "./components";
import "./App.scss";

const items = [
  {
    id: 1,
    date: 2023,
    body: "Helllo world",
  },
  {
    id: 2,
    date: 2023,
    body: "Helllo world",
  },
  {
    id: 3,
    date: 2023,
    body: "Helllo world",
  },
  {
    id: 4,
    date: 2023,
    body: "Helllo world",
  },
  {
    id: 5,
    date: 2023,
    body: "Helllo world",
  },
  {
    id: 6,
    date: 2023,
    body: "Helllo world",
  },
  {
    id: 7,
    date: 2023,
    body: "Helllo world",
  },
  {
    id: 8,
    date: 2023,
    body: "Helllo world",
  },
  {
    id: 9,
    date: 2023,
    body: "Helllo world",
  },
];

export const App = () => {
  return (
    <Container>
      <h1 className="title">Исторические даты</h1>
      <CircleMenu />
      <EventsList items={items} />
    </Container>
  );
};
