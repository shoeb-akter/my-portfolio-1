import React from 'react';
import Particles from 'react-particles-js';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Technology from '../Technology/Technology';
import Contact from '../Contact/Contact';

const Main = () => {
    return (
        <>
      <Particles
        params={{
          particles: {
            number:{
              value: 30,
              density:{
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke:{
                width: 6,
                color: "#ff6347"
              }
            }
          }
        }} 
       />
      <Navbar></Navbar>
      <Header></Header>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Technology></Technology>
      <Contact></Contact>
    </>
    );
};

export default Main;