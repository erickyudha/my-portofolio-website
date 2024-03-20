import './ProjectSlide.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectSlide = () => {
    return (
        <div id='project-slide'>
            <h4>PROJECTS</h4>
            <div className='line'></div>
            <ul className='project-list'>
                <li>
                    <h1>Giggle Brigade</h1>
                    <h3>USU Global Game Jam (February 2024) </h3>
                    <ul className='project-tags'>
                        <li>Game Development</li>
                        <li>Unity</li>
                        <li>C#</li>
                        <li>Voice Control</li>
                    </ul>
                    <p>Developed a 2D endless runner game within Unity as part of the USU Global Game Jam 2024. Titled "Giggle Brigade", the game integrates player voice commands for character jumps. Embracing the theme "Make me laugh," players embody a whimsical knight endowed with the unique ability to unleash laughter as a power. </p>
                    <a target='_blank' href="https://github.com/erickyudha/Giggle-Brigade">
                        <FontAwesomeIcon icon={faGithub} />
                        https://github.com/erickyudha/Giggle-Brigade
                    </a>
                </li>
                <li>
                    <h1>Lost Labyrinth's: Rogue's Odyssey</h1>
                    <h3>Bachelor Degree Final Project (September 2023 - January 2024) </h3>
                    <ul className='project-tags'>
                        <li>Game Development</li>
                        <li>Unity</li>
                        <li>C#</li>
                        <li>Procedural Generation</li>
                    </ul>
                    <p>Developed "Lost Labyrinth: Rogue’s Odyssey," a 2D action platformer game utilizing a hybrid procedural content generation approach, created using Unity. This innovative technique ensures dynamic and ever-changing game environments, offering players a unique experience with each playthrough. </p>
                    <a target='_blank' href="https://github.com/erickyudha/Lost-Labyrinths-Rogues-Odyssey">
                        <FontAwesomeIcon icon={faGithub} />
                        https://github.com/erickyudha/Lost-Labyrinths-Rogues-Odyssey
                    </a>
                </li>
                <li>
                    <h1>Fog Computing Simulation</h1>
                    <h3>TALENTA Research USU (September 2023 - February 2024) </h3>
                    <ul className='project-tags'>
                        <li>Python Application</li>
                        <li>Simulation</li>
                        <li>Multi-Thread</li>
                    </ul>
                    <p>As a research assistant to a professor, I contributed to building a simulation application for USU servers using fog computing methodology. Developed the simulation application utilizing multi-threading in Python, ensuring efficient processing. Additionally, generated comprehensive reports using the Pandas library, enabling detailed analysis and insights.</p>
                    <a aria-disabled>
                        <FontAwesomeIcon icon={faGithub} />
                        PRIVATE REPOSITORY
                    </a>
                </li>
                <li>
                    <h1>GoSky - Airplane E-Ticketing App</h1>
                    <h3>Binar Bootcamp Final Project (November 2022 - January 2023) </h3>
                    <ul className='project-tags'>
                        <li>Project Management</li>
                        <li>Scrum</li>
                        <li>OpenAPI</li>
                        <li>Express.js</li>
                        <li>PostgreSQL</li>
                        <li>CI/CD</li>
                    </ul>
                    <p>Led a 9-person team as Product Owner and Backend Team Lead in the creation of a new e-ticketing prototype app platform. Managed product features, sprint tasks, and coordinated between teams to ensure progress aligned with project goals. Oversaw backend API development using Express.js, while also serving as the point of contact for frontend and Android teams, providing support and resolving backend-related issues. This experience strengthened my project management, leadership, and communication skills, contributing to the successful delivery of a good and functional e-ticketing app prototype.</p>
                    <a target='_blank' href="https://github.com/erickyudha/gosky-backend-api">
                        <FontAwesomeIcon icon={faGithub} />
                        https://github.com/erickyudha/gosky-backend-api
                    </a>
                </li>
                <li>
                    <h1>Tuition Reminder Broadcast App</h1>
                    <h3>Pondok Pesantren Hidayatullah, Medan (2022)</h3>
                    <ul className='project-tags'>
                        <li>Web Application</li>
                        <li>Node.js</li>
                        <li>Web-Whatsapp.js</li>
                        <li>SQLite 3</li>
                    </ul>
                    <p>Developed a broadcast messaging application for reminding students parent about tuition fee payments at Pondok Pesantren Hidayatullah, Medan, utilizing WhatsApp. The application was built as a web-based application using JavaScript, enabling efficient and automated communication with students parent to ensure timely payments of school fees.</p>
                    <a target='_blank' href="https://github.com/erickyudha/Aplikasi-Broadcast-WA">
                        <FontAwesomeIcon icon={faGithub} />
                        https://github.com/erickyudha/Aplikasi-Broadcast-WA
                    </a>
                </li>
                <li>
                    <h1>Library App</h1>
                    <h3>2022</h3>
                    <ul className='project-tags'>
                        <li>Desktop Application</li>
                        <li>C#</li>
                        <li>.NET</li>
                        <li>MySQL</li>
                    </ul>
                    <p>Designed and developed a comprehensive desktop library application featuring member and admin login functionalities. Implemented essential features such as book borrowing and return management, along with automated reminders for members to return books on time.</p>
                    <a target='_blank' href="https://github.com/erickyudha/LibraryApp">
                        <FontAwesomeIcon icon={faGithub} />
                        https://github.com/erickyudha/LibraryApp
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ProjectSlide;