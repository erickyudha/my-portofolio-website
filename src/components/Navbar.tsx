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
            } else if (scrollPosition > 10) {
                setNavbarVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        if (sectionId === 'contact') {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`${navbarVisible ? 'visible' : 'hidden'} ${navbarBgVisible ? 'with-bg' : ''}`}>
            <div>
                <button onClick={() => scrollToSection('intro')}>INTRO</button>
                <Link to={"/resume"}>RESUME</Link>
            </div>

            <h1>erickyudha.</h1>

            <div>
                <Link to={"/resume/projects"}>PROJECTS</Link>
                <button onClick={() => scrollToSection('contact')}>CONTACT</button>
            </div>
        </nav>
    );
}

export default Navbar;
