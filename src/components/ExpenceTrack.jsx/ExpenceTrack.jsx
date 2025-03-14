import React, { useState } from "react";

const ExpenceTrack = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [expence, setExpence] = useState([]);
  const handleExpence = () => {
    setExpence([...expence, { name: name, amount: amount }]);
  };
  const total = expence.reduce((sum, item) => sum + Number(item.amount), 0);
  return (
    <div>
      ExpenceTrack
      {/* <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="nAME"
      />
      <input
        type="text"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        placeholder="aMOUNT"
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          handleExpence();
        }}
      >
        Add
      </button>
      {expence.map((item) => {
        return (
          <div className="d-flex">
            <h1>{item.name}</h1>
            <h1>{item.amount}</h1>
          </div>
        );
      })}
      <h1>{total}</h1> */}
    </div>
  );
};

export default ExpenceTrack;
