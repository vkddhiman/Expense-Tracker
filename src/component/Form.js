import React, { useState } from "react";
import "./Form.css";

export default function Form({ addTransaction }) {
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("");
  // const [save, setSave] = useState();

  const addNewTransactionHandler = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setAmount("");
    setText("");
  };
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form>
      <h3>Add New Transaction</h3>
      <h5>Text :</h5>
      <input
        type="text"
        value={text}
        placeholder="Enter Text"
        onChange={textChangeHandler}
      />
      <h5>Amount :</h5>
      <h5>(negative-expense,positive-income)</h5>
      <input
        type="amount"
        value={amount}
        placeholder="Enter Amount"
        onChange={amountChangeHandler}
      />
      <br></br>
      <button className="button" onClick={addNewTransactionHandler}>
        Add Transaction
      </button>
    </form>
  );
}
