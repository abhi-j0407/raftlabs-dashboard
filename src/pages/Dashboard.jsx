import { Main, SideMenu, Sidebar } from "../components";

const Dashboard = () => {
  return (
    <main className="font m-auto flex min-h-[90vh] min-w-full md:w-full">
      <SideMenu />
      <div className=" flex md:flex-col w-5/6 md:w-full">
        <Main />
        <Sidebar />
      </div>
    </main>
  );
};

export default Dashboard;
