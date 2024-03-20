import './AchievementSlide.scss'

const AchievementSlide = () => {
    return (
        <div id='ach-slide'>
            <h4>ACHIEVEMENTS</h4>
            <div className='line'></div>
            <ul className='ach-list'>
                <li>
                    <h1> Runner-up Best Talent | Indonesia Next Season 6</h1>
                    <h3>Telkomsel - June 2022</h3>
                    <ul className='ach-tags'>
                        <li>Graphic Design</li>
                        <li>Business Creation</li>
                        <li>Product Management</li>
                        <li>Idea Pitching</li>
                    </ul>
                    <p>Recognized as one of the Top 34 National Talents of INDONESIANEXT SEASON 6, an esteemed online program attracting over 10,000 participants. Engaged in a comprehensive 10-stage curriculum comprising webinars, online learning modules, rigorous hard and soft skills training, and international certification. Demonstrated proficiency by achieving Adobe Illustrator ACA certification with outstanding results. Additionally, participated in specialized training on ideation and business pitching, showcasing innovative ideas to a national panel of jurors.</p>
                </li>
                <li>
                    <h1>Winner | IDCamp Developer Challenge: Snapchat AR Creator – Ramadan Series</h1>
                    <h3>Dicoding - January 2021</h3>
                    <ul className='ach-tags'>
                        <li>Augmented Reality</li>
                        <li>Graphic Design</li>
                    </ul>
                    <p>Crafted the award-winning Spachat AR Filter with a "Ramadhan" theme using Lens Studio. This interactive and engaging filter captivated users with its immersive experience, celebrating the spirit of Ramadhan in a visually compelling way.</p>
                </li>
            </ul>
        </div>
    )
}

export default AchievementSlide;