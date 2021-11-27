import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [userName, setName] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/about", { withCredentials: true })
      .then((res) => {
        console.log("Token Passed successfully");
        const myData = res.data;
        setName(myData);
        setShow(true);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="homePage d-flex justify-content-center align-items-center">
        <div className="homeInner text-center">
          <p className="homeTitle">Welcome</p>
          <h1 className="homeHeading">{userName.name}</h1>
          <h2 className="homeWelcomeText">
            {show ? "Happy to see you back :)" : "To My MERN App"}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
