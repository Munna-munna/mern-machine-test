import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/upload");
      setTasks(res.data.tasks || []);
    } catch (error) {
      console.log(error);
    }
  };

  // ✅ CLEAR EVERYTHING ON LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    setTasks([]); // clear UI state
    navigate("/"); // go to login page
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={{ margin: 0 }}>📋 Distributed Tasks</h2>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => navigate(-1)}
            style={styles.backButton}
          >
            ← Back
          </button>

          {/* 🔴 LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            style={styles.logoutButton}
          >
            Logout
          </button>
        </div>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headRow}>
              <th>Agent</th>
              <th>First Name</th>
              <th>Phone</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="4" style={styles.empty}>
                  No tasks found
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task._id} style={styles.row}>
                  <td>{task.agent?.name || "—"}</td>
                  <td>{task.firstName}</td>
                  <td>{task.phone}</td>
                  <td>{task.notes}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    background: "#f5f7fb",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  backButton: {
    padding: "8px 14px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  logoutButton: {
    padding: "8px 14px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  tableWrapper: {
    background: "#fff",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  headRow: {
    background: "#e5e7eb",
    textAlign: "left",
  },
  row: {
    borderBottom: "1px solid #eee",
  },
  empty: {
    textAlign: "center",
    padding: "20px",
    color: "#888",
  },
};

export default Tasks;