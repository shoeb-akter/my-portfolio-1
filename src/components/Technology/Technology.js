import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faCode } from "@fortawesome/free-solid-svg-icons";
const Technology = () => {
    return (
        <section className="about-me pb-0 pb-md-5 ">
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-6 col-sm-12 my-4 m-md-0 embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item"  width="460" height="245" src="https://www.youtube.com/embed/7CqJlxBYj-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-md-6 col-sm-12 pl-5 my-3">
                    <h1><span style={{color:'tomato'}}>TECHNOLOGY</span> I USE</h1>
                    <div >
                        <h4><FontAwesomeIcon icon={faFileCode} style={{color: 'blue'}}/> Front-End Development</h4>
                        <ul className="text-primary">
                            <li>HTML/CSS, JavaScript for static sites</li>
                            <li>React.js, Redux, Firebase for interactive sites</li>
                            <li>Material UI, Semantic UI, Email.js, Bootstrap as CSS Framework</li>
                        </ul>
                    </div>
                    <div className="my-3">
                    <h4><FontAwesomeIcon icon={faCode} style={{color: 'orange'}}/> Back-End Development</h4>
                        <ul className="text-warning">
                            <li>Node.js , Express & mongoDB for handeling database .</li>
                            <li>JWT, Firebase Admin & Authenticaton.</li>
                            <li>Tools like VS code, Stripe,Heroku,Netlify & github.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Technology;