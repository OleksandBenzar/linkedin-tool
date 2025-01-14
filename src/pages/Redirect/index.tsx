import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getAccessToken = async (code: string) => {
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/api/getAccessToken`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        },
      );

      const data = await response.json();

      if (data.accessToken) {
        localStorage.setItem("linkedin_access_token", data.accessToken);
        setLoading(false);

        navigate("/post", { state: { userId: data.userId } });
      } else {
        setError("Failed to get access token");
        setLoading(false);
        console.error("Failed to get access token:", data);
      }
    } catch (err) {
      setError("Failed to get access token");
      console.error("Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const token = localStorage.getItem("linkedin_access_token");

    if (code && !token && !loading) {
      getAccessToken(code);
    }
  }, []);

  return <h1>{error || "Authentication in progress..."}</h1>;
};

export default Redirect;
