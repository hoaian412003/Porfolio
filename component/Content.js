import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Content = () => {
    return (
        <div className="container p-0" id='content-container'>
            <h2>Hi, I'am THAN</h2>
            <p style={{ color: '#7a7980', fontSize: '1.1rem' }}>Full stack web developer</p>
            <p style={{ color: '#9b9a9f' }}>
                I have 2 year in fontend with reactjs, html, css, nodesass, bootrasp 4 or boostrap5. I have 1 year in backend with nodejs.
            </p>
            <p className="text-end" style={{ color: '#3c3b40' }}>
                ♥♥♥ Please give me a chance, i will make you happy ♥♥♥
            </p>
            <Link href="/contact">
                <button type="button" className="rounded-3 p-2 my-5 text-center" id="contact-btn">
                    Contact Me
                    <FontAwesomeIcon icon={faComment} className="mx-3" />
                </button>
            </Link>

        </div>
    )
}

export default Content;
