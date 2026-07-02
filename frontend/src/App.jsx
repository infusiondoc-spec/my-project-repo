

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading message from backend...");

  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        setMessage("Could not connect to backend.");
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="app-container">
      <h1>AWS DevOps Pipeline Project</h1>
      <h2>React Frontend Connected to Express Backend</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;