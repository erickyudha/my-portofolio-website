import './ExperienceSlide.scss';

const ExperienceSlide = () => {
    return (
        <div id="exp-slide">
            <h4>EXPERIENCE</h4>
            <div className='line'></div>
            <div className='exp-content-outer'>
                <ul className='exp-list'>
                    <li className='exp-item'>
                        <h1>Data Processing Automation</h1>
                        <div className='exp-content'>
                            <h2>Freelance (2023 - 2024)</h2>
                            <ul className='exp-tags'>
                                <li>Data Processing</li>
                                <li>Automation</li>
                                <li>API Integration</li>
                                <li>Web Scraping</li>
                            </ul>
                            <p>Provided tailored data processing solutions to university professors, employing automated processes using Python programming. Utilized a case-by-case approach to implementation, depending on the complexity of the task: <br />
                                <ol>
                                    <li>Applied Excel formulas for straightforward data processing tasks.</li>
                                    <li>Leveraged the Python Pandas library for more intricate data manipulation tasks.</li>
                                    <li>Acquired data from public websites, utilizing official APIs when available. In cases where APIs were not provided, identified and utilized APIs using browser development tools. Employed web crawling techniques, if necessary, with tools like Selenium.</li>
                                    <li>Seamlessly integrated a combination of these methods based on the specific requirements of each data processing task.</li>
                                </ol>
                            </p>
                        </div>
                    </li>
                    <li className='exp-item'>
                        <h1>Graphic Designer</h1>
                        <div className='exp-content'>
                            <h2>RSU Bunda Thamrin Medan (July 2023 - August 2023)</h2>
                            <ul className='exp-tags'>
                                <li>Digital Promotion</li>
                                <li>Adobe</li>
                                <li>Internship</li>
                            </ul>
                            <p>As a Graphic Designer Intern at RSU Bunda Thamrin, I gained hands-on experience in utilizing Adobe Photoshop, Illustrator, and Premiere Pro to create visually engaging materials. Key responsibilities included: <br />
                                <ol>
                                    <li>Designing captivating X-Banners to attract the attention of hospital visitors.</li>
                                    <li>Creating visually appealing Instagram promotions to increase online engagement.</li>
                                    <li>Developing digital doctor schedule promotions for enhanced accessibility and convenience.</li>
                                    <li>Crafting banners for hospital events and various promotional materials to support marketing initiatives.</li>
                                </ol>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ExperienceSlide;