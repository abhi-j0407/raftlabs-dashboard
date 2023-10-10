import { Hero, History, Sales, Stats } from "../";

const Main = () => {
  return (
    <div className=" flex-grow">
      <Hero />
      <Stats />
      <Sales />
      <History />
    </div>
  );
};

export default Main;
