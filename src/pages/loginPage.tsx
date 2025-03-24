import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
interface FormData{
  email:string;
  password:string;
  }
const LoginPage = () => {
    const [formData, setFormData] = useState<FormData>({
      email: "",
      password: "",
    });
    const navigate=useNavigate();  
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    navigate("/profile",{state:formData});
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
    return (
      <div className="login-container">
        <div className="login-content">
        <h1>Signin to your PopX account</h1>
        <p>Welcome back !</p>
          <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>
              Full Name<span className="required">*</span>
            </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-wrapper">
            <label>
              Password<span className="required">*</span>
            </label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-btn">Login</button>
          </form>
          </div> 

      </div>
    )
  }
  
  export default LoginPage;
  