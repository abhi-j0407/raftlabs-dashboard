import Promo from "./Promo";
import Schedule from "./Schedule";

const Sidebar = () => {
  return (
    <aside className=" w-1/4 min-w-[300px] md:w-full">
      <Promo />
      <Schedule />
    </aside>
  );
};

export default Sidebar;
