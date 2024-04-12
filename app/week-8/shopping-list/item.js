export default function Item({ name, quantity, category, onSelect }) {

    //handle the item click and pass the selected item name into onSelect function
    const handleClick = ({name}) => {
        onSelect({name});
    };

    return (
        <li onClick={() => handleClick({name})} className="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="text-sm">Buy {quantity} in {category}</div>    
        </li>      
    );
  }