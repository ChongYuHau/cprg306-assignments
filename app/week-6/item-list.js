'use client';

import React, { useState } from 'react';
import Item from './item.js';


function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');

    const sortItems = (itemsToSort) => {
        const sortedItems = [...itemsToSort];

        sortedItems.sort((a, b) => {
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
        });

        
        return sortedItems;
    };


    const sortedItems = sortItems(items);

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
