import './App.css';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import React from "react";
import Update from './update';
import Add from './add';
import List from'./list';


export default function App() {
  return (
    
  
            
        <Router>
          <Routes>
        <Route exact path="/" element={<List/>}/>
        <Route exact path="/add" element={<Add/>}/>
        <Route exact path="/update/:id" element={<Update/>}/>
        </Routes>
        </Router>
      
    
   
  );
}
