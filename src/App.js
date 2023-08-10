
import React from "react";
import Home from "./screens/Home";
import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div>
       <Navbar />
      </div>
    </Router>
  );
 
}

export default App;
