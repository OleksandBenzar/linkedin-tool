import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Post = () => {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const { state } = useLocation();

  const handlePost = async () => {
    const accessToken = localStorage.getItem("linkedin_access_token");

    if (!accessToken) {
      alert("You must log in first!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/postToLinkedIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessToken: accessToken,
          content: content,
          userId: state.userId,
        }),
      });

      const data = await response.json();
      if (data.id) {
        setStatus("Post successful");
        console.log("Post successful:", data);
      } else {
        setStatus("Post failed");
        console.error("Post failed:", data);
      }
    } catch (err) {
      setStatus("Error posting to LinkedIn");
      console.error("Error posting to LinkedIn:", err);
    }
  };

  return (
    <div className="post-container">
      <h1>Make a Post</h1>
      {status && <p>{status}</p>}
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default Post;
