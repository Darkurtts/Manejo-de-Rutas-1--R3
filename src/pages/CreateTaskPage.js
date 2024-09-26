import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTaskPage({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      completed,
      creationDate: new Date().toLocaleDateString(),
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    navigate("/");
  };

  return (
    <div>
      <h1 className="mb-4">Crear Nueva Tarea</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Título:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Descripción:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <label className="form-check-label">Completada</label>
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
      </form>
    </div>
  );
}

export default CreateTaskPage;