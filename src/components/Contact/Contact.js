import React from 'react';
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const sendEmail = e =>{
        e.preventDefault();

        emailjs.sendForm('service_suz8v2i', 'template_yr5aa7w', e.target , 'user_Jp72TnO0MeTplha74b7pA')
        .then(result=>{
            console.log(result.text)
        },
        error=>{
            console.log(error.text)
        }
        );
        e.target.reset()
    }

    return (
        <div id="email">
            <h3 className="contact">CONTACT ME</h3>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-gorup mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-gorup pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-gorup pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-gorup pt-2 mx-auto">
                           <textarea className="form-control" name="message" id="" cols="30" placeholder="Your Message" rows="8"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-danger" value="Send Message" />
                        </div>
                    </div>
                </form>
                <div className="py-5 text-center">
                <a className="mx-3" target="_blank" href="https://github.com/shoeb-akter"> <FontAwesomeIcon icon={faGithub} style={{color: 'orangeRed', fontSize: '3rem'}}/></a>
                <a className="mx-3" target="_blank" href="https://www.linkedin.com/in/md-shoeb-akter-a95aa7202/"><FontAwesomeIcon icon={faLinkedin} style={{color: 'whiteSmoke', fontSize: '3rem'}}/></a>
                <a className="mx-3" target="_blank" href="https://www.facebook.com/shoeb.akter.581/"> <FontAwesomeIcon icon={faFacebook} style={{color: 'skyBlue', fontSize: '3rem'}}/></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;