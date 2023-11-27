import { useState } from "react";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Form from "./Form";
import Logo from "./Logo";

export default function App() {
  //Lifting the state UP: state is here as needed by two siblings of this parent
  const [items, setItems] = useState([]);
  // Instead of the idea used Derived State
  //const [numItems, setNumItems] = useState(0);

  function handleAdditems(item) {
    setItems((items) => [...items, item]);
    // setNumItems((num) => num + 1);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleCleartList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items"
    );
    if (confirmed && items.length > 0) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      {/* from the Form where the item is added */}
      <Form onAddItems={handleAdditems} />
      {/* in which the item is shown in UI  */}
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggle={handleToggleItem}
        onClearList={handleCleartList}
      />
      <Stats items={items} />
    </div>
  );
}
