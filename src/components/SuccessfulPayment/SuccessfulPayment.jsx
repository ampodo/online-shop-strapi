import React from "react";
import { useNavigate } from "react-router-dom";
import "./Successfulstyles.css";

const SuccessfulPayment = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="payment-info">
      <h1>Payment successful!</h1>
      <button className="return-action-btn" onClick={handleClick}>
        RETURN HOME
      </button>
    </div>
  );
};

export default SuccessfulPayment;
