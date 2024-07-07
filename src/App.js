import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import AddTodo from './Pages/AddTodo';
import Home from './Pages/Home';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/add-todo' element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
