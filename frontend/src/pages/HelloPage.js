import { useEffect, useState } from "react";

function HelloPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching message:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello Page</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default HelloPage;
