import React, { useEffect } from 'react';
import CatAnimation from './CatAnimation.js';
import Navbar from './Navbar.js';
import Content from './Content.js';
import { activeState } from '../state.js';
import { useRecoilState } from 'recoil';


const App = () => {

    const [active, setActive] = useRecoilState(activeState);
    useEffect(() => {
        setActive('home');
    }, [])

    return <div className="container-fluid" style={{ backgroundColor: '#fbfaff', width: '100vw', height: '100vh' }}>
        <Navbar />
        <Content />
        <CatAnimation />
    </div>
}

export default App;
