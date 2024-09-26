import React from "react";
import { useParams } from "react-router-dom";

function TaskDetailPage({ tasks }) {
  const { taskId } = useParams();
  const task = tasks[taskId];

  if (!task) {
    return <p className="alert alert-danger">Tarea no encontrada.</p>;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title">{task.title}</h1>
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          <strong>Fecha de Creación:</strong> {task.creationDate}
        </p>
        <p className="card-text">
          <strong>Estado:</strong> {task.completed ? "Completada" : "Incompleta"}
        </p>
      </div>
    </div>
  );
}

export default TaskDetailPage;