'use client';
import React, { useState } from 'react';
import Item from './item.js';
import Items from './items.json';

function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const sortItems = (a, b) => {
      if (sortBy === 'name') {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
      } 
      
      else if (sortBy === 'category') {
          if (a.category < b.category) return -1;
          if (a.category > b.category) return 1;
          return 0;
      }
      return 0;
    };

    const sortedItems = [...Items].sort(sortItems);


    return (
        <div>
            <div className="sort-buttons">
                <button
                    className="bg-orange-500 p-1 m-1 w-28"
                    onClick={() => setSortBy('name')}
                    
                >
                    Sort by Name
                </button>
                <button
                    className="bg-orange-500 p-1 m-1 w-28"
                    onClick={() => setSortBy('category')}
                    
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
