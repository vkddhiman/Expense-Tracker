import React from "react";
import "./Expense.css";

export default function Expenxe({ transactions }) {
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const Expense = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="expense">
      <div>
        <h3>Income</h3>
        <h4>{income}</h4>
      </div>
      <div>
        <h3>Expense</h3>
        <h4>{Expense}</h4>
      </div>
    </div>
  );
}
