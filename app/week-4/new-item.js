'use client';

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 m-4 bg-slate-900 text-black max-w-sm w-full rounded-lg">
      <div className="mb-4">
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          max="99"
          onChange={(event) => setQuantity(Number(event.target.value))}
          required
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen food">Frozen Food</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <button type="submit" className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          +
        </button>
      </div>
    </form>
  );
}
