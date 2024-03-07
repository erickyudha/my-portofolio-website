import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return(
        <nav>
            <div>
                <Link to={"/home"}>HOME</Link>
                <Link to={"/about"}>ABOUT</Link>
            </div>

            <h1>ERICK YUDHA</h1>

            <div>
                <Link to={"/projects"}>PROJECTS</Link>
                <Link to={"/contact"}>CONTACT</Link>
            </div>
        </nav>
    )
}

export default Navbar;