import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HelloPage from "./pages/HelloPage";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem" }}>
        <Link to="/">Home</Link> | <Link to="/hello">Hello</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to Finance Copilot</h1>} />
        <Route path="/hello" element={<HelloPage />} />
      </Routes>
    </Router>
  );
}

export default App;
