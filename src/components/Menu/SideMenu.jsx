// import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { menuItems } from "../../constants";
import { Button, ConfigProvider, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

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
  const [open, setOpen] = useState(false);

  // Generate array of menu items
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
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            /* here is your component tokens */
            itemSelectedBg: "#6E62E5",
            itemSelectedColor: "white",
          },
        },
      }}
    >
      {/* Desktop nav */}
      <nav className=" flex w-1/6 flex-col gap-4 border border-gray-200 px-4 py-2 md:hidden md:px-0">
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
          style={{ border: "none" }}
        />
      </nav>
      
      {/* Mobile nav */}
      <Button
        type="primary"
        onClick={() => setOpen(true)}
        className=" fixed left-6 top-6 z-30 hidden border border-gray-100 bg-white md:block"
      >
        <MenuOutlined
          style={{
            color: "#6E62E5",
            display: "flex",
          }}
        />
      </Button>
      <Drawer
        title={
          <div className=" flex min-h-[4rem] items-center justify-start text-center">
            <img src="/src/assets/logo.svg" alt="logo" />
            <a href="#" className="pt-1 text-3xl">
              Omoi
            </a>
          </div>
        }
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        width={window.innerWidth > 450 ? "fit-content" : "100%"}
      >
        <nav className="w-52 px-4 py-2 md:px-0 sm:w-full">
          <Menu
            items={items}
            mode="inline"
            defaultSelectedKeys="Home"
            style={{ border: "none" }}
          />
        </nav>
      </Drawer>
    </ConfigProvider>
  );
};

export default SideMenu;
