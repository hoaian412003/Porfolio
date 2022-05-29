import React from 'react';
import CatGif from '../public/gif/cat.gif';


const CatAnimation = () => {
    return (
        <div id='cat-background'>
            <img src={CatGif.src} alt="" id='cat-gif'  />
        </div>
    )
}

export default CatAnimation;
