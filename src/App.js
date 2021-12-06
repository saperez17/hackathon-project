import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "views/Landing";
import ContentFeed from "views/ContentFeed";
import Login from "components/Login";
import Signup from "components/Signup";
import AuthContextProvider from "contexts/AuthContext";
import CitySelector from "components/CitySelector";
import Dashboard from "views/Dashboard";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/home" element={<ContentFeed />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
