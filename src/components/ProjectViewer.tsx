import './ProjectViewer.scss'

const ProjectViewer = () => {
    return (
        <section id="project">
            <div className='box'>
                <h1>My Best Project</h1>
                <span>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTBiIzVKtje7EGkn_EZeQ8BIMeTUZ2mQ9915Zv3pGAxCF0bp0FQOvTdC2-UlvkVcw/embed?start=false&loop=true&delayms=3000" allowFullScreen={true}></iframe>
                </span>
                <p>Led a 9-person team as Product Owner and Backend Team Lead in the creation of a new e-ticketing prototype app platform. Managed product features, sprint tasks, and coordinated between teams to ensure progress aligned with project goals. Oversaw backend API development using Express.js, while also serving as the point of contact for frontend and Android teams, providing support and resolving backend-related issues. This experience strengthened my project management, leadership, and communication skills, contributing to the successful delivery of a good and functional e-ticketing app prototype.</p>
            </div>
        </section>
    )
}

export default ProjectViewer;