// src/pages/Home.js
import React, { useContext } from 'react';
import BudgetOverview from '../components/BudgetOverview';
import ExpenseSummary from '../components/ExpenseSummary';
import { BudgetContext } from '../context/BudgetContext';

const Home = () => {
  const { budgets, expenses } = useContext(BudgetContext);

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <BudgetOverview budgets={budgets} />
      <ExpenseSummary expenses={expenses} />
      {/* Add more dashboard content here */}
    </div>
  );
};

export default Home;
