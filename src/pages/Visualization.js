import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const mockData = {
  budget: [
    { category: 'Rent', amount: 1000 },
    { category: 'Groceries', amount: 300 },
    { category: 'Utilities', amount: 150 },
    { category: 'Entertainment', amount: 200 },
  ],
  expenses: [
    { category: 'Rent', amount: 1000 },
    { category: 'Groceries', amount: 250 },
    { category: 'Utilities', amount: 100 },
    { category: 'Entertainment', amount: 150 },
  ]
};

const Visualization = () => {
  const categories = mockData.budget.map(item => item.category);
  const budgetAmounts = mockData.budget.map(item => item.amount);
  const expenseAmounts = categories.map(category => {
    const expense = mockData.expenses.find(e => e.category === category);
    return expense ? expense.amount : 0;
  });

  const pieData = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses',
        data: expenseAmounts,
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
      },
    ],
  };

  const barData = {
    labels: categories,
    datasets: [
      {
        label: 'Budgeted',
        data: budgetAmounts,
        backgroundColor: '#36a2eb',
      },
      {
        label: 'Spent',
        data: expenseAmounts,
        backgroundColor: '#ff6384',
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6">Spending Visualization</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Spending by Category</h2>
        <Pie data={pieData} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Budget vs. Actual Spending</h2>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default Visualization;
