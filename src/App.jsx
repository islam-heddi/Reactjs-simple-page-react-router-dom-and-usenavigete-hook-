
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home";
import About from "./About"; 

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
