import './EducationSlide.scss'

const EducationSlide = () => {
    return (
        <div id="education-slide">
            <h4>EDUCATION</h4>
            <div className="line" />
            <ul className='edu-list'>
                <li className='edu-item'>
                    <h1>UNIVERSITAS SUMATERA UTARA</h1>
                    <h2>Computer Science - Bachelor Degree</h2>
                    <h3>September 2020 - March 2024</h3>
                    <h4>GPA 3.84 - CUM LAUDE</h4>
                    <p className='desc'>Relevant Courses:
                        <span className="tooltip t" data-tooltip="HTML, CSS, JS, PHP" data-tooltip-pos="up" data-tooltip-length="medium">Web Development</span>
                        <span className="tooltip t" data-tooltip="MySQL, SQLite" data-tooltip-pos="up" data-tooltip-length="medium">Database Management</span>
                        <span className="tooltip t" data-tooltip="Java, C#, .NET" data-tooltip-pos="up" data-tooltip-length="medium">Desktop Development</span>
                        <span className="tooltip t" data-tooltip="Unity, C#" data-tooltip-pos="up" data-tooltip-length="medium">Game Development</span>
                    </p>
                </li>
                <li className='edu-item'>
                    <h1>BINAR ACADEMY</h1>
                    <h2>Fullstack Web Development - Kampus Merdeka</h2>
                    <h3>August 2022 - January 2023</h3>
                    <h4>HARDSKILL 5/5 & SOFTSKILL 4.9/5 - MOST PROGRESSIVE STUDENT AWARD</h4>
                    <p className='desc'>Relevant Skills:
                        <span className="tooltip t" data-tooltip="React.js, Redux" data-tooltip-pos="up" data-tooltip-length="medium">Frontend</span>
                        <span className="tooltip t" data-tooltip="Express.js, OpenAPI, Postman" data-tooltip-pos="up" data-tooltip-length="medium">Backend</span>
                        <span className="tooltip t" data-tooltip="Jest, Supertest" data-tooltip-pos="up" data-tooltip-length="medium">Testing</span>
                        <span className="tooltip t" data-tooltip="Git, Github, Railway, Vercel" data-tooltip-pos="up" data-tooltip-length="medium">CI/CD</span>
                        <span className="tooltip t" data-tooltip="Agile, Scrum, Kanban" data-tooltip-pos="up" data-tooltip-length="medium">Project Management</span>
                    </p>
                </li>
            </ul>

        </div >
    )
}

export default EducationSlide;