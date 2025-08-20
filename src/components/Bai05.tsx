export default function Bai05() {
  const user = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  const formatName = (user: {
    firstName: string;
    lastName: string;
  }): string => {
    return user.firstName + " " + user.lastName;
  };
  return <div>Ho va ten: {formatName(user)}</div>;
}