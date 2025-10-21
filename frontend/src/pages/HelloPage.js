import { useEffect, useState } from "react";

function HelloPage() {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadResult(null);
  };

  const handleFileUpload = async () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/upload", {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setUploadResult(result);
    } catch (error) {
      setUploadResult({ error: "Upload failed: " + error.message });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello Page</h1>
      <p>{message || "Loading..."}</p>
      
      <div style={{ marginTop: "30px" }}>
        <h2>Upload Stocks CSV</h2>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          style={{ margin: "10px" }}
        />
        <button
          onClick={handleFileUpload}
          disabled={!file || uploading}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
        
        {uploadResult && (
          <div style={{ marginTop: "20px", textAlign: "left", maxWidth: "800px", margin: "20px auto" }}>
            {uploadResult.error ? (
              <div style={{ color: "red" }}>
                <strong>Error:</strong> {uploadResult.error}
              </div>
            ) : (
              <div style={{ color: "green" }}>
                <strong>Success:</strong> {uploadResult.message}<br/>
                <strong>Stocks uploaded:</strong> {uploadResult.stocks_count}
                <pre style={{ background: "#f5f5f5", padding: "10px", marginTop: "10px" }}>
                  {JSON.stringify(uploadResult.stocks, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HelloPage;
