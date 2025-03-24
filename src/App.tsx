import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LandingPage from "./pages/landingPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import ProfilePage from "./pages/profilePage";
import NotFoundPage from "./pages/notFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signUp" element={<SignUpPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
