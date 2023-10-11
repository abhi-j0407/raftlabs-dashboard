import { Calendar } from "antd";
import { schedules } from "../../constants";
import { useState } from "react";
import { ClockCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(Object.keys(schedules)[0]);

  // Update choice and display schedule for that day
  const onPanelChange = (value) => {
    setSelectedDate(value.format("YYYY-MM-DD").toString());
  };

  return (
    <div className="flex flex-col gap-6 p-2">
      <Calendar fullscreen={false} onChange={onPanelChange} mode="month" />
      <div className=" px-2">
        {schedules[selectedDate.toString()]?.map((appointment) => (
          <div
            key={appointment.id}
            className=" flex gap-4 border-b border-gray-100 py-4 last:border-b-0"
          >
            <div className=" flex h-fit w-12 rounded-full bg-gray-200 p-3.5">
              <img src={appointment.icon} alt="" />
            </div>
            <div className=" flex flex-col gap-2 md:w-full md:flex-row md:items-center md:justify-between sm:flex-col sm:items-start">
              <p className=" text-sm font-medium">{appointment.title}</p>
              <div className=" flex items-center justify-between gap-6 text-xs text-gray-400">
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
