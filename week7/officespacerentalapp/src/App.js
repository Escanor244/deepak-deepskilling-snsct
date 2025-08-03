import React from "react";

const App = () => {
  const heading = "Office Space Rentals";

  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai", Img: "https://images.pexels.com/photos/59924/pexels-photo-59924.jpeg" },
    { Name: "Regus", Rent: 65000, Address: "Bangalore", Img: "https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg" },
    { Name: "WeWork", Rent: 55000, Address: "Hyderabad", Img: "https://images.pexels.com/photos/1115225/pexels-photo-1115225.jpeg" },
    { Name: "Smartworks", Rent: 70000, Address: "Mumbai", Img: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg" }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{heading}</h1>
      <div>
        {officeList.map((office, index) => {
          const rentColor = office.Rent <= 60000 ? "red" : "green";
          return (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "8px"
              }}
            >
              <img src={office.Img} alt="Office Space" width="150" height="100" />
              <h2>Name: {office.Name}</h2>
              <h3 style={{ color: rentColor }}>Rent: Rs. {office.Rent}</h3>
              <h3>Address: {office.Address}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
