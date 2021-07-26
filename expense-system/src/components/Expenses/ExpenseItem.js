import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  //Array deconstructor assigned to a const,
  //the first element is the current value,
  //the second is the new set value.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    //Pass new value with argument in the above second value
    //of array deconstructor
    setTitle('updated');
  };

  //When calling the function within the onClick on line 20
  //don't need the () otherwise it will call when it is parsed
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
