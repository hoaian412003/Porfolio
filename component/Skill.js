import React, { useEffect } from 'react';
import Navbar from './Navbar.js';
import { useRecoilState } from 'recoil'
import { activeState } from '../state.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import javascript from '../public/gif/javascript.gif';
import python from '../public/gif/python.gif';
import cpp from '../public/gif/c++.png';
import html from '../public/gif/html.gif';
import css from '../public/gif/css.gif';
import reactjs from '../public/gif/reactjs.gif';
import boostrap from '../public/gif/boostrap.gif';
import mongodb from '../public/gif/mongodb.gif';
import mysql from '../public/gif/mysql.jpg';

const Skill = () => {

    const [active, setActive] = useRecoilState(activeState);
    useEffect(() => {
        setActive('skill');
    }, [])

    return <>
        <Navbar />
        <div id="skill-container">
            <div className="row m-0 p-0">
                <h3 className="text-center">Programing Language</h3>
                <p className="text-center text-secondary">
                    <FontAwesomeIcon icon={faCode} className='mx-2 text-black' />
                    This section will list all my Programing Language skill
                    <FontAwesomeIcon icon={faCode} className='mx-2 text-black' />
                </p>
            </div>
            <div className="row mx-auto w-50 my-5 align-items-center" id='javascript'>
                <div className="col-auto">
                    <img src={javascript.src} alt="" id="logo" style={{ backgroundColor: 'blue' }} />
                </div>
                <div className="col">
                    <h3>Javascript</h3>
                    <p className="text-secondary">JavaScript is a lightweight, cross-platform, and interpreted scripting language.
                        I have 2 year in javascript. My knowledge of ES6 is very good.
                        I can learn any library or framework if you want.
                    </p>
                </div>
            </div>
            <div className="row mx-auto w-50 my-5 align-items-center" id='python'>
                <div className="col-auto">
                    <img src={python.src} alt="" id="logo" />
                </div>
                <div className="col">
                    <h3>Python</h3>
                    <p className="text-secondary">Python is a widely used general-purpose, high level programming language.
                        With python, you can implement Machine Learning or Deep Learning easily.
                        I have one year in python with Data analysis.
                    </p>
                </div>
            </div>
            <div className="row mx-auto w-50 my-5 align-items-center" id='cpp'>
                <div className="col-auto">
                    <img src={cpp.src} alt="" id="logo" />
                </div>
                <div className="col">
                    <h3>C++</h3>
                    <p className="text-secondary">C++ is an object-oriented programming language which gives a clear structure
                        to programs and allows code to be reused, lowering development costs. Because lowering development costs,
                        i usaully use it in competitive programing. <span>
                            <a href="https://codeforces.com/profile/I_Love_LeNguyenTrucQuynh" target='_blank'>
                                This is account in codeforces.
                            </a></span></p>
                </div>
            </div>
            <div className="row mx-auto w-50 my-5 align-items-center" id='html'>
                <div className="col-auto">
                    <img src={html.src} alt="" id="logo" />
                </div>
                <div className="col">
                    <h3>HTML</h3>
                    <p className='text-secondary'>HTML is the standard markup language for creating Web pages.
                        I usually write it with JSX code</p>
                </div>
            </div>
            <div className="row mx-auto w-50 my-5 align-items-center" id='css'>
                <div className="col-auto">
                    <img src={css.src} alt="" id="logo" style={{ backgroundColor: 'blue' }} />
                </div>
                <div className="col">
                    <h3>CSS</h3>
                    <p className="text-secondary">CSS is the language we use to style a Web page. I don't usually use pure css
                        . I use sass in my website and some css framework. I have 2 year in css, sass, css frame work</p>
                </div>
            </div>
            <div className="row m-0 p-0">
                <h3 className="text-center">Framework/Library</h3>
                <p className="text-center text-secondary">
                    <FontAwesomeIcon icon={faCode} className='mx-2 text-black' />
                    This section will list all my Framework or Library skill
                    <FontAwesomeIcon icon={faCode} className='mx-2 text-black' />
                </p>
            </div>
            <div className="row mx-auto w-50 my-5 align-items-center" id='css'>
                <div className="col-auto">
                    <img src={reactjs.src} alt="" id="logo" />
                </div>
                <div className="col">
                    <h3>React JS</h3>
                    <p className="text-secondary">ReactJS is a declarative, efficient,
                        and flexible JavaScript library for building reusable UI component.
                        I have 2 year in reactjs and nextjs frame work
                    </p>
                </div>
            </div>
            <div className="row mx-auto w-50 my-5 align-items-center" id='css'>
                <div className="col-auto">
                    <img src={boostrap.src} alt="" id="logo" />
                </div>
                <div className="col">
                    <h3>Boostrap</h3>
                    <p className="text-secondary">Boostrap is the world’s most popular framework for building responsive,
                        mobile-first sites, with jsDelivr and a template starter page.
                        I have 2 year in boostrap but If you don't want i use boostrap, i cant use sass or pure css.</p>
                </div>
            </div>
            <div className="row m-0 p-0">
                <h3 className="text-center">Database</h3>
                <p className="text-center text-secondary">
                    <FontAwesomeIcon icon={faDatabase} className='mx-2 text-black' />
                    This section will list all my Database skill
                    <FontAwesomeIcon icon={faDatabase} className='mx-2 text-black' />
                </p>
            </div>
            <div className="row mx-auto w-50 my-5 align-items-center" id='css'>
                <div className="col-auto">
                    <img src={mongodb.src} alt="" id="logo" />
                </div>
                <div className="col">
                    <h3>MongoDb</h3>
                    <p className="text-secondary">MongoDB, the most popular NoSQL database, is an open-source
                        document-oriented database. I use mongodb in my Socoial media project</p>
                </div>
            </div>
            <div className="row mx-auto w-50 my-5 align-items-center" id='css'>
                <div className="col-auto">
                    <img src={mysql.src} alt="" id="logo" />
                </div>
                <div className="col">
                    <h3>MySQL</h3>
                    <p className="text-secondary">MySQL is an open-source relational
                        database management system that works on many platforms. I use it Ecommerce websites</p>
                </div>
            </div>
        </div>
    </>
}

export default Skill
