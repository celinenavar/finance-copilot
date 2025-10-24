import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import HelloPage from "./pages/HelloPage";
import Dashboard from "./pages/Dashboard.js";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/hello" element={<HelloPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
