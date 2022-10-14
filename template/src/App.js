import React from "react";
import "./App.css";
import { Head } from "./components/Head";
import { Main } from "./components/Main";
import { Foot } from "./components/Foot";

export default function App() {
  
  return (
    <div className="App">
      <Head />
      <Main />
      <Foot />      
    </div>
  );
}