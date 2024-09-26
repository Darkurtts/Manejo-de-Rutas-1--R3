import React from "react";
import { Link } from "react-router-dom";

function HomePage({ tasks }) {
  return (
    <div>
      <h1 className="mb-4">Lista de Tareas</h1>
      {tasks.length === 0 ? (
        <p className="alert alert-warning">No hay tareas disponibles.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              <Link to={`/task/${index}`}>
                <h5>{task.title}</h5>
                <p>{task.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;