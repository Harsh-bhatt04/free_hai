// import { useState } from 'react';
// import PrivateRoutes from './utils/PrivateRoutes';
import './App.css';
import Banner from './components/Banner';
import Courses from './components/Courses';
import Motivefield from './components/Motivefield';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ReactCourses from './components/ReactCourses';
import Dsacourses from './components/DsaCourses';
import FrontEnd from './components/FrontEnd';
import MernStack from './components/MernStack';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import './mediaQuerry.css';
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [theme, settheme] = useState("light-theme");
  const [text, settext] = useState("Dark");
  const [menu, setmenu] = useState(' ');


  const menuToggle = () => {
    if (menu === ' ') {
      setmenu('active');
    }
    else {
      setmenu(' ');
    }
  }


  const changeText = () => {
    if (text === 'Dark') {
      settext('Light');
    }
    if (text === 'Light') {
      settext('Dark');
    }
  }


  const toggleTheme = () => {
    if (theme === 'light-theme') {
      settheme('dark-theme');
    }
    if (theme === 'dark-theme') {
      settheme('light-theme');
    }
  }


  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <Router>

      <div className={`App ${theme}`}>

        <Banner />

        <Navbar toggleTheme={toggleTheme} 
          changeText={changeText} 
          menuToggle={menuToggle} 
          menu={menu} />

        <Routes>

          <Route path="/" element={<Motivefield />}></Route>

          <Route path="/Sign-up" element={<Signup />}></Route>

          <Route path="/Login" element={<Login/>}></Route>


            <Route path='/Courses' element={<Courses />}></Route>

            
            <Route path='/Courses/ReactCourses' element={<ReactCourses />}></Route>

            <Route path='/Courses/MernStack' element={<MernStack />}></Route>

            <Route path='/Courses/Dsacourses' element={<Dsacourses />}></Route>

            <Route path='/Courses/FrontEnd' element={<FrontEnd />}></Route>

        </Routes>

        <Footer />

      </div>

    </Router>

  );
}

export default App;
