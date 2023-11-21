import React from "react";
import Hospital from "../../assets/images/12242160_4930343.jpg";
const Dashboard = () => {
  const dashboardStyles = {
    fontFamily:"Calibri",
    marginTop: "100px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(1, 1fr)",
    gap: "25px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    color:"#164863"
  };

  return (
    <>
      <div style={dashboardStyles}>
        <img src={Hospital} alt="logo" height={"600px"} width={"850px"} style={{border:"2px solid gray",borderRadius:"25px"}}/>
        <div>
        <h1>Welcome !</h1>
        <p style={{fontSize:'20px',width:"600px"}}>
          At Nalam HealthCare, we
          prioritize not just the health and well-being of our patients but also
          the seamless management of their healthcare journey. Our dedicated
          management system is designed to enhance the overall experience for
          patients, healthcare professionals, and administrators alike.
        </p>
        <h1>Our Services</h1>
        <ul style={{fontSize:'20px'}}>
          <li><p>Gastroenterology</p></li>
          <li><p>Oncology</p></li>
          <li><p>NeuroSurgery</p></li>
          <li><p>Cardiology</p></li>
          <li><p>Orthology</p></li>
          <li><p>ENT Care</p></li>
          <li><p>Emergency and Intensive Care Unit</p></li>
        </ul>
        </div>
      </div>

      <>
        <div
          style={{
            fontFamily:"Calibri", 
            height: "80px",
            width: "100%",
            backgroundColor: "#363A57",
            color:"white",
            marginbottom: "auto",
            paddingTop:"5px"

          }}
        >
          <p style={{paddingLeft:"40%"}}>
          Copyright © 2012 - 2023 TermsFeed®. All rights reserved.
          </p>
        </div>
      </>
    </>
  );
};

export default Dashboard;
