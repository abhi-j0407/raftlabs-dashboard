import { Main, SideMenu, Sidebar } from "../components";

const Dashboard = () => {
  return (
    <main className="flex min-h-[90vh] m-auto min-w-full md:w-full">
      <SideMenu />
      <div className=" flex-grow flex md:flex-col">
        <Main />
        <Sidebar />
      </div>
    </main>
  );
};

export default Dashboard;
