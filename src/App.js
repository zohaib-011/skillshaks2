import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Panel from './Components/Panel';
import CoursePanel from './Components/CoursePanel';
import TeacherPanel from './Components/TeachersPanel';
import Footer from './Components/footer';
import About from './Components/About';
import ReactorMessage from './Components/ReactorMessage';
import Contact from './Components/contact';
import Course from './Components/course';
import Event from './Components/event';


import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div  >
       <NavBar/>
      {  
      }
       {/* <Panel/> */}
       
       
       <Router>
        <NavBar />
        <Routes>
         
          <Route exact path="/home" element={  
            <>
            <HeroSection/>
           
            {/* <Event/> */}
            
            <ReactorMessage/>
            <CoursePanel/>
       <TeacherPanel/>
      
       
            </>
             
          } />
          
          <Route exact path="/about" element={ 
         <About/>  
          } />
           <Route exact path="/event" element={ 
         <Event/>  
          } />
           <Route exact path="/contact" element={ 
         <Contact/>  
          } />
            <Route exact path="/course" element={ 
         <Course/>  
          } />
           
        </Routes>
        <Footer/>
        </Router>
         
    </div>
  );
}

export default App;
