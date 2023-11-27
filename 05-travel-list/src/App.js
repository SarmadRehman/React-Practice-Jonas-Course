import { useState } from "react";

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
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState();
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    //for the scenario when there isn't anything IN description it checks the submission
    if (!description) return;
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 Trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem, onToggle }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Ading Items to Your Packing List 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round(numPacked / numItems);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go plan ✈"
          : `💼 You have ${numItems} items in your List, and you already packed
        ${numPacked}  (${percentage}%)`}
      </em>
    </footer>
  );
}
