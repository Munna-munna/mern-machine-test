import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <h2>MERN Machine Test</h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="container">
        <h1>Dashboard</h1>

        <div className="dashboard-grid">
          <div className="card">
            <Link to="/agents">Manage Agents</Link>
          </div>

          <div className="card">
            <Link to="/upload">Upload CSV</Link>
          </div>

          <div className="card">
            <Link to="/tasks">View Tasks</Link>
          </div>
        </div>
      </div>

      {/* LOGOUT BUTTON (FLOATING CORNER) */}
      <button className="logout-float" onClick={logout}>
        Logout
      </button>
    </>
  );
}

export default Dashboard;