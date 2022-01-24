import React from "react";
import TransactionForm from "./TransactionForm";

export default function Transaction({
  transactions,
  deleteTransactionHandler,
}) {
  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionForm
            key={transaction.id}
            transaction={transaction}
            deleteTransactionHandler={deleteTransactionHandler}
          />
        ))}
      </ul>
    </>
  );
}
