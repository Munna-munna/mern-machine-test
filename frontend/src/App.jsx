import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import Upload from "./pages/Upload";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/agents"
          element={<Agents />}
        />

        <Route
          path="/upload"
          element={<Upload />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;