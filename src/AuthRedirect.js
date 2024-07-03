import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AuthRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      // Check if URL contains accessToken, refreshToken, and role parameters
      const urlParams = new URLSearchParams(window.location.search);
      const accessToken = urlParams.get("accessToken");
      const refreshToken = urlParams.get("refreshToken");
      const role = urlParams.get("role");
      const name = urlParams.get("name");

      if (accessToken && refreshToken) {
        // Store tokens and role in localStorage
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("role", role);
        localStorage.setItem("name", name);

        // Navigate to status page
        navigate("/status");
      }
    };

    // Call the function to handle Google callback
    handleGoogleCallback();
  }, [navigate, location]);

  return (
    <div className="flex h-full w-full items-center justify-center px-2">
      <div className="flex-col items-center">
        <h4 className="text-4xl font-bold">Authenticating...</h4>
      </div>
    </div>
  );
}
