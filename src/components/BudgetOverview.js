// src/components/BudgetOverview.js
import React from 'react';

const BudgetOverview = ({ budgets }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Current Budgets</h2>
      <ul>
        {budgets.map((budget) => (
          <li key={budget.category} className="flex justify-between py-1">
            <span>{budget.category}</span>
            <span>${budget.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetOverview;
