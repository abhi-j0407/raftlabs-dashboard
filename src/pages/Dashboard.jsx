import { Main, SideMenu, Sidebar } from "../components";

const Dashboard = () => {
  return (
    <main className="flex border border-red-700 min-h-[90vh] m-auto min-w-full md:w-full">
      <SideMenu />
      <div className=" flex-grow border border-blue-500 flex md:flex-col">
        <Main />
        <Sidebar />
      </div>
    </main>
  );
};

export default Dashboard;
