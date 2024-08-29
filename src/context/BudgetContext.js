import React, { createContext, useState } from 'react';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addBudget = (budget) => {
    setBudgets([...budgets, budget]);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <BudgetContext.Provider value={{ budgets, expenses, addBudget, addExpense }}>
      {children}
    </BudgetContext.Provider>
  );
};
