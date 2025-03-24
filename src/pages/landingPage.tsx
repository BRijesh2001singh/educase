import "../App.css";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="landingpage-content">
      <h1 className="landingpage-heading">Welcome to PopX</h1>
        <p className="landingpage-para">Build. Innovate. Succeed, Your journey starts here!
        </p>
        <button className="landingpage-signUp-btn" ><Link to="/signUp" style={{"textDecoration":"none","color":"inherit"}}>Create Account</Link></button>
        <button className="landingpage-login-btn"><Link to="/login" style={{"textDecoration":"none","color":"inherit"}}>Already Registered?Login</Link></button>
      </div>
       
    </div>
  )
}

export default LandingPage
