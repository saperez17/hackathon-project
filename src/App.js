import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "views/Auth";
import Home from "views/Home";
import Login from 'views/Login';
import Signup from "views/Signup";
import AuthContextProvider from 'contexts/AuthContext'

function App() {
  return (
    <Router>
      <AuthContextProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>

        <Route path="/" element={<Auth />} />
      </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
