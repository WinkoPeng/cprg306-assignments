import Item from "./item.js";

export default function ItemCategory({ category, items }) {    
    items = items.filter((item) => item.category === category);
    return (
        <>
            <h3 className="capitalize text-xl">{category}</h3>
            {items.map((item) => (               
                <Item 
                name={item.name}
                quantity={item.quantity}
                category={item.category} 
                key={item.id} 
                />               
            ))} 
        </>         
    );    
}