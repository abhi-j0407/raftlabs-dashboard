import Promo from "./Promo";
import Schedule from "./Schedule";

const Sidebar = () => {
  return (
    <aside className=" w-1/4 md:w-full">
      <Promo />
      <Schedule />
    </aside>
  );
};

export default Sidebar;
