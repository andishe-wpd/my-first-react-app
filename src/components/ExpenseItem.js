import React from "react";

//father : app.js

const ExpenseItem = () => {
  // return need () if the return parameter is more than 1 line
  return (
    // must all JSX be in one single <div>
    // why? (explain later)
    <div>
      <div>Date</div>
      <h2>Title</h2>
      <div>Amount</div>
    </div>
  );
};

export default ExpenseItem;
