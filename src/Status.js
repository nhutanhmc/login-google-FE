import React from "react";
import "./Status.css"; // Import CSS file

const Status = () => {
  const accessToken = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  return (
    <div className="status-container">
      <div className="status-box">
        <h4 className="status-title">User Status</h4>
        <table className="status-table">
          <tbody>
            <tr>
              <td className="label">Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td className="label">Role:</td>
              <td>{role}</td>
            </tr>
            <tr>
              <td className="label">Access Token:</td>
              <td className="token-cell">{accessToken}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Status;
