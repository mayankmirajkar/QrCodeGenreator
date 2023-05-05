import React from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";

const ShowQR = () => {
  const navigate = useNavigate();

  const handleGo = () => {
    navigate("/showprofile");
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          margin: "0px",
          padding: "50px 50px 50px 50px",
          left: "500px",
          top: "150px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <QRCode
          className="qr-code"
          style={{
            width: "400px",
            height: "400px",
            padding: "0 0 30px 0",
          }}
          value={"http://localhost:3000/showprofile"}
        />
        <button
          onClick={handleGo}
          style={{
            background: "none",
            marginRight: "50px",
            marginTop: "10px",
            marginLeft: "30px",
            fontSize: "15px",
            borderRadius: "10px",
            padding: "5px",
            cursor: "pointer",
            height: "40px",
          }}
        >
          Go to profile
        </button>
      </div>
    </>
  );
};

export default ShowQR;
