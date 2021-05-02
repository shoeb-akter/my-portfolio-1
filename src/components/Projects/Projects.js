import React from 'react';
import Card from './Card';
import electrogen from '../../images/elecrogen.jpg';
import ridehorizon from '../../images/ridehorizon.jpg';
import footy from '../../images/footy.jpg';
import '../../App.css';

const projects =[
    {
        id: 1,
        image: electrogen,
        github: 'https://github.com/Porgramming-Hero-web-course/electrogen-client',
        live: 'https://electrogen-ebd78.web.app/',
    },
    {
        id: 2,
        image: ridehorizon,
        github: 'https://github.com/Porgramming-Hero-web-course/react-auth-shoeb-akter',
        live: 'https://ride-horizon.web.app/home',
    },
    {
        id: 3,
        image: footy,
        github: 'https://github.com/Porgramming-Hero-web-course/react-router-shoeb-akter',
        live: 'https://competent-bose-b5b1f3.netlify.app/',
    }
]
const Projects = () => {
    return (
        <div id="projects" className="card py-3">
            <h2 className="text-center text-white pt-5">PROJECT<span style={{color: 'tomato'}}>S</span></h2>
            <div className="d-flex row m-2 align-items-center justify-content-center pt-5">
                {
                    projects.map(project=> <Card project={project} key={project.id} className="col-sm-12 "></Card>)
                }
            </div>
        </div>
    );
};

export default Projects;