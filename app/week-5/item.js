function Item(props) {
    return (
        <li className="pl-5 border mx-80 py-3 mb-5 bg-slate-900 text-center rounded-md">
            <span>{props.name}</span>
            <span>Buy {props.quantity} in {props.category}</span>
        </li>
    );
}
 
export default Item;