import TableHeader from "./TableHeader08";
import TableRow from "./TableRow08";
import "../styles/Bai08.css";

interface User {
  id: number;
  name: string;
  dob: string;
  gender: string;
  address: string;
}

export default function Table({ data }: { data: User[] }) {
  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        {data.map((user, index) => (
          <TableRow key={user.id} user={user} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}