import React, { useEffect } from "react";
import { CLIENT_ID, REDIRECT_URI, SCOPE } from "../../constants/linkedin";

const Home = () => {
  const linkedInAuthURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

  useEffect(() => {
    localStorage.removeItem("linkedin_access_token");
  }, []);

  return (
    <div>
      <h1>Login to LinkedIn</h1>
      <a href={linkedInAuthURL}>Login with LinkedIn</a>
    </div>
  );
};

export default Home;
