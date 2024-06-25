'use client';

import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item.js";
import itemsData from "./items.json";


function Page() {
    const [items, setItems] = useState(itemsData);

    const AddItem = (newItem) => {
        setItems([...items, newItem]);
    };
    
    return (
        <main className="max-w-screen-lg mx-auto p-4">
            <h1 className="text-center text-3xl font-bold my-4">Shopping List</h1>
            <NewItem onAddItem={AddItem} /> {}
            <ItemList items={items} /> {}
        </main>
    );
}
 
export default Page;