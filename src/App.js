import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskDetailPage from "./pages/TaskDetailPage";
import CreateTaskPage from "./pages/CreateTaskPage";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-danger bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Lista de Tareas</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/create">Crear Tarea</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<HomePage tasks={tasks} />} />
            <Route path="/task/:taskId" element={<TaskDetailPage tasks={tasks} />} />
            <Route path="/create" element={<CreateTaskPage setTasks={setTasks} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;