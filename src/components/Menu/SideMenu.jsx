// import Sider from "antd/es/layout/Sider";
import { menuItems } from "../../constants";
import { ConfigProvider, Menu } from "antd";
// import { useState } from "react";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const SideMenu = () => {
  // const [collapse, setCollapse] = useState(false);

  const items = menuItems.map((menuItem) =>
    getItem(
      menuItem.title,
      menuItem.title,
      menuItem.icon,
      menuItem.children?.map((child) =>
        getItem(child.title, child.title, child.icon),
      ),
      menuItem.type,
    ),
  );

  return (
    <>
      <nav className=" flex w-1/6 flex-col gap-4 px-4 py-2 md:hidden md:px-0 border border-gray-200">
        <div className=" flex min-h-[4rem] items-center justify-start text-center">
          <img src="/src/assets/logo.svg" alt="logo" />
          <a href="#" className="pt-1 text-3xl md:hidden">
            Omoi
          </a>
        </div>
        <ConfigProvider theme={{
    components: {
      Menu: {
        /* here is your component tokens */
        // itemActiveBg: '#6E62E5'
      },
    },
  }}>
        <Menu
          items={items}
          className=""
          mode="inline"
          defaultSelectedKeys="Home"
          style={{ border: "none" }}
          // inlineCollapsed={collapse}
        />
        </ConfigProvider>
      </nav>
      {/* <Drawer className=" hidden md:inline-block" placement="left" closable >
      <div className=" flex min-h-[4rem] items-center justify-start text-center">
        <img src="/src/assets/logo.svg" alt="logo" />
        <a href="#" className="pt-1 text-3xl md:hidden">
          Omoi
        </a>
      </div>
      <Menu
          items={items}
          className=""
          mode="inline"
          defaultSelectedKeys="Home"
        style={{ border: 'none' }}
        inlineCollapsed={collapse}
        />
      </Drawer> */}
    </>
  );
};

export default SideMenu;
