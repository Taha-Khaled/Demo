import { React, useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  /*const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });*/

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    //setUserInput({ ...userInput, title: event.target.value });
    //setUserInput((prevState) => {
    //   return { ...userInput, title: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    //setUserInput({ ...userInput, amount: event.target.value });
    // setUserInput((prevState) => {
    //    return { ...userInput, amount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    //setUserInput({ ...userInput, date: event.target.value });
    // setUserInput((prevState) => {
    //    return { ...userInput, date: event.target.value };
    //   });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSendingData(expenseData);
    //console.log(expenseData);
    setTitle("");
    setDate("");
    setAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
