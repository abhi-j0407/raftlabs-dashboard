import { Dropdown, Statistic } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { sales, totalSales } from "../../constants";
import { useState } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

// Responsive sizes for custom table styles
const resSizes = {
  width: window.innerWidth > 1023 ? 500 : 300,
  barSize: window.innerWidth > 1023 ? 48 : 24,
  barGap: window.innerWidth > 1023 ? 16 : 4,
};

const Sales = () => {
  const [month, setMonth] = useState(Object.keys(sales)[0]); //Use top entry (latest) as default month

  // Extract dropdown items from data
  const items = Object.keys(sales).map((item) => ({
    label: <p className=" capitalize">{item}</p>,
    key: item,
    onClick: (e) => setMonth(e.key),
  }));

  return (
    <section className="m-6 flex flex-wrap justify-around rounded-2xl border border-gray-200 p-6 px-[2%] md:gap-x-2 md:gap-y-4 sm:gap-4">
      {/* Stats */}
      <div className=" flex flex-col justify-between gap-6 pb-10 md:pb-4 sm:pb-2">
        <div className="flex flex-col gap-2">
          <h5 className=" text-2xl font-medium">Total Sales & Cost</h5>
          <p className=" text-sm text-gray-400">Last 60 days</p>
        </div>
        <div>
          <Statistic
            value={totalSales.amount}
            groupSeparator="."
            prefix="$"
            suffix={
              <p
                className={`ml-4 rounded-full  py-1 pl-1.5 pr-2 text-xs font-medium  ${
                  totalSales.change >= 0
                    ? "bg-green-200 text-green-500"
                    : " bg-red-200 text-red-500"
                }`}
              >
                {totalSales.change >= 0 ? (
                  <CaretUpOutlined />
                ) : (
                  <CaretDownOutlined />
                )}{" "}
                {totalSales.change}
              </p>
            }
            valueStyle={{
              display: "flex",
              alignItems: "center",
              color: "#6E62E5",
              fontWeight: "bold",
              fontSize: "2.5rem",
            }}
          />
          <p className=" text-sm text-gray-400">
            <span
              className={`${
                totalSales.subChange > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {totalSales.subChange >= 0 ? "+" : "-"}
              {totalSales.subChange}k
            </span>{" "}
            vs prev. 60 days
          </p>
        </div>
      </div>
      {/* Graph */}
      <div className="grid gap-6 sm:w-full" id="container">
        <div className=" flex items-center justify-between px-8 sm:px-0">
          <h6 className=" text-lg font-medium sm:text-sm">
            Analytic{" "}
            <span
              className={`${
                sales[month].change > 0 ? "text-green-500" : "text-red-500"
              } ml-1 text-sm`}
            >
              {sales[month].change > 0 ? "+" : "-"}
              {sales[month].change}%
            </span>
          </h6>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a className=" font-medium sm:text-sm">
              Month <CaretDownOutlined className=" text-xs" />
            </a>
          </Dropdown>
        </div>
        <div className=" aspect-video w-[400px] md:w-[300px] sm:w-[100%]">
          <ResponsiveContainer height="90%" width="100%">
            <BarChart
              data={sales[month].stats}
              barGap={resSizes.barGap}
              margin={{
                right: 10,
                left: -30,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="period" className=" sm:text-xs" />
              <YAxis tickCount={4} className=" sm:text-xs" />
              <Tooltip shared={false} />
              <Bar
                dataKey="costs"
                fill="#D3CFFC"
                tooltip
                radius={8}
                barSize={resSizes.barSize}
              />
              <Bar
                dataKey="sales"
                fill="#6E62E5"
                radius={8}
                barSize={resSizes.barSize}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Sales;
