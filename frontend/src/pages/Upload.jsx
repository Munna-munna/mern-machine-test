import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Upload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await API.post("/upload", formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload CSV</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {/* BUTTONS */}
      <div className="button-row">
        <button className="upload-btn" onClick={uploadFile}>
          Upload
        </button>

        <button className="back-btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Upload;