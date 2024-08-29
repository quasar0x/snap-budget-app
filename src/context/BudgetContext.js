// src/context/BudgetContext.js
import React, { createContext, useState } from 'react';
import { mockBudget, mockExpenses } from '../data/mockData';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState(mockBudget);
  const [expenses, setExpenses] = useState(mockExpenses);

  // Add functions to update budgets and expenses as needed

  return (
    <BudgetContext.Provider value={{ budgets, setBudgets, expenses, setExpenses }}>
      {children}
    </BudgetContext.Provider>
  );
};
