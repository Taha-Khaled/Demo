import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSendingHandler = (onSending) => {
    const expenseDate = {
      ...onSending,
      id: Math.random().toString(),
    };
    //console.log(expenseDate);
    props.addNewExpense(expenseDate);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSendingData={onSendingHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpenses;
