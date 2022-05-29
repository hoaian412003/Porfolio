import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar.js';
import { activeState } from '../state.js';
import { useRecoilState } from 'recoil';

const plainText =
    `Hi, i'am THAN. My full name is Tran Hoai An. I live in VietNam.
    I have 2 year in fullstack in web developer.
    I have many experience in reactjs, nodejs, mongodb.
    Additionally i have experience in github, gitlab, CICD.
    I'am also write unit test very good because i have 3 year in competitive programming.
    Please give me a chance and i won't let you down!.
    Goto Skill page to see more information about me !!! 
`;

const About = () => {
    const [active, setActive] = useRecoilState(activeState);
    const [text, setText] = useState('');

    useEffect(() => {
        setActive('about');
    }, [])

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i === plainText.length) clearInterval(interval);
            setText(plainText.substring(0, i));
            i++;
        }, 20)
    }, [])

    return (
        <>
            < Navbar />
            <div className="container text-start w-50 mx-auto" id='about-container'>
                <div className="col" >
                    <p id='about-content'>{text}</p>
                </div>
                {
                    text === plainText ?
                        <div className="row text-center my-5 w-100 mx-auto" style={{ color: '#6c55e2' }}>
                            ・❥・・❥・ All the best to you! ・❥・・❥・
                        </div> : null
                }
            </div>
        </>
    )
}

export default About;
