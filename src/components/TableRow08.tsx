import ActionButtons from "./ActionButtons08";
import "../styles/Bai08.css";

interface User {
  id: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
}

export default function TableRow({
  user,
  index,
}: {
  user: User;
  index: number;
}) {
  return (
    <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
      <td>{index}</td>
      <td>{user.name}</td>
      <td>{user.dob}</td>
      <td>{user.gender}</td>
      <td>{user.address}</td>
      <td>
        <ActionButtons />
      </td>
    </tr>
  );
}