import { Dropdown, Table } from "antd"

const History = () => {
  return (
    <section>
      <div>
        <h6>Transaction History
        </h6>
        <Dropdown />
      </div>
      <div>
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
      <div>
        <Table />
      </div>
    </section>
  )
}

export default History