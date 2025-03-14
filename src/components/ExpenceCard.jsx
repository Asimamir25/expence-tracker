import React, { useState } from "react";

const ExpenseSplitter = () => {
  const [name, setName] = useState("");
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [budget, setBudget] = useState([]);

  const addBudget = () => {
    if (!name.trim() || !expense.trim() || !amount.trim() || isNaN(amount)) {
      alert("Please enter valid details.");
      return;
    }

    setBudget([...budget, { name, expense, amount: Number(amount) }]);
    setName("");
    setExpense("");
    setAmount("");
  };

  const total = budget.reduce((sum, item) => sum + Number(item.amount), 0);
  const perPersonShare = budget.length > 0 ? total / budget.length : 0;

  const balances = budget.map((item) => ({
    name: item.name,
    balance: item.amount - perPersonShare, // If negative, they owe money
  }));

  // Sorting balances into givers and receivers
  const givers = balances
    .filter((b) => b.balance < 0)
    .sort((a, b) => a.balance - b.balance);
  const receivers = balances
    .filter((b) => b.balance > 0)
    .sort((a, b) => b.balance - a.balance);

  const transactions = [];
  let i = 0,
    j = 0;

  while (i < givers.length && j < receivers.length) {
    let giver = givers[i];
    let receiver = receivers[j];
    let amountToPay = Math.min(-giver.balance, receiver.balance);

    transactions.push(
      `${giver.name} pays ${receiver.name} $${amountToPay.toFixed(2)}`
    );

    // Update balances
    giver.balance += amountToPay;
    receiver.balance -= amountToPay;

    if (giver.balance === 0) i++;
    if (receiver.balance === 0) j++;
  }

  return (
    <div>
      <h2>Bill Splitter</h2>
      <div className="d-flex w-100 gap-2">
        <input
          type="text"
          value={name}
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="text"
          value={expense}
          className="form-control"
          onChange={(e) => setExpense(e.target.value)}
          placeholder="Enter Expense Type"
        />
        <input
          type="number"
          className="form-control"
          value={amount}
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="btn btn-success mt-3" onClick={addBudget}>
        Add Expense
      </button>

      <div className="mt-4">
        {budget.map((item, index) => (
          <div key={index} className="d-flex gap-3">
            <h5>{item.name}</h5>
            <h5>{item.expense}</h5>
            <h5>${item.amount}</h5>
          </div>
        ))}
      </div>

      <h3>Total: ${total.toFixed(2)}</h3>
      <h3>Each Person Pays: ${perPersonShare.toFixed(2)}</h3>

      <h3>Who Owes What:</h3>
      {balances.map((b, index) => (
        <h5 key={index}>
          {b.name}{" "}
          {b.balance > 0
            ? `should receive $${b.balance.toFixed(2)}`
            : `owes $${(-b.balance).toFixed(2)}`}
        </h5>
      ))}

      <h3>Settlements:</h3>
      {transactions.map((t, index) => (
        <h5 key={index}>{t}</h5>
      ))}
    </div>
  );
};

export default ExpenseSplitter;
