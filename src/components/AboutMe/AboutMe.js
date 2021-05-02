import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import shoeb from '../../images/shoeb1.png';
import resume from '../../files/Md.Shoeb Akter-Resume (1).pdf';

const AboutMe = () => {
    return (
        <section id="aboutme" className="about-me pb-0 pb-md-5 py-5">
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-5 mb-4 m-md-0">
                    <img className="img-fluid" src={shoeb} alt=""/>
                </div>
                <div className="col-md-7 align-self-center">
                    <h1>ABOUT <span style={{color:'tomato'}}>ME</span></h1>
                    <p className="text-secondary desc my-5">
                    I am Shoeb, a web designer/developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web design/development since late 2020. <br/>
                    as a tech-savvy, I'm very passionate about my work. I try to learn new technologies to keep pace with the tech race.
                    </p>
                    <a href={resume} download="Resume"><button className="btn-about">CHECK RESUME</button></a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutMe;