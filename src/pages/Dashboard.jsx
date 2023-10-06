import { Main, Menu, Sidebar } from "../components";

const Dashboard = () => {
  return (
    <main className="flex border border-red-700 min-h-[90vh] w-[95vw] md:w-full">
      <Menu />
      <div className=" flex-grow border border-blue-500 flex md:flex-col">
        <Main />
        <Sidebar />
      </div>
    </main>
  );
};

export default Dashboard;
