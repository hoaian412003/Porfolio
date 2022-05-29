import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCircleInfo, faCode, faEnvelope, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { activeState } from '../state.js';
import Link from 'next/link';

const Navbar = () => {

    const [active, setActive] = useRecoilState(activeState);

    return (
        <div className="row p-2 w-100 align-items-center" id="navbar-container">
            <div className="col-auto" style={{ color: '#49484d' }}>
                <h4>THAN</h4>
            </div>
            <div className="col">
                <div className="row justify-content-end mx-5 fs-6 align-items-center">
                    <Link href='/'>
                        <div className="col-auto hover" id={active === 'home' ? 'active' : null}>
                            <FontAwesomeIcon icon={faHouseUser} className='mx-1 icon' />
                            Home
                        </div>
                    </Link>
                    <Link href="/about">
                        <div className="col-auto hover" id={active === 'about' ? 'active' : null}>
                            <FontAwesomeIcon icon={faCircleInfo} className='mx-1 icon' />
                            About
                        </div>
                    </Link>
                    <Link href="/skill" >
                        <div className="col-auto hover" id={active === 'skill' ? 'active' : null}>
                            <FontAwesomeIcon icon={faCode} className='mx-1 icon' />
                            Skill
                        </div>
                    </Link>
                    <Link href="/contact">
                        <div className="col-auto hover" id={active === 'contact' ? 'active' : null}>
                            <FontAwesomeIcon icon={faAddressBook} className='mx-1 icon' />
                            Contact
                        </div>
                    </Link>
                </div>

            </div>
        </div >
    );
}

export default Navbar;
