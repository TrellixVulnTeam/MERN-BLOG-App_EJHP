import React from 'react';
import LogIn from './components/LogIn'
import SignUp from './components/SignUp';
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LogIn />} />
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
