import {
  BarChartOutlined,
  CompassOutlined,
  FolderOutlined,
  HomeOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

export const menuItems = [
  {
    title: "Home",
    icon: <HomeOutlined />,
  },
  {
    title: "Analytic",
    icon: <BarChartOutlined />,
  },
  {
    title: "Explore",
    icon: <CompassOutlined />,
  },
  {
    title: "Shop",
    icon: <ShoppingOutlined />,
  },
  {
    title: "Inbox",
    icon: <MessageOutlined />,
  },
  {
    title: "Tools",
    type: "group",
    children: [
      {
        title: "Setting",
        icon: <SettingOutlined />,
      },
      {
        title: "Help",
        icon: <QuestionCircleOutlined />,
      },
    ],
  },{
    title: "Projects",
    type: "group",
    children: [
      {
        title: "Amazon",
        icon: <FolderOutlined />,
      },
      {
        title: "Invinity HQ",
        icon: <FolderOutlined />,
      },
    ],
  },
];
