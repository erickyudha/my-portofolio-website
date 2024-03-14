import React, { useState } from "react";
import "./SlideShow.scss";
import SlideData from "./SlideData";

interface SlideShowProps {
    data: Array<SlideData>
}

const SlideShow = ({ data }: SlideShowProps) => {
    // State to track list items and currently hovered item index
    const [listItems] = useState(data.map(obj => obj.name));
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [selectedData, setSelectedData] = useState(data[0]);

    // Function to handle hover over list item
    const handleClick = (index: number) => {
        setHoveredIndex(index);
        setSelectedData(data[index]);
    };

    return (
        <section className="slide-show">
            <div className="side">
                <div className="btn-container">
                    <button className="close-btn">
                        <span className="inner">
                            <span className="label">Close</span>
                        </span>
                    </button>
                </div>
                <ul className="sidebar-slide">
                    {/* Map through list items and render each one */}
                    {listItems.map((item, index) => {
                        // Calculate the classes for each list item based on its position relative to the hovered item
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
                    <div className="top-text">
                        <h4>{selectedData.category}</h4>
                        <div className="line"></div>
                        <h1>{selectedData.title}</h1>
                        <div className="period">/ / /  {selectedData.time}</div>

                        <span className="decoration">ERICK YUDHA / / /</span>
                    </div>
                    <div className="slide-content">
                        {selectedData.content}
                    </div>
                    <div className="bottom-text">
                        <p>{selectedData.description}</p>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default SlideShow;
