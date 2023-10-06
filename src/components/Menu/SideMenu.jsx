import Sider from "antd/es/layout/Sider";
import { menuItems } from "../../constants";
import { Button, Menu } from "antd";
import { useState } from "react";

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
    <div className=" flex flex-col gap-4  px-4 md:px-0 py-2 border border-yellow-500">
      <div className=" flex min-h-[4rem] items-center justify-start text-center">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="45.000000pt"
          height="45.000000pt"
          viewBox="0 0 70.000000 72.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,72.000000) scale(0.100000,-0.100000)"
            fill="#6E62E5"
            stroke="none"
          >
            <path
              d="M250 537 c0 -31 -53 -86 -90 -93 l-30 -6 0 -78 c0 -127 38 -204 127
-256 40 -23 60 -28 118 -28 61 -1 76 3 115 28 25 16 53 39 64 50 30 34 66 123
66 166 0 58 -40 140 -89 182 -50 43 -104 58 -205 58 -72 0 -76 -1 -76 -23z
m145 -87 c20 0 74 -34 89 -56 38 -54 26 -135 -25 -179 -25 -20 -41 -25 -86
-25 -51 0 -58 3 -94 39 -22 21 -39 48 -39 60 0 17 -6 21 -32 21 -56 0 -62 15
-13 28 63 17 127 78 156 150 l24 57 3 -47 c2 -33 7 -48 17 -48z"
            />
          </g>
        </svg>
        <a href="#" className="pt-1 text-3xl md:hidden">
          Omoi
        </a>
      </div>
      <Menu
          items={items}
          className=" "
          mode="inline"
          defaultSelectedKeys="Home"
        style={{ border: 'none' }}
        />
    </div>
  );
};

export default SideMenu;
