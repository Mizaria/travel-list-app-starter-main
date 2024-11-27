export default function Item({ item, onDelete, onUpdate }) {
    const itemStyle = item.packed ? { textDecoration: "line-through" } : null;
  
    const handleCheckboxChange = (event) => {
     
      onUpdate(item.id, event.target.checked);
    };
  
    return (
     
      <li style={itemStyle}>
        {item.quantity} {item.description}{" "}
        <button onClick={() => onDelete(item.id)}>Delete</button>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={handleCheckboxChange}
        />
      </li>
     
    );
  }
  