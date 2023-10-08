import { Statistic } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { sales } from "../../constants";

const foo = 14.5;

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
        <div>
          <h6>Analytic <span>{sales["august"].change}</span></h6>
        </div>
        <BarChart
          width={500}
          height={200}
          data={sales["august"].stats}
          margin={{
            right: 40
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="costs" fill="#8884d8" tooltip/>
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </div>
    </section>
  );
};

export default Sales;
