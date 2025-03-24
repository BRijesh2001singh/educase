import { useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";
interface FormData{
fullName:string;
phoneNumber:string;
email:string;
password:string;
companyName:string;
agency:string;
}

const SignUpPage = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber:"",
    email: "",
    password: "",
    companyName: "",
    agency: "yes",
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
    <div className="signup-container">
      <div className="form-container">
        <h1>Create your PopX account</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>
              Full Name<span className="required">*</span>
            </label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="input-wrapper">
            <label>
              Phone Number<span className="required">*</span>
            </label>
            <input type="string" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="input-wrapper">
            <label>
              Email address<span className="required">*</span>
            </label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-wrapper">
            <label>
              Password<span className="required">*</span>
            </label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="input-wrapper">
            <label>
              Company Name<span className="required">*</span>
            </label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>

          {/* Radio Buttons */}
          <div className="radio-group">
            <label>Are you an Agency?<span className="required">*</span></label>
            <div className="radio-options">
              <label className="radio-container">
              <input type="radio" name="agency" value="yes" checked={formData.agency === "yes"} onChange={handleChange} />
              <span className="radio-checkmark"></span> Yes
              </label>
              <label className="radio-container">
              <input type="radio" name="agency" value="no" checked={formData.agency === "no"} onChange={handleChange} />
              <span className="radio-checkmark"></span> No
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
