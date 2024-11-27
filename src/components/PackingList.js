import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onUpdateItem, onDeleteAllItem }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDelete={onDeleteItem} 
              onUpdate={onUpdateItem} 
            />
          ))}
        </ul>
  

        <button onClick={onDeleteAllItem} style={{ marginTop: "10px" }}>
          Delete All
        </button>
      </div>
    );
  }
  
