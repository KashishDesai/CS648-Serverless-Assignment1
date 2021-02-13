// Import useState and useEffect hooks from React
import React, { useState, useEffect } from "react";

// Import the API category from AWS Amplify
import { API } from "aws-amplify";
import "./App.css";

function App() {
  // Create service calls variable and set to empty String
  const [servicecalls, updateServiceCalls] = useState([]);
  const [nicknames, updateNicknames] = useState([]);
  const [hashtags, updateHashtags] = useState([]);

  // Define function to InstaPostAPI
  async function fetchServiceCalls() {
    const servicecalls = await API.get("instapostapi", "/servicecalls");
    updateServiceCalls(servicecalls);
  }
  async function fetchNicknames() {
    const nicknames = await API.get("instapostapi", "/nicknames");
    updateNicknames(nicknames);
  }
  async function fetchHashtags() {
    const hashtags = await API.get("instapostapi", "/hashtags");
    updateHashtags(hashtags);
  }

  // Call fetchServiceCalls, fetchNicknames & fetchHashtags function when component loads
  useEffect(() => {
    fetchServiceCalls();
    fetchNicknames();
    fetchHashtags();
  }, []);

  return (
    <div className="App">
      <h1>InstaPost Application</h1>
      <div>
        <h2>Service Calls</h2>
        <h5>{servicecalls}</h5>
        <h2>Nicknames</h2>
        {console.log(nicknames)}
        <ol>
          {nicknames.map((nickname) => (
            <li key={nickname}>{nickname}</li>
          ))}
        </ol>
        <h2>Hashtags</h2>
        <ol>
          {hashtags.map((hashtag) => (
            <li key={hashtag}>{hashtag}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
