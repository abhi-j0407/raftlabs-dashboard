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
  },
  {
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

export const stats = [
  {
    icon: "/src/assets/icons8-money-bag-with-coins-100.png",
    title: "Monthly Revenue",
    value: "3500",
    change: "+2.4",
    subtitle: "Previous month",
    subValue: "1.7k",
  },
  {
    icon: "/src/assets/icons8-cash-in-hand-100.png",
    title: "Monthly Sales",
    value: "6750",
    change: "+1.4",
    subtitle: "Previous month",
    subValue: "3.1k",
  },
  {
    icon: "/src/assets/icons8-piggy-bank-100.png",
    title: "Total Profit",
    value: "10900",
    change: "+4.3",
    subtitle: "Previous year",
    subValue: "8.9k",
  },
];

export const totalSales = {
  amount: "956.82k",
  change: 14.5,
  subChange: 8.2,
};

export const sales = {
  august: {
    stats: [
      {
        period: "1-10 Aug",
        costs: 37,
        sales: 47,
      },
      {
        period: "1-10 Aug",
        costs: 37,
        sales: 47,
      },
      {
        period: "1-10 Aug",
        costs: 37,
        sales: 47,
      },
    ],
    change: 5.4,
  },
  september: {
    stats: [
      {
        period: "1-10 sept",
        costs: 37,
        sales: 47,
      },
      {
        period: "1-10 sept",
        costs: 37,
        sales: 47,
      },
      {
        period: "1-10 sept",
        costs: 37,
        sales: 47,
      },
    ],
    change: 5.4,
  },
};

export const transactions = [
  {
    recepient: {
      name: "Flyod Johntosan",
      mail: "johntosan@gmail.com",
      iconUrl: "/src/assets/photo_crop.png",
    },
    status: "Success",
    key: "1",
    date: "2021-01-01",
    amount: 10000,
    people: [
      {
        name: "Person 1",
        iconUrl: "/src/assets/photo_crop.png",
      },
      {
        name: "Person 1",
        iconUrl: "/src/assets/photo_crop.png",
      },
      {
        name: "Person 1",
        iconUrl: "/src/assets/photo_crop.png",
      },
      {
        name: "Person 1",
        iconUrl: "/src/assets/photo_crop.png",
      },
      {
        name: "Person 1",
        iconUrl: "/src/assets/photo_crop.png",
      },
      {
        name: "Person 1",
        iconUrl: "/src/assets/photo_crop.png",
      },
    ],
  },
  {
    recepient: {
      name: "L Johntosan",
      mail: "johntosan@gmail.com",
      iconUrl: "/src/assets/photo_crop.png",
    },
    status: "Success",
    date: "2021-01-01",
    amount: 10000,
    key: "2",
    people: [
      {
        name: "Person",
        iconUrl: "/src/assets/photo_crop.png",
      },
      {
        name: "Person",
        iconUrl: "/src/assets/photo_crop.png",
      },
      {
        name: "Person",
        iconUrl: "/src/assets/photo_crop.png",
      },
      {
        name: "Person",
        iconUrl: "/src/assets/photo_crop.png",
      },
      {
        name: "Person",
        iconUrl: "/src/assets/photo_crop.png",
      },
      {
        name: "Person",
        iconUrl: "/src/assets/photo_crop.png",
      },
    ],
  },
];

export const schedules = {
  "2023-10-10": [
    {
      time: "12pm",
      platform: "Google Meet",
      title: "Meeting with Client",
      icon: "/src/assets/laptop-svgrepo-com.svg",
      id: 1
    },
    {
      time: "03pm",
      platform: "Google Meet",
      title: "Weekly Report",
      icon: "/src/assets/books-svgrepo-com.svg",
      id: 2
    },
    {
      time: "05pm",
      platform: "Google Meet",
      title: "Daily Scrum Meeting",
      icon: "/src/assets/notebook-with-decorative-cover-svgrepo-com.svg",
      id: 3
    },
  ],
};
