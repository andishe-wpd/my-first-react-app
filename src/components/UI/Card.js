import React from "react";
import "./Card.css";

const Card = (props) => {
  // برای مسله استایلینگ باید تمام نام کلاس های کارت را به کامپوننت اصلی پاس بدیم
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
  // get everything betweeen used qouts <>***<> as a prps.child here
};

export default Card;
