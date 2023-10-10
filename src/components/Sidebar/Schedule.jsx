import { Calendar } from "antd";
import { schedules } from "../../constants";
import { useState } from "react";
import { ClockCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";

let today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;
console.log("Today: ", today);

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(today);

  const onPanelChange = (value) => {
    console.log(value.format("YYYY-MM-DD").toString());
    value.format("YYYY-MM-DD").toString() === today
      ? console.log("match")
      : console.log("sdsdsd");
    setSelectedDate(value.format("YYYY-MM-DD").toString());
    console.log(
      "SCHEDULES: ",
      schedules[value.format("YYYY-MM-DD").toString()],
    );
  };
  return (
    <div className="p-6 flex flex-col gap-6">
      <Calendar fullscreen={false} onChange={onPanelChange} mode="month" />
      <div>
        {schedules[selectedDate.toString()].map((appointment) => (
          <div key={appointment.id} className=" flex gap-4 border-b border-gray-100 py-4 last:border-b-0">
            <div className=" bg-gray-200 w-12 p-3.5 rounded-full">
            <img src={appointment.icon} alt="" />
            </div>
            <div className=" flex flex-col gap-2 md:flex-row sm:flex-col md:justify-between md:items-center sm:items-start md:w-full">
              <p className=" text-sm font-medium">{appointment.title}</p>
              <div className=" text-xs text-gray-400 flex gap-6 md:gap-10">
                <div className=" flex gap-2">
                  <VideoCameraOutlined />
                  <p>{appointment.platform}</p>
                </div>
                <div className="flex gap-2">
                  <ClockCircleOutlined />
                  <p>{appointment.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
