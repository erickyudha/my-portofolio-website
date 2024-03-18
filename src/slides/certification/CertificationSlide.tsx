import './CertificationSlide.scss'

const CertificationSlide = () => {
    return (
        <div id="cert-slide">
            <h4>CERTIFICATIONS</h4>
            <div className='line'></div>
            <ul className='cert-prov-list'>
                <li className='cert-prov'>
                    <h1>Microsoft</h1>
                    <ul className='cert-tags'>
                        <li>Data Processing</li>
                        <li>Automation</li>
                    </ul>
                    <ul className='cert-list'>
                        <li>
                            <h4>Microsoft Office Specialist: Excel (Office 2016)</h4>
                            <h5>January 2022</h5>
                        </li>
                    </ul>
                </li>
                <li className='cert-prov'>
                    <h1>Adobe</h1>
                    <ul className='cert-tags'>
                        <li>Graphic Design</li>
                    </ul>
                    <ul className='cert-list'>
                        <li>
                            <h4>Adobe Certified Associate in Graphic Design & Illustration Using Adobe Illustrator</h4>
                            <h5>March 2021</h5>
                        </li>
                    </ul>
                </li>
                <li className='cert-prov'>
                    <h1>Dicoding Academy</h1>
                    <ul className='cert-tags'>
                        <li>Backend</li>
                        <li>Cloud</li>
                        <li>DevOps</li>
                    </ul>
                    <ul className='cert-list'>
                        <li>
                            <h4>Belajar Membuat Aplikasi Back-End untuk Pemula</h4>
                            <h5>May 2021</h5>
                        </li>
                        <li>
                            <h4>Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)</h4>
                            <h5>April 2021</h5>
                        </li>
                        <li>
                            <h4>Belajar Dasar-Dasar Azure Cloud</h4>
                            <h5>March 2021</h5>
                        </li>
                        <li>
                            <h4>Belajar Dasar-Dasar DevOps</h4>
                            <h5>March 2023</h5>
                        </li>
                        <li>
                            <h4>DevOps Praktis dengan IBM Cloud (Practical DevOps with IBM Cloud)</h4>
                            <h5>April 2021</h5>
                        </li>
                    </ul>
                </li>


            </ul>
        </div>
    )
}

export default CertificationSlide;