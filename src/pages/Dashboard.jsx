import { Main, SideMenu, Sidebar } from "../components";

const Dashboard = () => {
  return (
    <main className="font m-auto flex min-h-[90vh] min-w-full md:w-full">
      <SideMenu />
      <div className=" flex flex-grow md:flex-col">
        <Main />
        <Sidebar />
      </div>
    </main>
  );
};

export default Dashboard;
