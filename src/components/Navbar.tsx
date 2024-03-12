import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    const [navbarVisible, setNavbarVisible] = useState(true);
    const [navbarBgVisible, setNavbarBgVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY / window.innerHeight * 100;

            if (scrollPosition <= 10) {
                setNavbarVisible(true);
                setNavbarBgVisible(false);
            } else if (scrollPosition > 10 && scrollPosition <= 105) {
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
                setNavbarBgVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${navbarVisible ? 'visible' : 'hidden'} ${navbarBgVisible ? 'with-bg' : ''}`}>
            <div>
                <Link to={"/home"}>HOME</Link>
                <Link to={"/about"}>ABOUT</Link>
            </div>

            <h1>ERICK YUDHA</h1>

            <div>
                <Link to={"/projects"}>PROJECTS</Link>
                <Link to={"/contact"}>CONTACT</Link>
            </div>
        </nav>
    );
}

export default Navbar;
