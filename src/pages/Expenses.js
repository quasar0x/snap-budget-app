import React, { useState } from 'react';

const Expenses = () => {
  const [expense, setExpense] = useState({ category: '', amount: '', date: '' });
  const [categories] = useState(['Rent', 'Groceries', 'Utilities', 'Entertainment']); // Mock categories

  // Handle changes to the input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Logged expense:', expense);

    // Basic validation: Ensure category is selected and amount is positive
    if (!expense.category || expense.amount <= 0 || !expense.date) {
      alert('Please ensure all fields are filled out correctly.');
      return;
    }

    // In a real app, this is where you'd send the data to the backend or global state
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6">Log Expense</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            name="category"
            value={expense.category}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
            required
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            value={expense.amount}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={expense.date}
            onChange={handleInputChange}
            className="p-2 border rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-green-500 text-white rounded"
        >
          Log Expense
        </button>
      </form>
    </div>
  );
};

export default Expenses;
