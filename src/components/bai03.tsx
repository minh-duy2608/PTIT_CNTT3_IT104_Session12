import React from "react";
import "../styles/Bai02.css";

export default function Bai03() {
  const userInfo = {
    name: "Nguyen Van A",
    gender: 0,
    dOB: "06/03/2024",
    email: "nva@gmail.com",
    address: "Thanh Xuan, Ha Noi",
  };
  return (
    <React.Fragment>
      <h2>Thong tin ca nhan</h2>
      <ul>
        <li> Ho va ten: {userInfo.name}</li>
        <li> Gioi tinh: {userInfo.gender ? "NU" : "NAM"}</li>
        <li> Ngay sinh: {userInfo.dOB}</li>
        <li> Email: {userInfo.email}</li>
        <li> Dia chi: {userInfo.address}</li>
      </ul>
    </React.Fragment>
  );
}