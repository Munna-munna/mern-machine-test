import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Agents() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const createAgent = async () => {
    try {
      await API.post("/agents", form);
      alert("Agent Created");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="agent-container">
      <h2>Add Agent</h2>

      <div className="form-group">
        <input
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Mobile"
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>

      {/* BUTTONS SECTION */}
      <div className="button-row">
        <button className="add-btn" onClick={createAgent}>
          Add Agent
        </button>

        <button className="back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Agents;