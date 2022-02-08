import React from "react";
import "./Card.css";

const Card = (props) => {
    const classes = 'card ' +props.className 
  return <div className={classes}>{props.children}</div>;
  // get everything betweeen used qouts <>***<> as a prps.child here
};

export default Card;
