import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>✅ React App is Working!</h1>
      <p>If you see this message, your React app is successfully deployed.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
