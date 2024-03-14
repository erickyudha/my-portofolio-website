import { useState } from 'react';
import imgSma from './sman6.png'

const HighSchoolSlide = () => {
    const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const boundingBox = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - boundingBox.left) / boundingBox.width;
        const y = (e.clientY - boundingBox.top) / boundingBox.height;

        setTilt({ x: (x - 0.5) * 30, y: (y - 0.5) * 30 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <div className='default-slide-content'>
            <div
                className="tilted-image"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <img src={imgSma} alt="Tilted" style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }} />
            </div>
        </div>
    )
}

export default HighSchoolSlide;