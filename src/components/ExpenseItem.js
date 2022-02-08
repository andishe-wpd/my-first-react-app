import React from "react";
import "./ExpenseItem.css";
//father : app.js

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "care insurance";
  const expenseAmounr = 298.2;
  // return need () if the return parameter is more than 1 line
  return (
    // must all JSX be in one single <div>
    // why? (explain later)
    // here is a JS ENVOIRNMENT not HTML so use className instead class
    <div className="expense-item">
      {/* date cant's use directly it must change to string() */}
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmounr}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
