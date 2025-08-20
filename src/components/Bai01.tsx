import React from "react";
import "../styles/Bai01.css";

export default function Bai01() {
  const lists = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "Javacsript" },
    { id: 4, name: "ReactJS" },
  ];
  return (
    <React.Fragment>
      <h1>Danh sach khoa hoc</h1>
      <div className="list-li">
        {lists.map((item) => (
          <li key={item.id}>
            {item.id}. {item.name}
          </li>
        ))}
      </div>
    </React.Fragment>
  );
}