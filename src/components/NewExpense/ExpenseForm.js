import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //States
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");

  //records
  let expenseData = {
    title: title,
    amount: amount,
    date: new Date(date),
    id: Math.floor(Math.random() * 10 + 1),
  };
  //Handlers
  const titleHandler = (event) => {
    settitle(event.target.value);
  };
  const amountHandler = (event) => {
    setamount(event.target.value);
  };
  const dateHandler = (event) => {
    setdate(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(expenseData);
    settitle("");
    setamount("");
    setdate("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>new expense</label>
          <input type="text" onChange={titleHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            onChange={amountHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
