import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Doc from "./pages/Document";
import Profile from "./pages/Setting";
import { AuthProvider } from "./Hooks/useAuth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/document/:docsID" element={<Doc />} />
          <Route path="/setting/:d" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
