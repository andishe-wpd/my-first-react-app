import React from "react";
import "./ExpenseItem.css";
//father : app.js

const ExpenseItem = () => {
  // return need () if the return parameter is more than 1 line
  return (
    // must all JSX be in one single <div>
    // why? (explain later)
    // here is a JS ENVOIRNMENT not HTML so use className instead class
    <div className="expense-item">
      <div>Date</div>
      <div className="expense-item__description">
        <h2>Title</h2>
        <div className="expense-item__price">Amount</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
