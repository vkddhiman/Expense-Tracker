import { useState } from "react";
import "./App.css";
import Balance from "./component/Balance";
import Expenxe from "./component/Expenxe";
import Form from "./component/Form";
import Transaction from "./component/Transaction";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Momos", amount: -20 },
    { id: 2, text: "Salary", amount: 2000 },
    { id: 3, text: "Apple", amount: -210 },
    { id: 4, text: "Cash", amount: 200 },
  ]);

  const deleteTransactionHandler = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  const addTransaction = (transaction) => {
    setTransactions((transactions) => [transaction, ...transactions]);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Balance transactions={transactions} />
      <Expenxe transactions={transactions} />
      <div className="trans">
        <Transaction
          transactions={transactions}
          deleteTransactionHandler={deleteTransactionHandler}
        />
        <Form addTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default App;
