import React, { useState, useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const Budget = () => {
  const [categories, setCategories] = useState([{ name: '', amount: 0 }]);
  const { addBudget } = useContext(BudgetContext);

  const handleInputChange = (index, event) => {
    const values = [...categories];
    if (event.target.name === 'name') {
      values[index].name = event.target.value;
    } else if (event.target.name === 'amount') {
      values[index].amount = event.target.value;
    }
    setCategories(values);
  };

  const handleAddCategory = () => {
    setCategories([...categories, { name: '', amount: 0 }]);
  };

  const handleRemoveCategory = (index) => {
    const values = [...categories];
    values.splice(index, 1);
    setCategories(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBudget(categories);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-6">Create/Edit Budget</h1>
      <form onSubmit={handleSubmit}>
        {categories.map((category, index) => (
          <div key={index} className="flex mb-4">
            <input
              type="text"
              name="name"
              placeholder="Category Name"
              value={category.name}
              onChange={(event) => handleInputChange(index, event)}
              className="mr-4 p-2 border rounded w-1/2"
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={category.amount}
              onChange={(event) => handleInputChange(index, event)}
              className="mr-4 p-2 border rounded w-1/4"
              required
              />
              <button
                type="button"
                onClick={() => handleRemoveCategory(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddCategory}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Add Category
          </button>
          <button
            type="submit"
            className="ml-4 p-2 bg-green-500 text-white rounded"
          >
            Save Budget
          </button>
        </form>
      </div>
    );
  };
  
  export default Budget;
  