
import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home";
import About from "./About"; 
import Login from "./Login";
import Register from "./Register";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
