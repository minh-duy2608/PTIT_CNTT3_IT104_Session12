import React from "react";
import "../styles/Bai02.css";

export default function Bai02() {
  const sum = (a: number, b: number): number => a + b;
  const sub = (a: number, b: number): number => a - b;
  const mul = (a: number, b: number): number => a * b;
  const divis = (a: number, b: number): number | undefined => {
    if (b !== 0) return a / b;
    else return undefined;
  };

  const firstNumber = 10;
  const secondNumber = 10;
  return (
    <React.Fragment>
      <div>
        <h2>Danh sach ket qua: </h2>

        <ul>
          <li>
            {firstNumber} + {secondNumber} = {sum(firstNumber, secondNumber)}
          </li>
          <li>
            {firstNumber} - {secondNumber} = {sub(firstNumber, secondNumber)}
          </li>
          <li>
            {firstNumber} * {secondNumber} = {mul(firstNumber, secondNumber)}
          </li>
          <li>
            {firstNumber} / {secondNumber} = {divis(firstNumber, secondNumber)}
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}