import React from "react";
import { useLocation } from "react-router-dom";
import profilepic from "../assets/user.jpg"
interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  companyName: string;
  agency: string;
}

const Dashboard: React.FC = () => {
  const location = useLocation();
  const formData = location.state as FormData; // Extract passed data

  if (!formData) {
    return <h2>No data received!</h2>;
  }

  return (
    <div className="profile-container">
      <div className="profile-content">
      <span className="profile-content-heading">Account Settings</span>
        <div className="profile-personal-info">
        <div className="profile-personal-info-1">
        <img src={profilepic} width={"100px"} alt="profilepic"/>
        <div className="profile-details">
        <p className="profile-details-name">{formData.fullName?formData.fullName:"Marry Doe"}</p>
        <p className="profile-details-email">{formData.email}</p>
        </div>
        </div>
        <div className="profile-personal-info-2">
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum pariatur a autem, laborum porro officiis exercitationem eveniet? Totam eius, alias laboriosam reprehenderit dicta laudantium? Laudantium ipsam adipisci delectus deleniti qui.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
