//father : app.js
import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// props is our way to passing data to children
const ExpenseItem = (props) => {
  // return need () if the return parameter is more than 1 line
  return (
    // must all JSX be in one single <div>
    // why? (explain later)
    // here is a JS ENVOIRNMENT not HTML so use className instead class
    // Card is a custom component 
    // برای مسله استایلینگ باید تمام نام کلاس های کارت را به کامپوننت اصلی پاس بدیم
      <Card className="expense-item">
        {/* cant use custom componrent as a wrapper */}
        {/* date cant's use directly it must change to string() */}
        {/* these items will be Card props.children */}
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
  );
};

export default ExpenseItem;
