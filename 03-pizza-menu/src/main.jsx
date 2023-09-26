import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>the app is here</h1>
      <Pizza />
    </div>
  );
}
function Pizza() {
  return <h2>Pizza </h2>;
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
