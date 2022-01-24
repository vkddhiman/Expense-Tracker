import React from "react";
import "./TransactionForm.css";

export default function TransactionForm({
  transaction,
  deleteTransactionHandler,
}) {
  // console.log(transaction);
  return (
    <ul>
      <div className="form">
        <div className="work">
          <div>
            <h4>{transaction.text}</h4>
          </div>
          <div>
            <h4>{transaction.amount}</h4>
          </div>
        </div>
        <button
          className="button"
          onClick={() => deleteTransactionHandler(transaction.id)}
        >
          Delete
        </button>
      </div>
    </ul>
  );
}
