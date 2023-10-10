import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Progress } from "antd";
import { useState } from "react";

const Hero = () => {
  const [showSearch, setShowSearch] = useState(false); //State to control search field expansion

  return (
    <section className=" p-6">
      <div className=" flex items-center justify-between md:items-start">
        {/* Avatar & Greeting */}
        <div className=" flex gap-8 md:mt-16 md:flex-col sm:gap-6">
          <div className=" relative">
            <Badge
              count={1}
              offset={[-10, 11]}
              className=" relative z-10"
              color="#6E62E5"
            >
              <Avatar
                src='/assets/photo_crop.png'
                icon={<UserOutlined />}
                className=" left-1 top-1 w-full"
                size={93}
              />
            </Badge>
            <Progress
              type="circle"
              percent={50}
              className=" absolute left-0 top-0"
              strokeWidth={3}
              size={101}
              strokeColor="#6E62E5"
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h4 className=" text-4xl font-semibold text-gray-900 sm:text-2xl">
              Good Evening Team!
            </h4>
            <p className=" text-sm text-gray-500">
              Have an in-depth look at all the metrics within your dashboard.
            </p>
          </div>
        </div>
        {/* Search */}
        <div className="right-6 flex h-fit gap-3 rounded-full bg-gray-100 px-3 py-1 md:absolute">
          <SearchOutlined
            className=" py-2 text-lg text-gray-500"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input
              type="text"
              className=" bg-transparent text-gray-600 outline-none sm:w-32"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
