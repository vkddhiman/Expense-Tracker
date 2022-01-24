import React from "react";

export default function Balance({ transactions }) {
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
  return (
    <>
      <h3>Balance</h3>
      <h4>{total}</h4>
    </>
  );
}
