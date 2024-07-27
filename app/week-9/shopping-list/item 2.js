const Item = ({ item, onSelect, name, quantity, category }) => {
  return (
    <li
      onClick={() => onSelect(item)}
      className="list-none bg-slate-900 border-1 border-slate-900 p-4 m-2 w-72 cursor-pointer hover:bg-orange-800"
    >
      <p className="font-bold text-lg text-white-400">{name}</p>
      <p className="text-white-400 ">Quantity: {quantity}</p>
      <p className="text-white-400">Category: {category}</p>
    </li>
  );
};

export default Item;
