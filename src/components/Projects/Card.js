import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import '../../App.css';

const Card = (props) => {
    const {github, image, live} = props.project;
    return (
        <div className="image mx-3 my-2">
            <img className="image__img" src={image} alt=""/>
            <div className="image__overlay">
                <div className="image__title">
                   <a href={github}>github: <FontAwesomeIcon icon={faGithub} style={{color: 'orangeRed'}}/></a>
                </div>
                <p className="image__description">
                <a href={live}>preview: <FontAwesomeIcon icon={faPlay}  /></a>
                </p>
            </div>
        </div>
    );
};

export default Card;