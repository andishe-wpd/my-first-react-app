import React from "react";
import "./ExpenseItem.css";
//father : app.js

const ExpenseItem = (props) => {
  // return need () if the return parameter is more than 1 line
  return (
    // must all JSX be in one single <div>
    // why? (explain later)
    // here is a JS ENVOIRNMENT not HTML so use className instead class
    <div className="expense-item">
      {/* date cant's use directly it must change to string() */}
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
