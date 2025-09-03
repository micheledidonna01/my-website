import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
const Homepage = () => {
    return (
        <div className='home'>
            <h1 className='text-success text-center'>Welcome to the Homepage</h1>
            <div className='d-flex justify-content-evenly bg-body-secondary p-3'>
                <div className=''><Link to="/projects">Projects</Link></div>
                <div className=''><Link to="/contacts">Contacts</Link></div>
                <div className=''><Link to="/social">Social</Link></div>
                <div className=''><Link to="/story">MyProfile</Link></div>
            </div>
        </div>
    );
}

export default Homepage;