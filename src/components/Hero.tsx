import React, { useEffect } from "react";
import "./Hero.scss";
import bg from "./tokyo-city-aesthetic.gif";
import { Link } from "react-router-dom";

const Hero = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const heroImage = document.getElementById("hero-image");

            if (heroImage) {
                const parallaxValue = scrollPosition * 0.5; // Adjust the parallax effect by changing the multiplier
                heroImage.style.top = `${parallaxValue}px`;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
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
        <section id="hero">
            <img id="hero-image" src={bg} alt="Hero Background" />
            <span className="right-cover"></span>
            <div id="headline">
                <h1 className="neon">
                    H
                    <span className="flicker-slow">E</span>
                    L
                    <span className="flicker-slow">L</span>
                    <span className="flicker-fast">O</span>,
                </h1>
                <h1 className="neon">
                    <span className="flicker-slow">W</span>
                    EL
                    <span className="flicker-slow">C</span>
                    O
                    <span className="flicker-fast">M</span>
                    <span className="flicker-slow">E</span>
                    .
                </h1>
            </div>
            <div className="mobile-nav">
                <button onClick={() => scrollToSection('intro')}>INTRO</button>
                <Link to={"/resume"}>RESUME</Link>
                <Link to={"/resume/projects"}>PROJECTS</Link>
                <button onClick={() => scrollToSection('contact')}>CONTACT</button>
            </div>
        </section>
    );
};

export default Hero;
