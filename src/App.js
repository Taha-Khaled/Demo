import { React, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV show",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [data, setData] = useState(DUMMY_EXPENSES);
  const addNewExpenseHandler = (addNewExpense) => {
    console.log(addNewExpense);
    setData((prevExpenses) => {
      return [addNewExpense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpenses addNewExpense={addNewExpenseHandler} />
      <Expenses items={data} />
    </div>
  );
};

export default App;
