import {
  ArrowRightOutlined,
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown } from "antd";

// Sample users & Profile options
const extras = [
  {
    name: "Person 1",
    iconUrl: "/src/assets/photo_crop.png",
  },
  {
    name: "Person 2",
    iconUrl: "/src/assets/photo_crop.png",
  },
  {
    name: "Person 3",
    iconUrl: "/src/assets/photo_crop.png",
  },
  {
    name: "Person 4",
    iconUrl: "/src/assets/photo_crop.png",
  },
  {
    name: "Person 5",
    iconUrl: "/src/assets/photo_crop.png",
  },
  {
    name: "Person 6",
    iconUrl: "/src/assets/photo_crop.png",
  },
];

const options = ["Profile", "Logout"].map((option) => ({
  label: <p className=" capitalize">{option}</p>,
  key: option,
}));

const Promo = () => {
  return (
    <section className=" flex flex-col gap-6 p-6">
      {/* Notifications & Profile */}
      <div className="mt-7 flex items-center justify-between md:mt-0 md:hidden">
        <Badge dot offset={[-7, 7]} color="#6E62E5">
          <BellOutlined className=" text-3xl" style={{ color: "#989FA8" }} />
        </Badge>
        <Dropdown
          menu={{
            items: options,
          }}
          trigger={["click"]}
        >
          <a className="flex w-fit items-center gap-2 rounded-full border border-gray-50 bg-transparent p-1 pr-2 text-sm font-medium shadow-md sm:text-xs">
            <Avatar src="/src/assets/photo_crop.png" size={"small"} />
            Jhontosan
            <DownOutlined className="text-[0.6rem] text-gray-500" />
          </a>
        </Dropdown>
      </div>
      <div className="grid gap-2 sm:gap-1">
        <p className=" text-sm text-[#6E62E5] sm:text-xs">Premium Access</p>
        <h6 className=" flex gap-4 text-[1.4rem] font-bold sm:flex-col sm:gap-0">
          Take Back Your Creative Control{" "}
          <Avatar.Group
            maxCount={3}
            maxStyle={{
              color: "white",
              backgroundColor: "black",
            }}
            style={{
              alignSelf: "flex-end",
            }}
          >
            {extras.map((person) => {
              return (
                <Avatar key={person.name} src={person.iconUrl}>
                  {person.name},
                </Avatar>
              );
            })}
          </Avatar.Group>
        </h6>
        <p className="flex items-center gap-3 text-sm text-gray-500 sm:text-xs">
          The Professional Team{" "}
          <DownOutlined className="text-[0.6rem] text-gray-500" />
        </p>
      </div>
      <Button
        icon={<ArrowRightOutlined />}
        className=" text-accentPurple flex flex-row-reverse items-center justify-between border border-gray-200 py-5 pl-3 pr-1 shadow-none md:w-fit md:gap-6"
      >
        Upgrade Now
      </Button>
    </section>
  );
};

export default Promo;
