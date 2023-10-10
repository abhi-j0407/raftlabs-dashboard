import {
  Avatar,
  Badge,
  ConfigProvider,
  DatePicker,
  Dropdown,
  Statistic,
  Table,
  Tag,
} from "antd";
import { transactions } from "../../constants";
import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const History = () => {
  // States for storing filter values
  const [month, setMonth] = useState("");
  const [recepient, setRecepient] = useState("");
  const [status, setStatus] = useState("");

  // Columns' structures & features
  const columns = [
    {
      title: "Customer",
      dataIndex: "recepient",
      key: "recepient",
      render: (user) => (
        <div className=" flex w-fit gap-4">
          <div className=" sm:hidden">
            <Badge
              count={"✦"}
              color="black"
              offset={[-5, 45]}
              style={{
                color: "#FFC123",
              }}
            >
              <Avatar src={user.iconUrl} size={50} />
            </Badge>
          </div>
          <div>
            <h6 className=" font-medium sm:text-sm">{user.name}</h6>
            <p className=" text-sm text-gray-500 sm:text-xs">{user.mail}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      responsive: ["sm"],
      render: (status) => (
        <Tag
          className="flex w-fit cursor-pointer gap-2 rounded-full bg-transparent px-2 py-1 hover:bg-gray-200"
          onClick={() => setStatus(status)}
        >
          <Badge
            status={
              status === "Success"
                ? "success"
                : status === "Fail"
                ? "error"
                : "warning"
            }
          />
          {status}
        </Tag>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      responsive: ["md"],
    },
    {
      title: "Invoice",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <Statistic
          value={amount}
          prefix="$"
          valueStyle={{
            fontSize: "1rem",
          }}
        />
      ),
    },
    {
      title: "People",
      key: "people",
      responsive: ["md"],
      dataIndex: "people",
      render: (_, { people }) => (
        <Avatar.Group
          maxCount={3}
          maxStyle={{
            color: "white",
            backgroundColor: "black",
          }}
        >
          {people.map((person) => {
            return <Avatar key={person.name} src={person.iconUrl} />;
          })}
        </Avatar.Group>
      ),
    },
  ];

  // Logging filter changes
  useEffect(() => {
    console.log("Selected month: ", month);
    console.log("Selected recepient: ", recepient);
    console.log("Selected status: ", status);
  }, [month, recepient, status]);

  const recepients = transactions.map((transaction) => ({
    label: <p className=" capitalize">{transaction.recepient.name}</p>,
    key: transaction.recepient.name,
    onClick: (e) => setRecepient(e.key),
  }));

  const statuses = ["Success", "Pending", "Failed"].map((status) => ({
    label: <p className=" capitalize">{status}</p>,
    key: status,
    onClick: (e) => setStatus(e.key),
  }));

  const handleChange = (_, dateString) => {
    setMonth(dateString);
  };

  return (
    <section className=" m-6 grid gap-6">
      <div className=" flex justify-between sm:flex-col sm:gap-4">
        <h6 className="text-4xl font-semibold text-gray-900 sm:text-2xl">
          Transaction History
        </h6>
        <DatePicker
          onChange={handleChange}
          picker="month"
          className="my-auto h-fit w-fit"
        />
      </div>
      {/* Filters */}
      <div className="flex gap-4 sm:justify-between sm:gap-0">
        <Dropdown
          menu={{
            items: recepients,
          }}
          trigger={["click"]}
        >
          <a className="w-fit rounded-md bg-gray-200 px-3 py-1 text-sm sm:text-xs">
            Recepient{" "}
            <DownOutlined className=" ml-1 text-[0.6rem] text-gray-500" />
          </a>
        </Dropdown>

        <Dropdown
          menu={{
            items: statuses,
          }}
          trigger={["click"]}
        >
          <a className="w-fit rounded-md bg-gray-200 px-3 py-1 text-sm sm:text-xs">
            Amount{" "}
            <DownOutlined className=" ml-1 text-[0.6rem] text-gray-500" />
          </a>
        </Dropdown>

        <Dropdown
          menu={{
            items: statuses,
          }}
          trigger={["click"]}
        >
          <a className="w-fit rounded-md bg-gray-200 px-3 py-1 text-sm sm:text-xs">
            Status{" "}
            <DownOutlined className=" ml-1 text-[0.6rem] text-gray-500" />
          </a>
        </Dropdown>
      </div>
      {/* Table */}
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "transparent",
              headerColor: "#A7ADB5",
              headerSplitColor: "transparent",
              cellFontSize: "1rem",
            },
          },
        }}
      >
        <div className=" max-w-full">
          <Table
            columns={columns}
            dataSource={transactions}
            pagination={false}
            style={{ width: "100%" }}
          />
        </div>
      </ConfigProvider>
    </section>
  );
};

export default History;
