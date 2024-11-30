import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Doc from "./pages/Document";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/document/:docsID" element={<Doc />} />
      </Routes>
    </Router>
  );
}

export default App;
