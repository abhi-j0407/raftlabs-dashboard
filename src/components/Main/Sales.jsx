import { Dropdown, Statistic } from "antd";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { sales } from "../../constants";
import { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";

const foo = 14.5;

const Sales = () => {
  const [month, setMonth] = useState(Object.keys(sales)[0]);

  const items = Object.keys(sales).map((item) => ({
    label: <p className=" capitalize">{item}</p>,
    key: item,
    onClick: (e) => setMonth(e.key),
  }));

  return (
    <section className="m-6 flex flex-wrap justify-around rounded-2xl border border-gray-200 p-6 px-[2%] md:gap-x-2 md:gap-y-4 sm:gap-4">
      <div className=" flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h5 className=" text-2xl font-medium">Total Sales & Cost</h5>
          <p className=" text-sm text-gray-400">Last 60 days</p>
        </div>
        <div>
          <Statistic
            value="956.82k"
            groupSeparator="."
            prefix="$"
            suffix={
              <p className=" ml-4 rounded-full bg-green-200 py-1 pl-1.5 pr-2 text-xs font-medium text-green-500">
                {foo >= 0 ? "^ " : "^^ "}
                {foo}
              </p>
            }
            valueStyle={{
              display: "flex",
              alignItems: "center",
              color: "rgb(167 139 250)",
              fontWeight: "bold",
              fontSize: "2.5rem",
            }}
          />
          <p className=" text-sm text-gray-400">
            <span className=" text-green-500">+8.20k</span> vs prev. 60 days
          </p>
        </div>
      </div>
      <div className="grid gap-6" id="container">
        <div className=" flex justify-between px-8">
          <h6 className=" text-lg font-medium">
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
            <a className=" font-medium">
              Month <CaretDownOutlined className=" text-xs" />
            </a>
          </Dropdown>
        </div>
        <BarChart
          width={500}
          height={150}
          data={sales[month].stats}
          barGap={16}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="period" />
          <YAxis tickCount={4} />
          <Tooltip shared={false} />
          <Bar dataKey="costs" fill="#D3CFFC" tooltip radius={8} barSize={48} />
          <Bar dataKey="sales" fill="#6E62E5" radius={8} barSize={48} />
        </BarChart>
      </div>
    </section>
  );
};

export default Sales;
