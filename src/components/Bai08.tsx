import Table from "../components/Table08";

const data = [
  {
    id: 1,
    name: "Malcolm Lockyer",
    dob: "21/03/1961",
    gender: "Nam",
    address: "New york",
  },
  { id: 2, name: "Maria", dob: "11/02/1990", gender: "Nữ", address: "London" },
];

export default function Bai08() {
  return (
    <div style={{ padding: "20px" }}>
      <Table data={data} />
    </div>
  );
}