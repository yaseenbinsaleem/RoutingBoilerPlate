import React from "react";
import Router from "./config/router/router";
import NavBar from "./components/navBar/navBar";
import { useParams } from "react-router-dom";

function App() {
  let params = useParams()
  return (
    <>
      <div style={{ margin: "4%" }}>
        <NavBar />
        <Router />
      </div>
    </>
  );
}

export default App;
