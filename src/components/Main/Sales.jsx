import { Statistic } from "antd";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { sales } from "../../constants";

const foo = 14.5;
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Sales = () => {
  return (
    <section className="m-6 flex flex-wrap justify-around rounded-2xl border border-gray-200 p-6 px-[2%] md:gap-x-2 md:gap-y-4 sm:gap-4">
      <div className=" flex flex-col justify-between gap-6 border border-red-500">
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
      <div className="border border-green-500" id="container">
        <BarChart
          width={500}
          height={300}
          data={sales["august"]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="costs" fill="#8884d8" />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </div>
    </section>
  );
};

export default Sales;
