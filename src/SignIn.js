import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./SignIn.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Redirect to Google OAuth URL
    window.location.href = "https://baitapdeploy-production.up.railway.app/staffsRouter/auth/google";
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h4 className="signin-title">Sign In</h4>

        <div className="google-btn" onClick={handleGoogleLogin}>
          <div className="google-icon">
            <FcGoogle />
          </div>
          <h5 className="google-btn-text">Sign In with Google</h5>
        </div>
      </div>
    </div>
  );
}
