import React, { useState } from "react";
import LandingScreen from "./components/LandingScreen";
import Bouquet from "./components/Bouquet";
import MessageCard from "./components/MessageCard";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [stage, setStage] = useState("landing");

  return (
    <>
      {stage === "landing" && <LandingScreen onOpen={() => setStage("bouquet")} />}
      {stage === "bouquet" && (
        <>
          <Confetti />
          <Bouquet onShowMessage={() => setStage("message")} />
        </>
      )}
      {stage === "message" && <MessageCard />}
    </>
  );
}

export default App;

