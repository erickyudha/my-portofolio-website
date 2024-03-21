import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SlideShow.scss";
import SlideData from "./SlideData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBurger, faHouse } from "@fortawesome/free-solid-svg-icons";

interface SlideShowProps {
    data: Array<SlideData>;
    index: number;
}

const SlideShow: React.FC<SlideShowProps> = ({ data, index }) => {
    const [listItems] = useState(data.map(obj => obj.name));
    const [hoveredIndex, setHoveredIndex] = useState(index);
    const [selectedData, setSelectedData] = useState(data[index]);
    const navigate = useNavigate();
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        setSelectedData(data[hoveredIndex]);
        navigate(`/resume/${selectedData.name.toLowerCase()}`);
    }, [hoveredIndex, data, navigate, selectedData]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleClick = (index: number) => {
        setHoveredIndex(index);
        setIsNavOpen(false);
    };

    return (
        <section className={`slide-show ${isMobileView ? 'mobile-view' : ''}`}>
            <nav>
                <button onClick={() => {
                        setIsNavOpen(true)
                    }} className="sidebar-btn">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <span>ERICKYUDHA.</span>
            </nav>
            <div className={`side ${(isMobileView && !isNavOpen) ? 'mobile-closed' : ''} ${(isMobileView && isNavOpen) ? 'mobile-open' : ''}`} >
                <div className="btn-container">
                    <button onClick={() => {
                        setIsNavOpen(false)
                    }} className="close-btn">
                        <span className="inner">
                            <span className="label">Close</span>
                        </span>
                    </button>
                    <button onClick={() => {
                        navigate('/');
                    }} className="home-btn">
                        <FontAwesomeIcon icon={faHouse} />
                    </button>
                </div>
                <ul className="sidebar-slide">
                    {listItems.map((item, index) => {
                        let classes = "";
                        if (index === hoveredIndex) {
                            classes = "forward-3";
                        } else if (index === hoveredIndex - 1 || index === hoveredIndex + 1) {
                            classes = "forward-2";
                        } else if (index === hoveredIndex - 2 || index === hoveredIndex + 2) {
                            classes = "forward-1";
                        }
                        return (
                            <li
                                key={index}
                                onClick={() => handleClick(index)}
                                className={classes}
                            >
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <main>
                <div className="overlay">
                    {selectedData.content}
                </div>
            </main>
        </section>
    );
};

export default SlideShow;
