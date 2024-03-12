import React, { useEffect } from "react";
import "./Hero.scss";
import bg from "./tokyo-city-aesthetic.gif";

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
            <h4>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, blanditiis autem perferendis commodi delectus eligendi quaerat quia qui. Ex officiis rerum saepe sapiente aspernatur minus nulla officia quae accusantium harum.
            </h4>
        </section>
    );
};

export default Hero;
