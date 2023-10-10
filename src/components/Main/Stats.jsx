import { Statistic } from "antd";
import { stats } from "../../constants";
import { PropTypes } from "prop-types";

// Indiviual stat component
const Stat = ({ stat }) => (
  <div className=" flex gap-4 sm:m-auto">
    <img
      src={stat.icon}
      alt="icon"
      className=" w-16 self-center rounded-full p-4"
      style={{ background: "linear-gradient(0deg, #A6C354 40%, #B9EEFF 40%)" }}
    />
    <div>
      <Statistic
        title={
          <p className=" text-base font-medium tracking-wide text-violet-100">
            {stat.title}
          </p>
        }
        value={stat.value}
        groupSeparator="."
        prefix="$"
        suffix={
          <p className=" rounded-full bg-white py-1 pl-1.5 pr-2 text-xs font-medium text-violet-400">
            {stat.change}
          </p>
        }
        valueStyle={{
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      />
      <div className=" flex gap-1 text-sm">
        <p className=" text-violet-100">{stat.subtitle}</p>
        <p className=" font-bold text-white">${stat.subValue}</p>
      </div>
    </div>
  </div>
);

const Stats = () => {
  return (
    <section className=" m-6 flex flex-wrap justify-around rounded-2xl bg-accentPurple p-6 px-[2%] md:gap-x-2 md:gap-y-4 sm:gap-4 sm:justify-between">
      {stats.map((stat) => (
        <Stat stat={stat} key={stat.title} />
      ))}
    </section>
  );
};

Stat.propTypes = {
  stat: PropTypes.object,
};

export default Stats;
