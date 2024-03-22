function Item({ item, onSelect}) {
  const handleClick = () => {
    onSelect(item);
  }
  return (
    <div
    onClick={handleClick}
    style={{ cursor: 'pointer' }} 
    className="p-2 m-4 bg-indigo-400 max-w-sm rounded-md drop-shadow-lg">
        <p>{item.name}</p> 
        <p>Buy {item.quantity} in {item.category}</p>
    </div>
  );
}

export default Item;