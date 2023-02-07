import { CircleMenu, Container, Events } from "./components";
import "./App.scss";

export const App = () => {
  return (
    <Container>
      <h1 className="title">Исторические даты</h1>
      <CircleMenu />
      <Events />
    </Container>
  );
};
