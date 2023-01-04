import React, { useState, useEffect } from "react";
import "../css/Sidemenu.css";

function Sidemenu() {
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("text-davinci-003");
  useEffect(() => {
    localStorage.setItem("currentModel", "text-davinci-003");
    getEngines();
  }, []);

  function changeModel(e) {
    setCurrentModel(e.target.value);
    localStorage.clear();
    localStorage.setItem("currentModel", currentModel);
  }
  function getEngines() {
    fetch("http://127.0.0.1:8000/api/openai")
      .then((res) => res.json())
      .then((data) => setModels(data.models)); //
  }

  return (
    <aside className="sidemenu">
      <div class="side-menu-button">
        <span>+</span>
        New Chat
      </div>

      <div>
        <select onChange={changeModel} className="models">
          {models.map((model, index) => (
            <option key={model.id} value={model.id}>
              {model.id}
            </option>
          ))}
        </select>
      </div>
    </aside>
  );
}

export default Sidemenu;
