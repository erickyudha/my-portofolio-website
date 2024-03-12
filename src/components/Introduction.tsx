import './Introduction.scss'
import pic from '../intro.jpg'
import { useEffect } from 'react';

const Introduction = () => {

    return (
        <section id="intro">
            <span className='text-decoration-v left'>COMPUTER SCIENCE ///</span>
            <span className='text-decoration-v right'>/// WEB DEVELOPER</span>
            <div className='box'>
                <div className='text'>
                    <h1>let me introduce myself</h1>
                    <div className='hover-slide'>
                        <div>I'M ERICK YUDHA</div>
                        <div>I'M 21 YEARS OLD</div>
                    </div>
                    <div className='hover-slide'>
                        <div>BORN IN BOGOR</div>
                        <div>LIVE IN MEDAN</div>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nisi. Possimus dolorem mollitia repudiandae optio eaque fuga, praesentium facere! Quasi quis odit pariatur, corporis magni explicabo maiores iure dolore officiis?</p>
                </div>
                <img src={pic} alt="" />
            </div>
        </section>
    )
}

export default Introduction;