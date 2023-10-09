import Promo from "./Promo";
import Schedule from './Schedule';

const Sidebar = () => {
  return (
    <div className="  w-1/4 border border-red-500 md:w-full">
      <Promo />
      <Schedule />
    </div>
  );
};

export default Sidebar;
