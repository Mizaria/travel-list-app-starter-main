import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// Initial packing items
const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);


  const handleAddItems = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  const handleDeleteItems = (deleteItemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== deleteItemId));
  };
  const handleDeleteAllItems = (deleteItemId) => {
    setItems([]);
  };
  const handleUpdateItems = (itemId, updatePackedStatus) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId 
          ? { ...item, packed: updatePackedStatus } 
          : item 
      )
    );
  };
  

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} /> 
      
      <PackingList items={items} onDeleteItem={handleDeleteItems} onUpdateItem={handleUpdateItems} onDeleteAllItem={handleDeleteAllItems}/>
      <Stats items={items} />
    </div>
  );
}

export default App;




