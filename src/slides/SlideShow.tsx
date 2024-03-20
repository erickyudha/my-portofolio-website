import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SlideShow.scss";
import SlideData from "./SlideData";

interface SlideShowProps {
    data: Array<SlideData>;
    index: number;
}

const SlideShow: React.FC<SlideShowProps> = ({ data, index }) => {
    const [listItems] = useState(data.map(obj => obj.name));
    const [hoveredIndex, setHoveredIndex] = useState(index);
    const [selectedData, setSelectedData] = useState(data[index]);
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedData(data[hoveredIndex]);
        navigate(`/resume/${selectedData.name.toLowerCase()}`);
    }, [hoveredIndex, data, navigate, selectedData]);

    const handleClick = (index: number) => {
        setHoveredIndex(index);
    };

    return (
        <section className="slide-show">
            <div className="side">
                <div className="btn-container">
                    <button onClick={() => {
                        navigate('/');
                    }} className="close-btn">
                        <span className="inner">
                            <span className="label">Close</span>
                        </span>
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
