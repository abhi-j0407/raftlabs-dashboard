import { Avatar, Badge, Dropdown, Statistic, Table, Tag } from "antd";
import { transactions } from "../../constants";
import { useState } from "react";

const columns = [
  {
    title: "Customer",
    dataIndex: "recepient",
    key: "recepient",
    render: (user) => (
      <div className=" flex gap-4 w-fit">
        <Badge count={'✦'} color="black" offset={[-5,45]} style={{
          color: '#FFC123',
        }}>
          <Avatar src={user.iconUrl} size={50} />
        </Badge>
        <div>
          <h6 className=" font-medium">{user.name}</h6>
          <p className=" text-sm text-gray-500">{user.mail}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag className="flex gap-2 w-fit bg-transparent rounded-full py-1 px-2">
        <Badge status={status === "Success" ? 'success' : status === "Fail" ? 'error' : 'warning'} />
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
      <Statistic value={amount} prefix='$' valueStyle={{
        fontSize: '1rem'
      }} />
    )
  },
  {
    title: "People",
    key: "people",
    responsive: ["md"],
    dataIndex: "people",
    render: (_, { people }) => (
      <Avatar.Group maxCount={3} maxStyle={{
        color: 'white',
        backgroundColor: 'black'
      }}>
        {people.map((person) => {
          return <Avatar key={person.name} src={person.iconUrl}>{person.name},</Avatar>;
        })}
      </Avatar.Group>
    ),
  },
];

const History = () => {

  const [month, setMonth] = useState('');
  const [recepient, setRecepient] = useState('');
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('');

  return (
    <section className=" m-6 grid gap-6">
      <div className="">
        <h6 className="text-4xl font-semibold text-gray-900">Transaction History</h6>
        {/* <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a className=" font-medium">
              Month
            </a>
          </Dropdown> */}
      </div>
      {/* <div>
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div> */}
      <Table columns={columns} dataSource={transactions} pagination={false} />
    </section>
  );
};

export default History;
