
import React from "react";
import Home from "./screens/Home";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div>
       <Routes>
            <Route exact path="/" element={<Home/>} />
       </Routes>
      </div>
    </Router>
  );
 
}

export default App;
