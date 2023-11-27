export default function Stats({ items }) {
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
