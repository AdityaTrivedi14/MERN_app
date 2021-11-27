import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // callAboutPage();
    axios
      .get("http://localhost:5000/logout", { withCredentials: true })
      .then((res) => {
        console.log("Token Passed successfully");
        navigate("/login");
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Logout Page</h1>
    </div>
  );
};

export default Logout;
