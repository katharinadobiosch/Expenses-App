import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Beige Carpet",
        amount: 399.95,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "Beige Parasol",
        amount: 79.95,
        date: new Date(2021, 7, 12),
    },
    {
        id: "e3",
        title: "Beige Blanket",
        amount: 89.95,
        date: new Date(2021, 7, 28),
    },
    {
        id: "e4",
        title: "Beige Bikini",
        amount: 119.95,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
        // console.log("In App.js");
        // console.log(expense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
