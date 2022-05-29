import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { activeState } from '../state.js';
import Navbar from '../component/Navbar.js';
import emailGif from '../public/gif/email.gif';
import facebookGif from '../public/gif/facebook.gif';
import upworkImage from '../public/gif/upwork.svg';
import skypeImage from '../public/gif/skype.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMessage } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const Contact = () => {

    const [active, setActive] = useRecoilState(activeState);
    useEffect(() => {
        setActive('contact');
    }, [])

    return (
        <>
            <Navbar />
            <div className="container-fluid" id='contact-container'>
                <div className="row p-0 m-0 mx-auto my-5 w-50 align-items-center justify-content-center">
                    <div className="col-auto">
                        <img src={emailGif.src} alt="" id="gif" />
                    </div>
                    <div className="col">
                        <h4>Email</h4>
                        <p>Email is very popular for everyone. If you want to contact me by email, here is my email:
                            <span id="hight-light" className="mx-2">
                                <FontAwesomeIcon icon={faEnvelope} /> hoaian412003@gmail.com <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row p-0 m-0 mx-auto my-5 w-50 align-items-center justify-content-center">
                    <div className="col-auto">
                        <img src={facebookGif.src} alt="" id="gif" />
                    </div>
                    <div className="col">
                        <h4>Facebook</h4>
                        <p>Facebook is very popular in my country. I use it very often. Here is my facebook link:
                            <span id="hight-light" className="mx-2">
                                <FontAwesomeIcon icon={faMessage} className="mx-1" />
                                https://www.facebook.com/startbiss.tran
                                <FontAwesomeIcon icon={faMessage} className="mx-1" />
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row p-0 m-0 mx-auto my-5 w-50 align-items-center justify-content-center">
                    <div className="col-auto">
                        <img src={upworkImage.src} alt="" id="gif" />
                    </div>
                    <div className="col">
                        <h4>Upwork</h4>
                        <p>Upwork is the first platform which is my chosen for become freelancer. Here is my profile in upwork:
                            <span id="hight-light" className="mx-2">
                                https://www.upwork.com/freelancers/~01996dc18898c5b12d
                            </span>
                        </p>
                    </div>
                </div>
                <div className="row p-0 m-0 mx-auto my-5 w-50 align-items-center justify-content-center">
                    <div className="col-auto">
                        <img src={skypeImage.src} alt="" id="gif" />
                    </div>
                    <div className="col">
                        <h4>Skype</h4>
                        <p>Skype is my main application for work but i don't check it usally. Here is my email on Skype
                            <span id="hight-light" className="mx-2">
                                <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
                                hoaian412003@gmail.com
                                <FontAwesomeIcon icon={faEnvelope} className="mx-1" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;

