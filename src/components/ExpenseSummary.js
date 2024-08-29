// src/components/ExpenseSummary.js
import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Expense Summary</h2>
      <p className="text-lg">Total Expenses This Month: <span className="font-bold">${totalExpenses}</span></p>
      {/* Add more detailed summaries or charts as needed */}
    </div>
  );
};

export default ExpenseSummary;
