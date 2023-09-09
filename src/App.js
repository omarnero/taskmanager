import {Route, BrowserRouter as Router, Routes  } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/SignIn";
import LoginPage from "./pages/Login/LoginPage";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/tasks" element={<Tasks />}/>
        </Routes>
        <ToastContainer />
      </Router>
  );
}

export default App;
